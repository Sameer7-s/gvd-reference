import type { Metadata } from "next";
import { SITE, CONTACT, SOCIALS, FAQS, FESTIVALS, SCHEDULE } from "./site";

/**
 * Build a fully-formed Metadata object for a page.
 * Centralises titles, canonicals, Open Graph and Twitter cards.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const desc = description ?? SITE.description;
  const url = new URL(path, SITE.url).toString();

  return {
    title,
    description: desc,
    keywords: [
      "Hare Krishna Movement Visakhapatnam",
      "HKM Vizag",
      "ISKCON Vizag",
      "Krishna temple Visakhapatnam",
      "Vaikuntham Cultural Centre",
      "darshan timings Vizag",
      "Anna Daan seva",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      title,
      description: desc,
      locale: SITE.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}

const fullAddress = {
  "@type": "PostalAddress",
  streetAddress: `${CONTACT.addressLine}, ${CONTACT.street}`,
  addressLocality: CONTACT.locality,
  addressRegion: CONTACT.region,
  postalCode: CONTACT.postalCode,
  addressCountry: CONTACT.countryCode,
};

/** Schema.org HinduTemple — the richest possible place-of-worship markup. */
export function templeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HinduTemple", "PlaceOfWorship", "TouristAttraction"],
    "@id": `${SITE.url}/#temple`,
    name: SITE.name,
    alternateName: [SITE.shortName, SITE.center],
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phonePrimary,
    email: CONTACT.email,
    foundingDate: String(SITE.foundedYear),
    address: fullAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.geo.lat,
      longitude: CONTACT.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${CONTACT.mapsQuery}`,
    sameAs: SOCIALS.map((s) => s.href),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "04:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "16:30",
        closes: "20:30",
      },
    ],
    event: FESTIVALS.map((f) => ({
      "@type": "Event",
      name: f.name,
      startDate: f.date,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: { "@type": "Place", name: SITE.center, address: fullAddress },
      description: f.blurb,
    })),
  };
}

/** Organization / NGO markup for brand and knowledge-panel signals. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.shortName,
    url: SITE.url,
    email: CONTACT.email,
    telephone: CONTACT.phonePrimary,
    foundingDate: String(SITE.foundedYear),
    founder: { "@type": "Person", name: SITE.founderAcharya },
    address: fullAddress,
    sameAs: SOCIALS.map((s) => s.href),
    slogan: SITE.tagline,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).toString(),
    })),
  };
}

// Re-export so server components can render the schedule into structured data if needed.
export { SCHEDULE };
