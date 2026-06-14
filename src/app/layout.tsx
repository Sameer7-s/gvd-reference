import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Marcellus, Inter, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd, templeJsonLd } from "@/lib/seo";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const deva = Noto_Serif_Devanagari({
  weight: ["400", "600"],
  subsets: ["devanagari"],
  variable: "--font-noto-deva",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.center}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.legalName,
  category: "Religion & Spirituality",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    title: `${SITE.name} | ${SITE.center}`,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image", site: "@hkm_vizag" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcf7ec" },
    { media: "(prefers-color-scheme: dark)", color: "#2e0614" },
  ],
  colorScheme: "light",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // The nonce minted in middleware lets our JSON-LD pass the strict CSP.
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const jsonLd = [organizationJsonLd(), websiteJsonLd(), templeJsonLd()];

  return (
    <html lang="en-IN" className={`${marcellus.variable} ${inter.variable} ${deva.variable}`}>
      <body className="min-h-screen antialiased">
        <JsonLd data={jsonLd} nonce={nonce} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-maroon-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
