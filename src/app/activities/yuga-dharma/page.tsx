"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { AssetFrame, Button } from "@/components/ui";

const DHARMA_SECTIONS = [
  {
    title: "Hari Naam Sankirtan",
    desc: "In this age the spiritual revolution was recommended by Lord Caitanya Mahaprabhu. He demonstrated that the Yuga Dharma for this age is the Sankirtan chanting of the holy names.",
    tone: "saffron"
  },
  {
    title: "Hare Krishna Maha Mantra",
    desc: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare",
    tone: "gold"
  },
  {
    title: "Srila Prabhupada Ashraya",
    desc: "The Gupt Vrindavan Dham organizes the Ashraya Program to gradually advance devotees in their devotional practices, spanning from preliminary to advanced levels.",
    tone: "maroon"
  },
  {
    title: "Krishna Consciousness",
    desc: "Krishna consciousness is a direct process of linking ourselves with the Supreme Lord by engaging in His loving devotional service",
    tone: "krishna"
  },
  {
    title: "Getting Closer to God",
    desc: "Krishna is the Supreme Personality of Godhead. How is that? Because He conforms in exact detail to descriptions of the Supreme Being, the Godhead.",
    tone: "night"
  },
  {
    title: "Bhagavad gita",
    desc: "Bhagavad-gita is also known as Gītopaniṣad. It is the widely read theistic science summarized in the Gītā-māhātmya (Glorification of the Gita).",
    tone: "saffron"
  },
  {
    title: "Chaitanya Mahaprabhu",
    desc: "Sri Chaitanya Mahaprabhu is none other than Supreme Lord Sri Krishna, who appeared in this Kali-yuga to inaugurate the yuga dharma for this age – Sankirtana.",
    tone: "gold"
  }
];

export default function YugaDharmaPage() {
  return (
    <>
      <PageHeader
        title="Yuga Dharma"
        eyebrow="The Current Age"
        intro="Sri Caitanya Mahaprabhu has defined chanting the Hare Krishna Mahamantra as the Yuga Dharma of present time."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Activities", href: "/activities" },
          { name: "Yuga Dharma", href: "/activities/yuga-dharma" },
        ]}
      />

      <section className="py-24 bg-white relative">
        <div className="container-page">
          <Reveal className="max-w-4xl mx-auto mb-20 text-center">
            <p className="text-xl font-medium text-text-primary mb-8 italic">
              "Hare Krishna Hare Krishna Krishna Krishna Hare Hare<br/>
              Hare Rama Hare Rama Rama Rama Hare Hare"
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              The Hare Krishna Movement Jaipur is dedicated to spreading the Mahamantra following the instructions of HDG Srila Prabhupada, the Founder-Acharya of ISKCON. Through regular activities such as Harinaam Sankirtan and Harinaam Diksha, we focus on sharing the message of Godhead with everyone. Join these programs to experience the bliss and relief that the Yuga Dharma can deliver to your life and to society as a whole.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DHARMA_SECTIONS.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 100} className="group flex flex-col bg-bg-secondary rounded-[2rem] p-4 border border-gray-100 hover:shadow-temple transition-shadow">
                <AssetFrame 
                  label={item.title} 
                  tone={item.tone as any} 
                  className="w-full aspect-[4/3] rounded-xl mb-6 overflow-hidden" 
                />
                <div className="px-4 pb-6 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-medium text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                  <Button variant="outline" className="w-full text-sm py-2">Read More</Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
