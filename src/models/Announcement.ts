import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAnnouncement extends Document {
  title: string;
  content: string;
  link: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const announcementSchema = new Schema<IAnnouncement>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    link: { type: String, default: "" },
    isActive: { type: Boolean, default: true, index: true },
    isDeleted: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

const Announcement: Model<IAnnouncement> =
  mongoose.models.Announcement ||
  mongoose.model<IAnnouncement>("Announcement", announcementSchema);

export default Announcement;
