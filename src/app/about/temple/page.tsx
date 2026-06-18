import Image from "next/image";
import Link from "next/link";
import { BookOpen, Utensils, Heart, CalendarDays, Users, Star } from "lucide-react";
import { Button } from "@/components/ui";

export const metadata = {
  title: "About Temple - Gupt Vrindavan Dham",
  description: "Learn about the story, roots, and vision of Hare Krishna Mandir, Jaipur.",
};

export default function AboutTemplePage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-iskcon-4k.png"
            alt="Temple Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0e0a1f]/90" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
            Gupt Vrindavan Dham
          </h1>
          <p className="font-sans text-sm md:text-base text-gray-300 font-medium tracking-widest uppercase">
            Home / Mandir / About
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              The Story of Hare Krishna Mandir
            </h2>
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-gray-700">
              A mission to revive devotion and spiritual values in society
            </h3>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Gupt Vrindavan Dham is a spiritual and cultural centre, focused on spreading the
                true meaning of bhakti, culture, and devotion through the teachings of Lord
                Krishna.
              </p>
              <p>
                Inspired by the vision of His Divine Grace A.C. Bhaktivedanta Swami Srila
                Prabhupada, the foundation of the Hare Krishna Mandir, Jaipur, was laid in 2009
                to spread his vision of uplifting society through the path of Krishna
                consciousness.
              </p>
              <p>
                This Hare Krishna Temple is a whole cultural complex itself, offering vibrant
                community gatherings and different activities to indulge in with a sense of
                compassion and devotion in the modern era.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/temple_architecture_4k.png"
              alt="Hare Krishna Mandir"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Spiritual Roots Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-white rounded-[3rem] shadow-sm mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src="/images/kirtan_gathering_4k.png"
              alt="Sankirtan"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              Our Spiritual Roots
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                The Hare Krishna Movement was an initiative led by His Divine Grace
                A.C. Bhaktivedanta Swami Srila Prabhupada with deep reference to
                Vedic scriptures like the Bhagavad-gita and Srimad Bhagavatam.
                By following the core philosophies of these sacred texts preserved
                through the Gaudiya Vaishnav disciplic lineage.
              </p>
              <p>
                Our guiding practice offers devotees a practical path to attain spiritual
                growth and devotion in today&apos;s modern lifestyle.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="font-sans text-xl font-semibold text-text-primary mb-4">
                Daily Spiritual Practices We Follow:
              </h4>
              <ul className="space-y-3">
                {[
                  "Chanting Hare Krishna Maha-Mantra",
                  "Studying the Vedic Scriptures",
                  "Honoring sanctified prasadam",
                ].map((practice, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-50 px-6 py-4 rounded-xl text-gray-700 font-medium shadow-sm border border-gray-100"
                  >
                    {practice}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#f3eefe] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Our <span className="text-[#6d28d9]">Activities</span> and <span className="text-[#6d28d9]">Initiatives</span>
          </h2>
          <p className="text-text-muted mb-16 text-lg max-w-2xl mx-auto">
            Creating an impact through devotion and service at the Hare Krishna temple.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Gita Classes",
                desc: "Regular Sessions on Bhagavad-gita and spiritual living",
              },
              {
                icon: Utensils,
                title: "Annadaan Seva",
                desc: "Distributing prasadam and helping those in need",
              },
              {
                icon: Heart,
                title: "Cow Care",
                desc: "Dedicated Cow Seva and Compassionate care",
              },
              {
                icon: CalendarDays,
                title: "Festivals",
                desc: "Celebrating devotion through festivals and kirtan",
              },
              {
                icon: Users,
                title: "Youth Programs",
                desc: "Guiding youth through values and spiritual growth",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#f3eefe] flex flex-col items-center text-center"
              >
                <div className="h-16 w-16 bg-[#faf5ff] text-[#6d28d9] rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Why Jaipur Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Vision Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          <div className="space-y-8">
            <h2 className="font-display text-4xl font-bold leading-tight">
              The Grand <span className="text-[#6d28d9]">Vision Behind Hare Krishna</span> Mandir Jaipur
            </h2>
            <div className="space-y-4 text-text-muted">
              <p>
                Hare Krishna Mandir, Jaipur, was founded with the vision of developing a hub
                of devotion and cultural expression, blending traditional Rajasthani design
                with modern architecture.
              </p>
              <p>
                Located in Jagatpura, the temple stands as a perfect symbol of devotion,
                heritage, and spirituality for future generations.
              </p>
            </div>
            
            <div className="pt-4">
              <h3 className="font-sans text-xl font-bold text-[#6d28d9] mb-4">
                Mission of Devotion and Service
              </h3>
              <p className="text-text-muted">
                As a leading Hare Krishna Temple, we aspire to spread the core values of
                Krishna Consciousness by guiding individuals towards a life full of peace,
                purpose, and spiritual enlightenment.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Key Highlights */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
              <h3 className="font-bold text-xl mb-6 text-gray-900">Key Highlights</h3>
              <ul className="space-y-3">
                {[
                  "A space for learning, service, and spiritual experience",
                  "Envisioned in 2009, now taking grand shape",
                  "Inspired by the iconic Sri Sri Krishna Balaram Temple, Vrindavan",
                  "Guided by the vision of Shri Madhu Pandit Dasa",
                  "Set to be completed by 2027",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 bg-[#faf5ff] p-3 rounded-lg text-sm">
                    <Star className="text-[#6d28d9] mt-0.5 shrink-0" size={16} fill="currentColor" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guiding Principles */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
              <h3 className="font-bold text-xl mb-6 text-gray-900">Guiding Principles</h3>
              <ul className="space-y-3">
                {[
                  "Spreading Krishna consciousness in everyday life",
                  "Inspiring a life of purpose and inner growth",
                  "Compassion-driven service for society",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 bg-white border border-gray-100 p-3 rounded-lg text-sm shadow-sm">
                    <Star className="text-[#6d28d9] mt-0.5 shrink-0" size={16} fill="currentColor" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Jaipur Banner */}
        <div className="relative bg-[#ebe4f8] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Jaipur is Known as <span className="text-[#6d28d9]">"Gupt Vrindavan"</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              The term Gupt Vrindavan, meaning "Hidden Vrindavan," reflects
              Jaipur's deep spiritual heritage. During the Mughal era, revered
              deities from Vrindavan were relocated here for protection,
              transforming the city into a sacred sanctuary of devotion.
            </p>
          </div>
          <div className="relative z-0 mt-8 md:mt-0 w-full md:w-1/2 h-64 md:h-80 opacity-80 mix-blend-multiply">
             <Image src="/images/temple_architecture_4k.png" alt="Jaipur Architecture" fill className="object-contain object-right" />
          </div>
        </div>
      </section>

      {/* Journey & Invitation */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="font-display text-4xl font-bold">
              Srila Prabhupada's <span className="text-[#6d28d9]">Vision</span> for <span className="text-[#6d28d9]">Jaipur</span>
            </h2>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800 text-lg">Visit of Srila Prabhupada</h4>
              <p className="text-text-muted leading-relaxed">
                In 1972, Srila Prabhupada visited the Pink City with his disciples. On this visit, he
                came up with a vision of building a replica of the Sri Sri Krishna Balaram Temple,
                Vrindavan, in Jaipur. His desire led to the foundation of Rajasthan's Biggest Hindu
                Temple, Gupt Vrindavan Dham.
              </p>
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg mt-8">
              <Image src="/images/spiritual_wisdom_4k.png" alt="Srila Prabhupada" fill className="object-cover object-top" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-semibold shadow">
                Srila Prabhupada's Letter to Sri Mahavir Prasad Jaipuria - 1975
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:pl-12">
            <h3 className="font-display text-2xl font-bold text-[#6d28d9]">The Journey So Far:</h3>
            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[19px] before:w-0.5 before:bg-gray-100">
              {[
                { year: "1972", desc: "The vision began with Srila Prabhupada's visit" },
                { year: "1975", desc: "Letter written to Mahavir Prasad Jaipuria for temple construction" },
                { year: "2009", desc: "Foundation laid for Hare Krishna Mandir, Jaipur" },
                { year: "2012", desc: "Deities of Sri Sri Krishna Balaram installed" },
                { year: "2027", desc: "Completion of the Hare Krishna Mandir, Jaipur" },
              ].map((item, idx) => (
                <div key={idx} className="relative flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#6d28d9] text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white relative z-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl flex-1 border border-gray-100 mt-1 shadow-sm">
                    <span className="inline-block bg-[#6d28d9] text-white px-2 py-0.5 rounded text-xs font-bold mb-2">{item.year}</span>
                    <p className="text-gray-700 text-sm md:text-base font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA / Invitation */}
        <div className="bg-[#f3eefe] rounded-3xl p-10 md:p-16 text-center shadow-sm">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            An Invitation to Begin Your Journey
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mb-10">
            Indulge in a spiritual experience and become part of something historical at Hare Krishna Temple, Jaipur. By learning and implementing the teachings of the Bhagavad-Gita, let's come together to illuminate the path of humanity.
          </p>
          
          <div className="w-16 h-0.5 bg-[#6d28d9] mx-auto mb-10" />

          <div className="font-display italic text-[#6d28d9] text-xl md:text-2xl font-medium tracking-wide space-y-2">
            <p>"Hare Krishna Hare Krishna Krishna Krishna Hare Hare"</p>
            <p>"Hare Rama Hare Rama Rama Rama Hare Hare"</p>
          </div>
        </div>
      </section>

    </main>
  );
}
