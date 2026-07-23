import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

type Params = { params: Promise<{ id: string }> };

// Only these fields may be written from the client (prevents mass-assignment).
const ALLOWED = ["title", "slug", "tagline", "description", "icon", "amounts", "highlight"];

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid seva id" }, { status: 400 });
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
    const result = await db.collection("sevas").updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...update, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Seva not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[sevas PUT]", err);
    return NextResponse.json({ error: "Failed to update seva" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid seva id" }, { status: 400 });
    }
    const db = await getDb();

    const result = await db.collection("sevas").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Seva not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[sevas DELETE]", err);
    return NextResponse.json({ error: "Failed to delete seva" }, { status: 500 });
  }
}
