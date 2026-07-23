"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { AssetFrame, Button } from "@/components/ui";

const INITIATIVES = [
  {
    title: "Nitya Annadaan",
    desc: "The Gupt Vrindavan Dham has a long-standing heritage of organizing the Nitya Annadana program, a benevolent initiative to distribute sumptuous meals to visitors and pilgrims.",
    tone: "saffron"
  },
  {
    title: "Khichadi Vitran",
    desc: "The Khichadi Vitran program prospers on the generous contributions of well-wishers and devotees. Consistent and Expanding Outreach The Khichadi Vitran program has been consistently serving hundreds of visitors every day, with the numbers surging to thousands on weekends and festival days.",
    tone: "gold"
  },
  {
    title: "Krishnamrita Kitchen",
    desc: "The Krishnamrita Kitchen runs regularly, catering to the dietary requirements of hundreds of guests and folk devotees. With a staff comprising 3-4 proficient cooks and 7-8 assistants, the kitchen operates with wonderful efficiency.",
    tone: "maroon"
  },
  {
    title: "Akshaya Patra",
    desc: "The Gupt Vrindavan Dham, in collaboration with the Akshaya Patra Foundation, runs an exemplary program dedicated to distributing free mid-day meals to government school children regularly.",
    tone: "night"
  }
];

export default function FoodDistributionPage() {
  return (
    <>
      <PageHeader
        title="Food Distribution"
        eyebrow="Charitable Activities"
        intro="Food distribution is regarded as one of the primary charitable activities, and the Hare Krishna Movement in Jaipur diligently participates in this cause."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Activities", href: "/activities" },
          { name: "Food Distribution", href: "/activities/food-distribution" },
        ]}
      />

      <section className="py-24 bg-white relative">
        <div className="container-page">
          <Reveal className="max-w-4xl mx-auto mb-20 text-center">
            <p className="text-lg text-text-muted leading-relaxed">
              Through various programs like Nitya Annadana, Krishnamrita, and Khichadi Vitran free food is provided to those in need, addressing the essential necessity for food distribution. Hare Krishna Temple in Jaipur have already distributed millions of meals and continues to operate regularly in the city and surrounding areas. The nutritious and wholesome meals from these programs nurture and revitalize the society, helping to uplift society at large. By supporting these efforts with liberal contributions, you can become a part of these sincere initiatives to counter hunger and provide for the needy.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10">
            {INITIATIVES.map((item, i) => (
              <Reveal key={i} delay={i * 100} className="group flex flex-col bg-bg-secondary rounded-[2rem] p-4 border border-gray-100 hover:shadow-luxury transition-shadow">
                <AssetFrame 
                  label={item.title} 
                  tone={item.tone as any} 
                  className="w-full aspect-video rounded-xl mb-6 overflow-hidden" 
                />
                <div className="px-4 pb-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-display font-medium text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-6 flex-1">{item.desc}</p>
                  <Button variant="outline" className="w-full">Read More</Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
