import { headers } from "next/headers";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame } from "@/components/ui";
import { LotusDivider } from "@/components/decor";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { 
  BookOpen, 
  UtensilsCrossed, 
  Heart, 
  Music, 
  GraduationCap, 
  CheckCircle2, 
  Leaf, 
  Sun,
  MapPin
} from "lucide-react";

export const metadata = buildMetadata({
  title: "About Temple · Gupt Vrindavan Dham",
  description: "The Story of Hare Krishna Mandir: A mission to revive devotion and spiritual values in society.",
  path: "/about/temple",
});

const activities = [
  { icon: BookOpen, title: "Gita Classes", text: "Regular Sessions on Bhagavad-gita and spiritual living" },
  { icon: UtensilsCrossed, title: "Annadaan Seva", text: "Distributing prasadam and helping those in need" },
  { icon: Heart, title: "Cow Care", text: "Dedicated Gau Seva and Compassionate care" },
  { icon: Music, title: "Festivals", text: "Celebrating devotion through festivals and kirtan" },
  { icon: GraduationCap, title: "Youth Programs", text: "Guiding youth through values and spiritual growth" },
];

const timeline = [
  { year: "1972", title: "Srila Prabhupada's Visit", text: "The vision began with Srila Prabhupada’s visit to the Pink City." },
  { year: "1975", title: "A Vision Penned", text: "Letter written to Mahavir Prasad Jaipuria for temple construction." },
  { year: "2009", title: "Foundation Laid", text: "Foundation laid for Hare Krishna Mandir, Jaipur." },
  { year: "2012", title: "Deities Installed", text: "Deities of Sri Sri Krishna Balaram Installed." },
  { year: "2027", title: "Grand Completion", text: "Expected completion of the Hare Krishna Mandir, Jaipur." },
];

const highlights = [
  "A space for learning, service, and spiritual experience",
  "Envisioned in 2009, now taking grand shape",
  "Inspired by the iconic Sri Sri Krishna Balaram Temple, Vrindavan",
  "Guided by the vision of Shri Madhu Pandit Dasa",
  "Set to be completed by 2027",
];

const principles = [
  "Spreading Krishna consciousness in everyday life",
  "Inspiring a life of purpose and inner growth",
  "Compassion-driven service for society",
];

const practices = [
  "Chanting Hare Krishna Maha-Mantra",
  "Studying the Vedic Scriptures",
  "Honoring sanctified prasadam",
];

