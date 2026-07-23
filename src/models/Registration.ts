import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRegistration extends Document {
  eventId: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  status: "Confirmed" | "Pending" | "Cancelled";
  createdAt: Date;
  updatedAt: Date;
}

const registrationSchema = new Schema<IRegistration>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
      index: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true, index: true },
    phone: { type: String, required: true },
    numberOfPeople: { type: Number, default: 1 },
    status: {
      type: String,
      enum: ["Confirmed", "Pending", "Cancelled"],
      default: "Pending",
      index: true,
    },
  },
  { timestamps: true }
);

const Registration: Model<IRegistration> =
  mongoose.models.Registration ||
  mongoose.model<IRegistration>("Registration", registrationSchema);

export default Registration;
