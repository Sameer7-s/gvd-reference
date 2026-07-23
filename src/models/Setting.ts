import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISetting extends Document {
  key: string;
  value: any;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const settingSchema = new Schema<ISetting>(
  {
    key: { type: String, required: true, unique: true, index: true },
    value: { type: Schema.Types.Mixed, required: true },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

const Setting: Model<ISetting> =
  mongoose.models.Setting || mongoose.model<ISetting>("Setting", settingSchema);

export default Setting;
