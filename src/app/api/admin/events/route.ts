import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const events = await db
      .collection("events")
      .find({})
      .sort({ date: -1 })
      .toArray();
    return NextResponse.json(events);
  } catch (err) {
    console.error("[events GET]", err);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, date, description, location, image, category } = body;

    if (!title || !date) {
      return NextResponse.json({ error: "title and date are required" }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection("events").insertOne({
      title,
      date,
      description: description ?? "",
      location: location ?? "",
      image: image ?? "",
      category: category ?? "general",
      createdAt: new Date(),
    });

    return NextResponse.json({ insertedId: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error("[events POST]", err);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}
