import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/mongodb";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Creates an email+password account. Auth.js can't create Credentials users
// itself, so signup lives here; the login page calls this then signs in.
export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json().catch(() => ({}));
  const mail = String(email ?? "").toLowerCase().trim();

  if (!EMAIL_RE.test(mail)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (typeof password !== "string" || password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  try {
    const db = await getDb();
    const existing = await db.collection("users").findOne({ email: mail });
    if (existing) {
      return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    await db.collection("users").insertOne({
      email: mail,
      name: typeof name === "string" && name.trim() ? name.trim() : null,
      passwordHash,
      provider: "credentials",
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[signup]", err);
    return NextResponse.json({ error: "Could not create account. Please try again." }, { status: 500 });
  }
}
