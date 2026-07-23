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

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const eventId = (await params).id;
    const event = await Event.findOne({ _id: eventId, isDeleted: false });

    if (!event) {
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
    await connectToDatabase();
    const eventId = (await params).id;

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
