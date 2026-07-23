import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "Unread" | "Read" | "Resolved";
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, index: true },
    phone: { type: String, default: "" },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["Unread", "Read", "Resolved"],
      default: "Unread",
      index: true,
    },
    isDeleted: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);

export default Contact;
