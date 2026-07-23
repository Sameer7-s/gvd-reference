"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { AssetFrame, Button } from "@/components/ui";

const SERVICES = [
  {
    title: "Learn Kirtan",
    desc: "Learn to play the Kartal and Mridanga from an experienced devotee and take delight in Kirtan, or singing the glory of the Lord.",
    action: "Register Now",
    tone: "saffron"
  },
  {
    title: "Prasadam Booking",
    desc: "Booking your Prasad meal is simple and convenient. Just choose your preferred date, mealtime and the number of coupons needed for your group.",
    action: "Book Now",
    tone: "gold"
  },
  {
    title: "Kirtan Booking",
    desc: "Hare Krishna Kirtan is a devotional singing and chanting practice that involves the repetition of the Hare Krishna mantra.",
    action: "Book Now",
    tone: "maroon"
  },
  {
    title: "Special Occasion Puja Seva",
    desc: "Sponsor a puja in the temple on your Birthday or Marriage Anniversary as a Square Feet Donor, and receive Krishna's blessings on your special day.",
    action: "Offer Puja",
    tone: "night"
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        eyebrow="Spiritual Guidance"
        intro="Gupt Vrindavan Dham offers you spiritual guidance, prasadam booking, and kirtan instrument classes like mridanga and kartal."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Activities", href: "/activities" },
          { name: "Services", href: "/activities/services" },
        ]}
      />

      <section className="py-24 bg-white relative">
        <div className="container-page">
          <Reveal className="max-w-4xl mx-auto mb-20 text-center">
            <p className="text-lg text-text-muted leading-relaxed">
              Join us for worship, meditation, and educational programs; participate in festive celebrations and enhance your spiritual journey.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10">
            {SERVICES.map((item, i) => (
              <Reveal key={i} delay={i * 100} className="group flex flex-col bg-bg-secondary rounded-[2rem] p-4 border border-gray-100 hover:shadow-luxury transition-shadow">
                <AssetFrame 
                  label={item.title} 
                  tone={item.tone as any} 
                  className="w-full aspect-video rounded-xl mb-6 overflow-hidden" 
                />
                <div className="px-4 pb-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-display font-medium text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-6 flex-1">{item.desc}</p>
                  <Button variant="outline" className="w-full">{item.action}</Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
