import { headers } from "next/headers";
import { Shirt, Camera, Car, Accessibility, Footprints, HeartHandshake } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { Timings } from "@/components/sections/Timings";
import { VisitCta } from "@/components/sections/VisitCta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Plan Your Visit · Darshan Timings & Directions",
  description:
    "Plan your visit to Hare Krishna Movement, Visakhapatnam. Darshan timings, aarti schedule, directions to the Vaikuntham Cultural Centre at Gambhiram, and temple guidelines.",
  path: "/visit",
  keywords: ["HKM Vizag timings", "darshan timings Visakhapatnam", "Krishna temple directions Vizag", "Gambhiram temple"],
});

const guidelines = [
  { icon: Shirt, title: "Modest attire", text: "Please dress respectfully. Traditional Indian wear is welcome but not required." },
  { icon: Footprints, title: "Footwear", text: "Kindly remove footwear before entering the temple hall; a counter is provided." },
  { icon: Camera, title: "Photography", text: "Photography of the deities may be restricted during certain aartis. Please ask." },
  { icon: Car, title: "Parking", text: "Complimentary parking is available within the centre premises." },
  { icon: Accessibility, title: "Accessibility", text: "Wheelchair-friendly ramps and assistance are available on request." },
  { icon: HeartHandshake, title: "Prasadam", text: "Do honour the sanctified prasadam served daily at the Subhojanam hall." },
];

export default async function VisitPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Visit", path: "/visit" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Plan Your Visit"
        title="Your peaceful visit to the dham"
        intro="Everything you need for a serene and joyful darshan — timings, directions and a few gentle guidelines."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Visit", href: "/visit" },
        ]}
      />

      <Timings />

      <section className="bg-bg-primary py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Before You Come"
              title="Temple guidelines"
              intro="A few simple courtesies help everyone experience the sanctity and serenity of the temple."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guidelines.map((g, i) => (
              <Reveal key={g.title} delay={i * 70}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-accent-primary/20 bg-bg-white/70 p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-white">
                    <g.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-text-primary">{g.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{g.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VisitCta />
    </>
  );
}
