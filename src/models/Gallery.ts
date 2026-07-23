import mongoose, { Schema, Document, Model } from "mongoose";

export interface IGallery extends Document {
  title: string;
  imageUrl: string;
  category: string;
  status: "Published" | "Draft" | "Archived";
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const gallerySchema = new Schema<IGallery>(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, default: "general", index: true },
    status: {
      type: String,
      enum: ["Published", "Draft", "Archived"],
      default: "Published",
      index: true,
    },
    isDeleted: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

const Gallery: Model<IGallery> =
  mongoose.models.Gallery || mongoose.model<IGallery>("Gallery", gallerySchema);

export default Gallery;