export default async function AboutTemplePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Mandir", path: "#" },
          { name: "About", path: "/about/temple" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Gupt Vrindavan Dham"
        title="The Story of Hare Krishna Mandir"
        intro="A mission to revive devotion and spiritual values in society"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Mandir", href: "#" },
          { name: "About", href: "/about/temple" },
        ]}
      />

      {/* Intro Section */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page max-w-4xl text-center space-y-8">
          <Reveal>
            <p className="text-xl leading-relaxed text-[var(--color-text-primary)] font-medium">
              Gupt Vrindavan Dham is a spiritual and cultural centre, focused on spreading the true meaning of bhakti, culture, and devotion through the teachings of Lord Krishna.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
              Inspired by the vision of His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada, the foundation of the Hare Krishna Mandir, Jaipur, was laid in 2009 to spread his vision of uplifting society through the path of Krishna consciousness.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
              This Hare Krishna Temple is a whole cultural complex itself, offering vibrant community gatherings and different activities to indulge in with a sense of compassion and devotion in the modern era.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Spiritual Roots */}
      <section className="bg-[var(--color-bg-secondary)] py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Our Foundation" title="Our Spiritual Roots" />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 space-y-6 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  The Hare Krishna Movement was an initiative led by His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada with deep reference to Vedic scriptures like the Bhagavad-gita and Srimad Bhagavatam.
                </p>
                <p>
                  By following the core philosophies of these sacred texts preserved through the Gaudiya Vaishnav disciplic lineage.
                </p>
                <p>
                  Our guiding practice offers devotees a practical path to attain spiritual growth and devotion in today’s modern lifestyle.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="mt-10">
                <h3 className="font-display text-xl text-[var(--color-text-primary)] mb-6">Daily Spiritual Practices We Follow:</h3>
                <ul className="space-y-4">
                  {practices.map((practice, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span className="flex-shrink-0 grid h-8 w-8 place-items-center rounded-full bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                        <Leaf className="h-4 w-4" />
                      </span>
                      <span className="text-[var(--color-text-primary)] font-medium">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal className="relative mx-auto w-full max-w-md">
            <AssetFrame label="Spiritual Roots" tone="gold" className="aspect-[4/5] shadow-luxury" />
          </Reveal>
        </div>
      </section>

      {/* Activities and Initiatives */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="text-center">
            <SectionHeading
              className="mx-auto"
              eyebrow="What We Do"
              title="Our Activities and Initiatives"
              intro="Creating an impact through devotion and service at the Hare Krishna temple."
            />
          </Reveal>
          <LotusDivider className="mt-8 mx-auto" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group flex h-full flex-col gap-4 rounded-3xl border border-[var(--color-accent-primary)]/20 bg-white/70 p-8 transition-all duration-300 hover:border-[var(--color-accent-primary)]/50 hover:bg-[var(--color-bg-tertiary)] hover:shadow-luxury">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white">
                    <p.icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-xl text-[var(--color-text-primary)]">{p.title}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Grand Vision */}
      <section className="bg-[var(--color-accent-primary)] py-20 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] mix-blend-overlay"></div>
        <div className="container-page relative z-10 grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl mb-6">
                The Grand Vision Behind Hare Krishna Mandir Jaipur
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-white/90 mb-6">
                Hare Krishna Mandir, Jaipur, was founded with the vision of developing a hub of devotion and cultural expression, blending traditional Rajasthani design with modern architecture.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex items-start gap-4 text-white/90">
                <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">
                  Located in Jagatpura, the temple stands as a perfect symbol of devotion, heritage, and spirituality for future generations.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="space-y-12">
            <Reveal delay={300}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="font-display text-2xl mb-4">Mission of Devotion and Service</h3>
                <p className="text-white/90 leading-relaxed">
                  As a leading Hare Krishna Temple, we aspire to spread the core values of Krishna Consciousness by guiding individuals towards a life full of peace, purpose, and spiritual enlightenment.
                </p>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="font-display text-2xl mb-6">Guiding Principles</h3>
                <ul className="space-y-4">
                  {principles.map((principle, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <Sun className="h-5 w-5 text-[#E6C687] flex-shrink-0" />
                      <span className="font-medium text-white/95">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights & Gupt Vrindavan Story */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="bg-[var(--color-bg-secondary)] rounded-3xl p-8 sm:p-12 border border-[var(--color-accent-primary)]/10 shadow-luxury">
              <h3 className="font-display text-2xl text-[var(--color-text-primary)] mb-8">Key Highlights</h3>
              <ul className="space-y-6">
                {highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[var(--color-accent-primary)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-muted)] text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <SectionHeading eyebrow="Hidden Vrindavan" title="Why Jaipur is Known as “Gupt Vrindavan”" />
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
                The term <strong>Gupt Vrindavan</strong>, meaning “Hidden Vrindavan,” reflects Jaipur's deep spiritual heritage. During the Mughal era, revered deities from Vrindavan were relocated here for protection, transforming the city into a sacred sanctuary of devotion.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Srila Prabhupada's Vision & Timeline */}
      <section className="bg-[var(--color-bg-secondary)] py-20 sm:py-24">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal>
              <SectionHeading eyebrow="The Inspiration" title="Srila Prabhupada’s Vision for Jaipur" className="mx-auto" />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
                In 1972, Srila Prabhupada visited the Pink City with his disciples. On this visit, he came up with a vision of building a replica of the Sri Sri Krishna Balaram Temple, Vrindavan, in Jaipur. His desire led to the foundation of Rajasthan’s Biggest Hindu Temple, Gupt Vrindavan Dham.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <h3 className="text-center font-display text-3xl text-[var(--color-text-primary)] mb-12">The Journey So Far</h3>
          </Reveal>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-accent-primary)]/30 -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`md:w-1/2 flex ${i % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'} w-full text-center md:text-left`}>
                      <div className={`bg-white p-6 rounded-2xl shadow-luxury border border-[var(--color-accent-primary)]/10 inline-block w-full sm:w-[80%] ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <span className="text-[var(--color-accent-primary)] font-bold text-lg mb-2 block">{item.year}</span>
                        <h4 className="font-display text-xl text-[var(--color-text-primary)] mb-2">{item.title}</h4>
                        <p className="text-[var(--color-text-muted)] text-sm">{item.text}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-[var(--color-accent-primary)] border-4 border-[var(--color-bg-secondary)] z-10"></div>
                    <div className="md:w-1/2 hidden md:block"></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page text-center max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] mb-6">
              An Invitation to Begin Your Journey
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)] mb-12">
              Indulge in a spiritual experience and become part of something historical at <strong>Hare Krishna Temple, Jaipur</strong>. By learning and implementing the teachings of the Bhagavad-Gita, let’s come together to illuminate the path of humanity.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-[var(--color-bg-secondary)] p-8 rounded-3xl border border-[var(--color-accent-primary)]/20 shadow-luxury">
              <p className="font-serif text-xl sm:text-2xl text-[var(--color-accent-primary)] font-medium italic">
                “Hare Krishna Hare Krishna Krishna Krishna Hare Hare”
              </p>
              <p className="font-serif text-xl sm:text-2xl text-[var(--color-accent-primary)] font-medium italic mt-2">
                “Hare Rama Hare Rama Rama Rama Hare Hare”
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
