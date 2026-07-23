import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDonation extends Document {
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  amount: number;
  paymentId: string;
  paymentStatus: "Success" | "Pending" | "Failed";
  purpose: string;
  createdAt: Date;
  updatedAt: Date;
}

const donationSchema = new Schema<IDonation>(
  {
    donorName: { type: String, required: true },
    donorEmail: { type: String, required: true, index: true },
    donorPhone: { type: String, default: "" },
    amount: { type: Number, required: true, index: true },
    paymentId: { type: String, required: true, unique: true },
    paymentStatus: {
      type: String,
      enum: ["Success", "Pending", "Failed"],
      default: "Pending",
      index: true,
    },
    purpose: { type: String, default: "General Donation" },
  },
  { timestamps: true }
);

const Donation: Model<IDonation> =
  mongoose.models.Donation || mongoose.model<IDonation>("Donation", donationSchema);

export default Donation;
