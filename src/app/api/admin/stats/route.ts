import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const [eventsCount, sevasCount, donationsAgg] = await Promise.all([
      db.collection("events").countDocuments(),
      db.collection("sevas").countDocuments(),
      db.collection("donations").aggregate([
        { $group: { _id: null, total: { $sum: "$amount" }, count: { $sum: 1 } } },
      ]).toArray(),
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
