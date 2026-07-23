"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame, Button } from "@/components/ui";

const COURSES = [
  {
    title: "Activities for Kids",
    desc: "Education empowers children to mature into successful adults, shaping the future of society.",
    tone: "saffron"
  },
  {
    title: "Activities for Youth",
    desc: "The Gupt Vrindavan Dham offers a range of programs directed at educating and inspiring youth through spiritual practices rooted in the timeless wisdom of scriptures such as the Bhagavad-gita and Srimad Bhagavatam.",
    tone: "night"
  },
  {
    title: "Activities for family",
    desc: "A healthy and happy family life necessitates that family members know and observe scriptural injunctions.",
    tone: "maroon"
  },
  {
    title: "Quizzes",
    desc: "Evaluate your spiritual intelligence with our online spiritual intelligence test.",
    tone: "krishna"
  }
];

export default function EducationPage() {
  return (
    <>
      <PageHeader
        title="Education"
        eyebrow="Activities"
        intro="Education is essential for building character, and the spiritual teachings found in vedic scriptures are vital for leading a healthy and progressive lifestyle."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Activities", href: "/activities" },
          { name: "Education", href: "/activities/education" },
        ]}
      />

      <section className="py-24 bg-white relative">
        <div className="container-page">
          <Reveal className="max-w-4xl mx-auto mb-20 text-center">
            <p className="text-lg text-text-muted leading-relaxed">
              The Hare Krishna Movement Jaipur consistently offers spiritual educational seminars and courses to educate all segments of society, including children, youth, and families. These courses, derived from the timeless wisdom of authoritative scriptures such as the Bhagavad Gita and Srimad Bhagavatam, are tailored to suit discrete audiences. The principal goal is to enlighten everyone about the purpose of life, which is self-realization. Join our diverse courses to explore more about yourself and live a joyful and purposeful life.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10">
            {COURSES.map((course, i) => (
              <Reveal key={i} delay={i * 100} className="group flex flex-col bg-bg-secondary rounded-[2rem] p-4 border border-gray-100 hover:shadow-luxury transition-shadow">
                <AssetFrame 
                  label={course.title} 
                  tone={course.tone as any} 
                  className="w-full aspect-video rounded-xl mb-6 overflow-hidden" 
                />
                <div className="px-4 pb-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-display font-medium text-text-primary mb-3">{course.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-6 flex-1">{course.desc}</p>
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
