"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { AssetFrame, Button } from "@/components/ui";

export default function CowProtectionPage() {
  return (
    <>
      <PageHeader
        title="Cow Protection"
        eyebrow="Sacred Duty"
        intro="According to ancient Vedic texts, the cow represents Mother Earth, and mistreating cows and bulls leads to the withdrawal of Earth's bounty."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Activities", href: "/activities" },
          { name: "Cow Protection", href: "/activities/cow-protection" },
        ]}
      />

      <section className="py-24 bg-white relative">
        <div className="container-page">
          <Reveal className="max-w-4xl mx-auto mb-20 text-center">
            <p className="text-lg text-text-muted leading-relaxed">
              Srila Prabhupada emphasizes the necessity for human society to recognize the importance of these animals and provide them with protection. The Hare Krishna Movement Jaipur, supported by Jaipur Nagar Nigam, takes care of over 18,000 cows and bulls at the Hingonia Rehabilitation Centre, ensuring their nutrition, health, and other basic needs. Cow’s milk is considered a miraculous food that aids in the growth of finer brain tissues, facilitating the understanding of life's higher purposes. Cow care highlights the cultural and spiritual importance of cows in Vedic traditions and the ongoing efforts to secure their well-being in contemporary society. By supporting cow protection efforts, individuals can acquire blessings from Mother Cows.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-10">
            <Reveal className="group flex flex-col bg-bg-secondary rounded-[2rem] p-4 border border-gray-100 hover:shadow-temple transition-shadow">
              <AssetFrame 
                label="HINGONIA Cattle Rehabilitation Centre" 
                tone="saffron" 
                className="w-full aspect-video rounded-xl mb-6 overflow-hidden" 
              />
              <div className="px-4 pb-6 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-medium text-text-primary mb-3">HINGONIA Cattle Rehabilitation Centre</h3>
                <p className="text-text-muted leading-relaxed mb-6 flex-1">
                  "HINGONIA CATTLE REHABILITATION CENTER" is to develop a cow based self-sufficient economic model which could be the best model for the whole world on importance of the cow-protection.
                </p>
                <Button variant="outline" className="w-full">Read More</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
