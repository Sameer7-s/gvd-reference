# Hare Krishna Movement, Visakhapatnam — Official Website

A production-ready, SEO-optimised and security-hardened temple website for **HKM Vizag**
(Hare Krishna Vaikuntham Cultural Centre, Gambhiram), built with Next.js 15 + Tailwind CSS v4.

> Hare Kṛṣṇa Hare Kṛṣṇa · Kṛṣṇa Kṛṣṇa Hare Hare · Hare Rāma Hare Rāma · Rāma Rāma Hare Hare

---

## Highlights

- **Stunning, original design** — authentic Vaishnava palette (saffron, temple gold, deep maroon,
  Krishna blue) on warm cream, with classical **Marcellus** display type, **Inter** body, and
  **Noto Serif Devanagari** for the mahā-mantra. All sacred geometry (mandalas, torana arches,
  lotus, peacock feather) is hand-built SVG — no stock images, no copyright risk.
- **Live darshan status** — real-time Open/Closed indicator computed in IST, plus a festival
  countdown.
- **Complete pages** — Home, About, Visit (timings + directions + guidelines), Donate (multi-step
  seva form), Privacy, Terms, custom 404.
- **Accessibility-first** — semantic landmarks, skip link, labelled forms, visible focus rings,
  `prefers-reduced-motion` support, 4.5:1+ contrast.

## SEO

- Per-page `Metadata` (titles, descriptions, canonicals, Open Graph, Twitter cards).
- **JSON-LD structured data**: `HinduTemple` / `PlaceOfWorship`, `NGO`, `WebSite`, `Event`
  (festivals), `FAQPage`, `BreadcrumbList` — all rendered server-side with the CSP nonce.
- Dynamic Open Graph image (`/opengraph-image`), `sitemap.xml`, `robots.txt`, PWA `manifest`,
  SVG favicon.
- Fast: ~102 KB shared JS, font optimisation via `next/font`, no layout shift.

## Security

Defined in [`next.config.ts`](next.config.ts) and [`src/middleware.ts`](src/middleware.ts):

- **Strict Content-Security-Policy** with a **per-request nonce + `strict-dynamic`** (no
  `unsafe-inline` for scripts). Next.js framework scripts and our JSON-LD are nonce-tagged.
- HSTS (2y, preload), `X-Frame-Options: DENY` + `frame-ancestors 'none'`, `nosniff`,
  `Referrer-Policy`, locked-down `Permissions-Policy`, `Cross-Origin-Opener-Policy`.
- `X-Powered-By` removed. Forms use honeypots + client validation (validate again server-side).
- External links use `rel="noopener noreferrer"`.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Requires Node.js 18.18+ (tested on Node 24).

---

## Configuration

All content lives in **one file**: [`src/lib/site.ts`](src/lib/site.ts) — address, phone, email,
socials, deities, aarti timings, sevas, festivals, FAQs. Edit there and the whole site updates.

**Before going live:**

1. Set the canonical domain in `SITE.url` (`src/lib/site.ts`).
2. Verify **festival dates** against the current Vaishnava calendar (`FESTIVALS`).
3. Confirm the geo-coordinates in `CONTACT.geo` for the map.

## Adding real photography

The design uses elegant gradient placeholders (`<AssetFrame>`) wherever a photo belongs — each is
marked with a `data-image-slot` attribute. To use a real photo, drop files in `public/photos/` and
replace the placeholder, e.g.:

```tsx
import Image from "next/image";

<div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
  <Image src="/photos/nitai-gauranga.jpg" alt="Sri Sri Nitai-Gauranga deities" fill
         className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
</div>
```

`next.config.ts` already enables AVIF/WebP optimisation and allow-lists trusted image hosts.

## Wiring up donations

`src/components/DonationForm.tsx` collects and validates the donation, then (in the demo) shows a
confirmation. For production, POST the validated payload to a serverless route that creates an order
with a PCI-DSS gateway (Razorpay / PayU / CCAvenue) and redirect to it. **Never** expose gateway
secret keys client-side; verify the payment signature server-side.

## Structure

```
src/
  app/            routes, layout, sitemap, robots, manifest, OG image, favicon
  components/     Navbar, Footer, decor (SVG art), brand, UI primitives, forms
    sections/     home-page sections (Hero, Deities, Seva, Festivals, …)
  lib/            site.ts (content), seo.ts (metadata + JSON-LD)
  middleware.ts   per-request CSP nonce
```

---

Built with devotion for the service of Sri Sri Nitai-Gauranga. **Hare Krishna.**
