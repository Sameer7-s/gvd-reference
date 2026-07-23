"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { AssetFrame, Button } from "@/components/ui";

const EVENTS = [
  { title: "FOLK Sessions", desc: "Discover the timeless wisdom of the Bhagavad Gita, in FOLK Sessions guiding youth toward a life of purpose.", action: "Register Now", tone: "saffron" },
  { title: "Gita Contest", desc: "GITA CONTEST is an MCQ quiz contest based on Bhagavad Gita. It gives a creative interface to access unparalleled wisdom.", action: "Register Now", tone: "gold" },
  { title: "Yoga for Happiness", desc: "Discover the timeless wisdom of the Bhagavad Gita, guiding youth toward a life of purpose, strength, and clarity.", action: "Register Now", tone: "krishna" },
  { title: "Vedic Gyan", desc: "Deep Dive into the Vedic Gyan", action: "Register Now", tone: "maroon" },
  { title: "Sharanagati", desc: "Let us accept the shelter of the lotus feet of a Pure Devotee.", action: "Register Now", tone: "night" },
  { title: "Indian Culture and Values for Kids", desc: "Let us accept the shelter of the lotus feet of a Pure Devotee.", action: "Register Now", tone: "saffron" },
  { title: "Srila Prabhupada Ashraya", desc: "Taking the Shelter of a Pure Devotee of the Lord!", action: "Enroll Now", tone: "gold" },
  { title: "Cultural Camp", desc: "Cultural Camp 2026 at Gupt Vrindavan Dham offers children a joyful blend of art, music, yoga, stories, and devotional fun.", action: "Register Now", tone: "krishna" },
  { title: "झूलन सेवा", desc: "इस जन्माष्टमी पर श्रीकृष्ण की विशेष व्यक्तिगत झूलन सेवा करें एवं माखन मिश्री परसाद प्राप्त करें।", action: "Register Now", tone: "maroon" },
  { title: "Teacher's Fest", desc: "Celebrate the spirit of teaching and honor our respected educators on Teachers’ Day – 5th September 2025.", action: "Register", tone: "night" },
  { title: "International Gita Olympiad", desc: "The 'Bhagavad-Gita for Youth' is all about sharing this timeless wisdom in a way that's relatable and inspiring.", action: "Register Now", tone: "saffron" },
  { title: "Shubharambh 2025", desc: "Step into the celebration with joy and Spiritual Fervor at 'Shubharambh 2025,' our inspiring program!", action: "Register Now", tone: "gold" },
  { title: "Spiritual Bonfire Event", desc: "Fire of Devotion—A Bonfire Evening", action: "Register Now", tone: "krishna" },
  { title: "Colours of Devotion", desc: "Colours of Devotion : Where Colours Meet Devotion", action: "Register Now", tone: "maroon" },
  { title: "Bhajan Concert", desc: "Join us for a spiritually uplifting bhajan evening where timeless devotional music meets a serene and graceful atmosphere.", action: "Register Now", tone: "night" },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        eyebrow="Spiritual Programs"
        intro="The Gupt Vrindavan Dham organises a variety of events throughout the year, aiming to saturate participants in spiritual culture."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Activities", href: "/activities" },
          { name: "Events", href: "/activities/events" },
        ]}
      />

      <section className="py-24 bg-white relative">
        <div className="container-page">
          <Reveal className="max-w-4xl mx-auto mb-20 text-center">
            <p className="text-lg text-text-muted leading-relaxed">
              These events encompass educational, cultural, and devotional activities concentrated around Lord Krishna, ensuring that everyone can join in and experience matching joy.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 100} className="group flex flex-col bg-bg-secondary rounded-[2rem] p-4 border border-gray-100 hover:shadow-temple transition-shadow">
                <AssetFrame 
                  label={item.title} 
                  tone={item.tone as any} 
                  className="w-full aspect-video rounded-xl mb-6 overflow-hidden" 
                />
                <div className="px-4 pb-6 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-medium text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                  <Button variant="outline" className="w-full text-sm py-2">{item.action}</Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
