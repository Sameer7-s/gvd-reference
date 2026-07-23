import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { getSevas } from "@/lib/content";

/**
 * SIMULATED donation endpoint.
 *
 * Validates the donation server-side and records it with status "simulated"
 * so the admin dashboard reflects real numbers. Amount is stored in paise to
 * match both the admin stats display and how real gateways (Razorpay/PayU)
 * report amounts.
 *
 * ponytail: no real payment yet — tomorrow, replace the insert with
 * create-order → redirect → verify-signature → record(status:"paid").
 * ponytail: no rate limiting yet (P1-5) — public unauthenticated route.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[0-9+\-\s]{8,15}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { seva, frequency, amount, name, email, phone, website } = body;

    // Honeypot: bots fill this hidden field. Pretend success, store nothing.
    if (website) return NextResponse.json({ ok: true, simulated: true }, { status: 201 });

    const sevaDef = (await getSevas()).find((s) => s.slug === seva);
    const amt = Number(amount);
    const invalid: string[] = [];
    if (!sevaDef) invalid.push("seva");
    if (!Number.isFinite(amt) || amt < 10 || amt > 1_000_000) invalid.push("amount");
    if (typeof name !== "string" || !name.trim()) invalid.push("name");
    if (typeof email !== "string" || !EMAIL.test(email)) invalid.push("email");
    if (typeof phone !== "string" || !PHONE.test(phone)) invalid.push("phone");
    if (frequency !== "once" && frequency !== "monthly") invalid.push("frequency");
    if (invalid.length) {
      return NextResponse.json({ error: "Invalid fields", fields: invalid }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection("donations").insertOne({
      seva: sevaDef!.slug,
      sevaTitle: sevaDef!.title,
      amount: Math.round(amt) * 100, // paise
      frequency,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      status: "simulated",
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true, simulated: true, id: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error("[donate]", err);
    return NextResponse.json({ error: "Failed to record donation" }, { status: 500 });
  }
}
