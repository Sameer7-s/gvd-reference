import { headers } from "next/headers";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Programs } from "@/components/sections/Programs";
import { Statistics } from "@/components/sections/Statistics";
import { EventsSection as Events } from "@/components/events/EventsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Seva } from "@/components/sections/Seva";
import { Donate } from "@/components/sections/Donate";
import { SectionBlurTransition } from "@/components/SectionBlurTransition";
import { JsonLd } from "@/components/JsonLd";

import { faqJsonLd } from "@/lib/seo";
import { getSevas } from "@/lib/content";

export default async function HomePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const sevas = await getSevas();

  return (
    <>
      <JsonLd data={faqJsonLd()} nonce={nonce} />
      <HeroCarousel />
      <About />
      <SectionBlurTransition fromColor="#010F1C" toColor="#EBF2F8" height={240} />
      <Gallery />

      <Programs />
      <Statistics />
      <Events />
      <Testimonials />
      <Seva sevas={sevas} />
      <Donate />
    </>
  );
}
