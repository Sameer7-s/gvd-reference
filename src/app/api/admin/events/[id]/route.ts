import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Event from "@/models/Event";
import { z } from "zod";

const eventSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  date: z.string().or(z.date()).optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
  status: z.enum(["Published", "Draft", "Archived"]).optional(),
});

<<<<<<< HEAD
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const eventId = (await params).id;
    const event = await Event.findOne({ _id: eventId, isDeleted: false });

    if (!event) {
=======
// Only these fields may be written from the client (prevents mass-assignment).
const ALLOWED = ["title", "date", "description", "location", "image", "category"];

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid event id" }, { status: 400 });
    }
    const body = await req.json().catch(() => ({}));
    const update: Record<string, unknown> = {};
    for (const key of ALLOWED) {
      if (body[key] !== undefined) update[key] = body[key];
    }
    if (Object.keys(update).length === 0) {
      return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection("events").updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...update, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
>>>>>>> 302b5cae1d296bbcb3a5f4b1dba0b13b3da2befd
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (err) {
    console.error("[event GET]", err);
    return NextResponse.json({ error: "Failed to fetch event" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const eventId = (await params).id;
    const body = await req.json();
    const validatedData = eventSchema.parse(body);

    const updatedEvent = await Event.findOneAndUpdate(
      { _id: eventId, isDeleted: false },
      { $set: validatedData },
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(updatedEvent);
  } catch (err) {
    console.error("[event PUT]", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues[0]?.message || "Validation failed" }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
<<<<<<< HEAD
    await connectToDatabase();
    const eventId = (await params).id;
=======
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid event id" }, { status: 400 });
    }
    const db = await getDb();
>>>>>>> 302b5cae1d296bbcb3a5f4b1dba0b13b3da2befd

    const deletedEvent = await Event.findOneAndUpdate(
      { _id: eventId, isDeleted: false },
      { $set: { isDeleted: true } },
      { new: true }
    );

    if (!deletedEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Event deleted successfully" });
  } catch (err) {
    console.error("[event DELETE]", err);
    return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
  }
}
