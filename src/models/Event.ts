import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEvent extends Document {
  title: string;
  slug: string;
  date: Date;
  description: string;
  location: string;
  image: string;
  category: string;
  status: "Published" | "Draft" | "Archived";
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    date: { type: Date, required: true, index: true },
    description: { type: String, default: "" },
    location: { type: String, default: "" },
    image: { type: String, default: "" },
    category: { type: String, default: "general", index: true },
    status: {
      type: String,
      enum: ["Published", "Draft", "Archived"],
      default: "Draft",
      index: true,
    },
    isDeleted: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

// Pre-validate hook for slug generation if slug is missing
eventSchema.pre("save", async function () {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
});

const Event: Model<IEvent> =
  mongoose.models.Event_New || mongoose.model<IEvent>("Event_New", eventSchema, "events");

export default Event;
