import type { NextConfig } from "next";

/**
 * Static security headers applied to every response.
 * The Content-Security-Policy is generated per-request with a nonce in
 * `middleware.ts` (the strong, recommended approach for the App Router).
 */
const securityHeaders = [
  // Force HTTPS for two years, including subdomains; eligible for the preload list.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Stop browsers from MIME-sniffing a response away from the declared type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Defence-in-depth against clickjacking (CSP frame-ancestors is the primary control).
  { key: "X-Frame-Options", value: "DENY" },
  // Don't leak full URLs to third parties.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Drop access to powerful features the site never uses.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=(), payment=(self)",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Isolate the browsing context (mitigates Spectre-style cross-origin leaks).
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  devIndicators: false,
  // Keep file tracing scoped to this app (avoids picking up D:\OneDrive\package-lock.json).
  outputFileTracingRoot: import.meta.dirname,

  images: {
    formats: ["image/avif", "image/webp"],
    // When the temple adds real photography, allow these trusted hosts.
    remotePatterns: [
      { protocol: "https", hostname: "**.harekrishnavizag.org" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
