import mongoose, { Schema, Document, Model } from "mongoose";

export interface INewsletter extends Document {
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const newsletterSchema = new Schema<INewsletter>(
  {
    email: { type: String, required: true, unique: true, index: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Newsletter: Model<INewsletter> =
  mongoose.models.Newsletter ||
  mongoose.model<INewsletter>("Newsletter", newsletterSchema);

export default Newsletter;
