import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, signSession, safeEqual } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !process.env.SESSION_SECRET) {
    return NextResponse.json(
      { error: "Admin auth is not configured. Set ADMIN_PASSWORD and SESSION_SECRET." },
      { status: 500 }
    );
  }

  const { password } = await req.json().catch(() => ({ password: undefined }));
  if (typeof password !== "string" || !safeEqual(password, expected)) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, await signSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 8 * 60 * 60, // 8 hours, matches the token TTL
  });
  return res;
}
