import { NextRequest, NextResponse } from "next/server";

/**
 * Generates a fresh nonce per request and attaches a strict
 * Content-Security-Policy. Next.js automatically tags its own inline
 * bootstrap scripts with this nonce, so `script-src` can stay locked down
 * with `strict-dynamic` and no `unsafe-inline`.
 */
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV !== "production";

  // PRODUCTION: strict nonce + strict-dynamic, no unsafe-inline for scripts.
  // DEVELOPMENT: relaxed so Next's HMR / React-refresh / dev-overlay run cleanly —
  // they inject inline + eval'd scripts and open an HMR websocket that the strict
  // policy would otherwise block (surfacing as a dev-overlay "issue").
  const scriptSrc = isDev
    ? `'self' 'unsafe-inline' 'unsafe-eval'`
    : `'self' 'nonce-${nonce}' 'strict-dynamic'`;
  const connectSrc = isDev ? `'self' ws: wss:` : `'self'`;

  const csp = [
    `default-src 'self'`,
    `script-src ${scriptSrc}`,
    // next/font self-hosts fonts; inline styles are still emitted, hence 'unsafe-inline'.
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob: https:`,
    `font-src 'self' data:`,
    `connect-src ${connectSrc}`,
    // Allow privacy-friendly YouTube embeds and Google Maps iframes only.
    `frame-src 'self' https://www.youtube-nocookie.com https://www.google.com`,
    `media-src 'self' https:`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `manifest-src 'self'`,
    `worker-src 'self' blob:`,
    `upgrade-insecure-requests`,
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  // Only expose a nonce in production, where the strict CSP actually requires it.
  // In development the policy uses 'unsafe-inline', so emitting a nonce attribute
  // would only create a needless server/client hydration diff.
  if (!isDev) {
    requestHeaders.set("x-nonce", nonce);
  }
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  // Run on all routes except static assets and image optimisation output.
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
