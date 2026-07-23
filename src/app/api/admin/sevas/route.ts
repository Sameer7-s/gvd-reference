import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Seva from "@/models/Seva";
import { z } from "zod";

const sevaSchema = z.object({
  title: z.string().min(1, "Title is required"),
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

    const sevas = await Seva.find(query).sort({ createdAt: -1 });
    return NextResponse.json(sevas);
  } catch (err) {
    console.error("[sevas GET]", err);
    return NextResponse.json({ error: "Failed to fetch sevas" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const validatedData = sevaSchema.parse(body);

    const slug = validatedData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    
    const newSeva = await Seva.create({
      ...validatedData,
      slug,
    });

    return NextResponse.json(newSeva, { status: 201 });
  } catch (err: any) {
    console.error("[sevas POST] ERROR:", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Validation failed", error: err.issues[0]?.message || "Validation failed" }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal Server Error", error: err.message || err.toString() }, { status: 500 });
  }
}
