import { headers } from "next/headers";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Statistics } from "@/components/sections/Statistics";
import { Gallery } from "@/components/sections/Gallery";
import { Events } from "@/components/sections/Events";
import { Testimonials } from "@/components/sections/Testimonials";
import { Seva } from "@/components/sections/Seva";
import { Donate } from "@/components/sections/Donate";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export default async function HomePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd data={faqJsonLd()} nonce={nonce} />
      <HeroCarousel />
      <About />
      <Programs />
      <Statistics />
      <Gallery />
      <Events />
      <Testimonials />
      <Seva />
      <Donate />
      <FinalCta />
    </>
  );
}
