import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const sevas = await db.collection("sevas").find({}).sort({ order: 1 }).toArray();
    return NextResponse.json(sevas);
  } catch (err) {
    console.error("[sevas GET]", err);
    return NextResponse.json({ error: "Failed to fetch sevas" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, tagline, description, icon, amounts, highlight, slug } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: "title and slug are required" }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection("sevas").insertOne({
      title,
      slug,
      tagline: tagline ?? "",
      description: description ?? "",
      icon: icon ?? "heart",
      amounts: amounts ?? [501, 1001, 2501, 5001],
      highlight: highlight ?? false,
      createdAt: new Date(),
    });

    return NextResponse.json({ insertedId: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error("[sevas POST]", err);
    return NextResponse.json({ error: "Failed to create seva" }, { status: 500 });
  }
}
