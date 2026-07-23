/**
 * Minimal, dependency-free admin auth.
 *
 * A signed session cookie (HMAC-SHA256 over an expiry timestamp) proves the
 * holder logged in with the admin password. Everything here runs on the Edge
 * runtime (middleware) as well as Node route handlers — it only uses Web Crypto.
 *
 * Requires two secrets in the environment:
 *   ADMIN_PASSWORD  — the shared admin login password
 *   SESSION_SECRET  — a long random string used to sign session cookies
 */

const enc = new TextEncoder();
export const SESSION_COOKIE = "admin_session";
const DEFAULT_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

function b64url(buf: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function hmacKey(): Promise<CryptoKey> {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET is not set");
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

/** Constant-time string comparison (avoids leaking length/position via timing). */
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Mint a signed session token that expires `ttlMs` from now. */
export async function signSession(ttlMs = DEFAULT_TTL_MS): Promise<string> {
  const payload = String(Date.now() + ttlMs);
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(), enc.encode(payload));
  return `${payload}.${b64url(sig)}`;
}

/** Verify a session token's signature and expiry. Never throws. */
export async function verifySession(token?: string): Promise<boolean> {
  try {
    if (!token) return false;
    const dot = token.lastIndexOf(".");
    if (dot <= 0) return false;
    const payload = token.slice(0, dot);
    const sig = token.slice(dot + 1);
    const expected = b64url(await crypto.subtle.sign("HMAC", await hmacKey(), enc.encode(payload)));
    if (!safeEqual(expected, sig)) return false;
    const exp = Number(payload);
    return Number.isFinite(exp) && exp > Date.now();
  } catch {
    return false;
  }
}
