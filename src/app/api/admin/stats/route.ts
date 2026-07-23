import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Event from "@/models/Event";
import Seva from "@/models/Seva";
import Donation from "@/models/Donation";

export async function GET() {
  try {
    await connectToDatabase();
    const [eventsCount, sevasCount, donationsAgg] = await Promise.all([
      Event.countDocuments({ isDeleted: false }),
      Seva.countDocuments({ isDeleted: false }),
      Donation.aggregate([
        { $match: { paymentStatus: "Success" } },
        { $group: { _id: null, total: { $sum: "$amount" }, count: { $sum: 1 } } },
      ]),
    ]);

    const donationStats = donationsAgg[0] ?? { total: 0, count: 0 };

    return NextResponse.json({
      eventsCount,
      sevasCount,
      totalDonations: donationStats.total,
      donationsCount: donationStats.count,
    });
  } catch (err) {
    console.error("[stats]", err);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
