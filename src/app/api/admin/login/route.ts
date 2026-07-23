import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, signSession, safeEqual } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD;
  if (!expectedUser || !expectedPass || !process.env.SESSION_SECRET) {
    return NextResponse.json(
      { error: "Admin auth is not configured. Set ADMIN_USERNAME, ADMIN_PASSWORD and SESSION_SECRET." },
      { status: 500 }
    );
  }

  const { username, password } = await req
    .json()
    .catch(() => ({ username: undefined, password: undefined }));
  // Check both, without short-circuiting, so a wrong username and a wrong
  // password fail identically (no hint about which half was right).
  const okUser = typeof username === "string" && safeEqual(username, expectedUser);
  const okPass = typeof password === "string" && safeEqual(password, expectedPass);
  if (!okUser || !okPass) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
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
