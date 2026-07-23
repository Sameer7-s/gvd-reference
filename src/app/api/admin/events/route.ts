import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Event from "@/models/Event";
import { z } from "zod";

const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.string().or(z.date()),
  description: z.string().optional(),
  location: z.string().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
  status: z.enum(["Published", "Draft", "Archived"]).optional(),
});

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const url = new URL(req.url);
    const search = url.searchParams.get("search") || "";
    const status = url.searchParams.get("status");

    const query: any = { isDeleted: false };
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    if (status) {
      query.status = status;
    }

    const events = await Event.find(query).sort({ date: -1 });
    return NextResponse.json(events);
  } catch (err) {
    console.error("[events GET]", err);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const validatedData = eventSchema.parse(body);

    const slug = validatedData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    
    console.log("PAYLOAD RECEIVED:", body);
    console.log("VALIDATED DATA:", validatedData);
    console.log("GENERATED SLUG:", slug);
    console.log("FINAL OBJECT:", { ...validatedData, slug });

    const newEvent = await Event.create({
      ...validatedData,
      slug,
    });

    return NextResponse.json(newEvent, { status: 201 });
  } catch (err: any) {
    console.error("[events POST] ERROR:", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Validation failed", error: err.issues[0]?.message || "Validation failed" }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal Server Error", error: err.message || err.toString() }, { status: 500 });
  }
}
