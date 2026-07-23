import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Seva from "@/models/Seva";
import { z } from "zod";

const sevaSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  slug: z.string().optional(),
  tagline: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  amounts: z.array(z.number()).optional(),
  categories: z.array(z.string()).optional(),
  images: z.array(z.string()).optional(),
  highlight: z.boolean().optional(),
  isFeatured: z.boolean().optional(),
  availability: z.enum(["Available", "Sold Out", "Coming Soon"]).optional(),
  status: z.enum(["Published", "Draft", "Archived"]).optional(),
});

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const sevaId = (await params).id;
    const seva = await Seva.findOne({ _id: sevaId, isDeleted: false });

    if (!seva) {
      return NextResponse.json({ error: "Seva not found" }, { status: 404 });
    }

    return NextResponse.json(seva);
  } catch (err) {
    console.error("[seva GET]", err);
    return NextResponse.json({ error: "Failed to fetch seva" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const sevaId = (await params).id;
    const body = await req.json();
    const validatedData = sevaSchema.parse(body);

    const updatedSeva = await Seva.findOneAndUpdate(
      { _id: sevaId, isDeleted: false },
      { $set: validatedData },
      { new: true, runValidators: true }
    );

    if (!updatedSeva) {
      return NextResponse.json({ error: "Seva not found" }, { status: 404 });
    }

    return NextResponse.json(updatedSeva);
  } catch (err) {
    console.error("[seva PUT]", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues[0]?.message || "Validation failed" }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to update seva" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const sevaId = (await params).id;

    const deletedSeva = await Seva.findOneAndUpdate(
      { _id: sevaId, isDeleted: false },
      { $set: { isDeleted: true } },
      { new: true }
    );

    if (!deletedSeva) {
      return NextResponse.json({ error: "Seva not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Seva deleted successfully" });
  } catch (err) {
    console.error("[seva DELETE]", err);
    return NextResponse.json({ error: "Failed to delete seva" }, { status: 500 });
  }
}
