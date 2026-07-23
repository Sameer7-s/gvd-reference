import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISeva extends Document {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  amounts: number[];
  categories: string[];
  images: string[];
  highlight: boolean;
  isFeatured: boolean;
  availability: "Available" | "Sold Out" | "Coming Soon";
  status: "Published" | "Draft" | "Archived";
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const sevaSchema = new Schema<ISeva>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    tagline: { type: String, default: "" },
    description: { type: String, default: "" },
    icon: { type: String, default: "heart" },
    amounts: { type: [Number], default: [501, 1001, 2501, 5001] },
    categories: { type: [String], default: ["general"], index: true },
    images: { type: [String], default: [] },
    highlight: { type: Boolean, default: false, index: true },
    isFeatured: { type: Boolean, default: false, index: true },
    availability: {
      type: String,
      enum: ["Available", "Sold Out", "Coming Soon"],
      default: "Available",
    },
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

sevaSchema.pre("save", async function () {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
});

const Seva: Model<ISeva> =
  mongoose.models.Seva_New || mongoose.model<ISeva>("Seva_New", sevaSchema, "sevas");

export default Seva;
