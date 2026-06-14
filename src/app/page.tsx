import { headers } from "next/headers";
import { Hero } from "@/components/sections/Hero";
import { Welcome } from "@/components/sections/Welcome";
import { Deities } from "@/components/sections/Deities";
import { Explore } from "@/components/sections/Explore";
import { Timings } from "@/components/sections/Timings";
import { Seva } from "@/components/sections/Seva";
import { Impact } from "@/components/sections/Impact";
import { Festivals } from "@/components/sections/Festivals";
import { Prabhupada } from "@/components/sections/Prabhupada";
import { Faq } from "@/components/sections/Faq";
import { VisitCta } from "@/components/sections/VisitCta";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export default async function HomePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd data={faqJsonLd()} nonce={nonce} />
      <Hero />
      <Welcome />
      <Deities />
      <Explore />
      <Timings />
      <Seva />
      <Impact />
      <Festivals />
      <Prabhupada />
      <Faq />
      <VisitCta />
    </>
  );
}
