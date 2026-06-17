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
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export default async function HomePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd data={faqJsonLd()} nonce={nonce} />
      <HeroCarousel />
      <About />
      <Gallery />
      <Programs />
      <Statistics />
      <Events />
      <Testimonials />
      <Seva />
      <Donate />
    </>
  );
}
