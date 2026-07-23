"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame, Button } from "@/components/ui";
import { BookOpen, Globe, Heart, Users, Utensils, Music, Mic } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPrabhupadaPage() {
  const stats = [
    { label: "Temples Established", value: "108+", icon: <HomeIcon className="w-5 h-5 text-accent-primary" /> },
    { label: "Initiated Disciples", value: "10,000+", icon: <Users className="w-5 h-5 text-accent-primary" /> },
    { label: "Times Globe Visited", value: "14+", icon: <Globe className="w-5 h-5 text-accent-primary" /> },
    { label: "Spiritual Books Written", value: "70+", icon: <BookOpen className="w-5 h-5 text-accent-primary" /> },
    { label: "Recorded Lectures", value: "3500+", icon: <Mic className="w-5 h-5 text-accent-primary" /> },
    { label: "Free Meals Distributed", value: "1M+", icon: <Utensils className="w-5 h-5 text-accent-primary" /> },
  ];

  return (
    <>
      <PageHeader
        title="About Vishwa Guru Srila Prabhupada"
        eyebrow="Founder Acharya"
        intro="The light of spirituality in this Kali yuga, presenting Bhakti to the modern world in a very clear and accessible way."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Srila Prabhupada", href: "/prabhupada" },
          { name: "About Prabhupada", href: "/prabhupada/about" },
        ]}
      />

      <section className="py-24 bg-white relative">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeading eyebrow="Our Vishwa Guru" title="His Divine Grace A.C. Bhaktivedanta Swami Śrīla Prabhupāda" align="left" className="mb-6" />
            <div className="prose prose-lg text-text-muted space-y-6">
              <p>
                His Divine Grace A.C. Bhaktivedanta Swami Śrīla Prabhupāda, honorably known as Vishwa Guru, is the light of spirituality in this Kali yuga. With his limitless devotion and intense love for Lord Krishna, he revived the teachings of Bhagavad Gita for the self-realization of the soul. He presented Bhakti to the modern world in a very clear and accessible way.
              </p>
              <p>
                He had a deep knowledge of spiritual scriptures such as Bhagavad Gita, the Srimad Bhagavatam, and many others. This is why he provided the commentaries and presented the Bhagavad Gita As It Is in English and many other ancient scriptures. Under his guidance, his followers provided the translation of the Bhagavad Gita in other languages.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <AssetFrame label="Srila Prabhupada" tone="saffron" className="aspect-[4/5] w-full max-w-md mx-auto" />
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 100} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent-light/10 flex items-center justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-display font-bold text-text-primary">{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teachings & Messenger */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <Reveal className="order-2 lg:order-1">
              <AssetFrame label="His Divine Teachings" tone="maroon" className="aspect-square rounded-[2rem] w-full" />
            </Reveal>
            <Reveal delay={200} className="order-1 lg:order-2">
              <SectionHeading eyebrow="Prabhupada" title="His Divine Teachings" align="left" className="mb-6" />
              <p className="text-text-muted leading-relaxed mb-6">
                Srila Prabhupada dedicated his entire life in the service of his guru by spreading Krishna Consciousness around the world. He has provided the Bhagavad Gita As It Is in the English language. Under his guidance, his followers have published the Bhagavad Gita in As It Is in 60+ other languages.. Also, he has provided the translation and commentary for Chaitanya Charitamrta, Srimad Bhagavatam in canto 1 to 12(including 18,000 verses), and wrote other books like The Science of Self-Realization, Teachings of Lord Caitanya, The Nectar of Devotion, etc.
              </p>
              <blockquote className="border-l-4 border-accent-primary pl-6 py-2 italic text-lg text-text-primary bg-bg-secondary/50 rounded-r-2xl mb-6">
                “If only 1% become devotees, that will change the world.”
                <span className="block text-sm font-semibold not-italic mt-2 text-text-muted">~ Letter to Karandhara -- Tokyo 2 May, 1972</span>
              </blockquote>
              <Button variant="outline" href="/prabhupada/books">Read More</Button>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <SectionHeading eyebrow="Prabhupada" title="Global Messenger of Krishna Consciousness" align="left" className="mb-6" />
              <p className="text-text-muted leading-relaxed mb-4">
                Srila Prabhupada’s role in developing the worldwide community of Krishna Consciousness, ISKCON, is extraordinary. He has expanded the group of followers into communities, regardless of their religion or gender. He has started the Bhaktivedanta Book Trust(BBT), which has now become the largest publisher and distributor of books on Krishna Consciousness.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                He initiated the celebration of festivals like Rath Yatra in Western countries, which was only celebrated in India. Nowadays, it is celebrated in every corner of the world by every community. Through such grand festivals and the enchanted kirtan of Hare Krishna Mahamantra, the Krishna Consciousness has reached many lives.
              </p>
              <Button variant="outline" href="/about">Read More</Button>
            </Reveal>
            <Reveal delay={200}>
              <AssetFrame label="Global Messenger" tone="night" className="aspect-square rounded-[2rem] w-full" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-24 bg-bg-primary">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Be a Part of this Legacy" align="center" className="mb-16" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={100} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-xl font-display font-medium mb-4 text-text-primary">Understand His Purpose</h3>
              <p className="text-text-muted leading-relaxed flex-1 mb-6">
                Take a moment and look upon his entire journey to America. He didn’t travel to a completely different world, at the age of 69, to get fame and recognition. He did it to honor the instruction of his spiritual master and to spread the holy names of Lord Krishna.
              </p>
              <Link href="/prabhupada/timeline" className="text-accent-primary font-semibold text-sm uppercase tracking-wider hover:text-accent-secondary">Read More →</Link>
            </Reveal>
            <Reveal delay={200} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-xl font-display font-medium mb-4 text-text-primary">Participate and Grow</h3>
              <p className="text-text-muted leading-relaxed flex-1 mb-6">
                Get involved in the practices of chanting the holy names of Lord Krishna, reading scriptural books, and regular visits to a Hare Krishna Temple. You can start with one round of chanting and one page of the Bhagavad Gita daily.
              </p>
              <Link href="/activities" className="text-accent-primary font-semibold text-sm uppercase tracking-wider hover:text-accent-secondary">Read More →</Link>
            </Reveal>
            <Reveal delay={300} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-xl font-display font-medium mb-4 text-text-primary">Share This Gift</h3>
              <p className="text-text-muted leading-relaxed flex-1 mb-6">
                Spread this mission of Srila Prabhupada with others by inviting others to Kirtan, prasadam distribution, accompanying someone to the Temple on weekends, telling others about Bhagavad Gita, and inspiring them to start reading it.
              </p>
              <Link href="/get-involved" className="text-accent-primary font-semibold text-sm uppercase tracking-wider hover:text-accent-secondary">Read More →</Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function HomeIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
