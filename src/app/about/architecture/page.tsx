import { headers } from "next/headers";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame } from "@/components/ui";
import { LotusDivider } from "@/components/decor";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { 
  Building2, 
  Compass, 
  Users, 
  Sun,
  MapPin,
  Heart,
  BookOpen,
  UtensilsCrossed,
  Music,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Our Architecture · Gupt Vrindavan Dham",
  description: "Built with the Spirit of Vrindavan. Gupt Vrindavan Dham is a spiritual and cultural centre, crafted with a devotional purpose.",
  path: "/about/architecture",
});

const visionPoints = [
  { icon: Building2, title: "Braj Ki Mitti, Blessed Beauty", desc: "Every raw material used carries the essence of Braj Bhoomi, comprising local stones and natural elements, giving the temple a pure look." },
  { icon: Compass, title: "Echoes of Ancient Wisdom", desc: "Inspired by the architecture of the South, every design decision is made with precise craftsmanship and spiritual geometry to enhance its appeal." },
  { icon: Users, title: "A Home For Every Devotee", desc: "From grand aarti halls to Srila Prabhupada’s exhibition, every corner of the temple nurtures collective devotion and togetherness." },
  { icon: Sun, title: "Divine Presence", desc: "Open spaces like Vrindavan garden are thoughtfully designed so that every devotee can feel the calmness and connection of Braj in every moment inside the temple." },
];

const insideFeatures = [
  { 
    title: "Kirtan and Satsang Hall (Collective)", 
    desc: "This space comes alive with kirtan, hari-katha, and gatherings that guide devotees and connect them with the true meaning of Krishna consciousness.",
    icon: Music
  },
  { 
    title: "A Place for Quiet Chanting (Personal)", 
    desc: "Peaceful places in the temple made for mantra-meditation, chanting and learning, offering a place where one can feel themselves eternally.",
    icon: BookOpen
  },
  { 
    title: "Designed for Daily Seva (Community)", 
    desc: "From morning worship to prasadam distribution, every part of the temple is arranged to support compassionate services.",
    icon: UtensilsCrossed
  }
];

const stats = [
  { label: "Temple area", value: "3.5 lakh sq.ft" },
  { label: "Multi-Level Structure", value: "17 Storey" },
  { label: "Engaged in seva", value: "500+ Devotees" },
  { label: "For Worship and Learning", value: "12+ spaces" }
];

const levels = [
  { level: "Level 1: Ground Floor", desc: "Dedicated to community gatherings, including a convention hall and Annadaan hall." },
  { level: "Level 2: First Floor", desc: "Features Gita exhibition, Srila Prabhupada exhibition and a “Hidden Vrindavan” exhibition that will bring the true story of Gupt Vrindavan Dham through 3D art and animation." },
  { level: "Level 3: Second, Third and Fourth Floors", desc: "These significant floors are an integral part of the temple, which houses the deities of Sri Sri Krishna Balaram, Sri Sri Radha-Shyamsundar, and Sri Sri Nitai-Gauranga, and includes an educational room on each floor." },
  { level: "Level 4: Fifth Floor", desc: "This floor has a pure sattvik restaurant serving complete vegetarian cuisine." },
  { level: "Level 5: Krishna Leela Expo and Harinam Mandap", desc: "Space dedicated to showcasing the divine pastimes of Lord Krishna through various arts and devotional gatherings." }
];

const uniquePoints = [
  { 
    num: "01",
    title: "Inspired by the Mood of Vrindavan", 
    desc: "Not just an architecture, but an effort to redevelop the essence of Lord Krishna's pastimes in the sacred city of Gupt Vrindavan.",
    tag: "Temple exterior"
  },
  { 
    num: "02",
    title: "Designed Life of Bhakti-Yoga", 
    desc: "Every corner in the temple encourages daily practices like chanting, hearing, and learning with every visit.",
    tag: "Temple kirtan hall"
  },
  { 
    num: "03",
    title: "Rooted in Acharya Parampara", 
    desc: "Follows the core values and principles as per the teachings of Srila Prabhupada (Founder, Acharya of International Society for Krishna Consciousness).",
    tag: "Srila Prabhupada"
  }
];

export default async function ArchitecturePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Mandir", path: "#" },
          { name: "Our Architecture", path: "/about/architecture" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Our Vision"
        title="Built with the Spirit of Vrindavan"
        intro="Gupt Vrindavan Dham is a spiritual and cultural centre, crafted with a devotional purpose, where every stone, space, and structure offers peace, love, and faith."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Mandir", href: "#" },
          { name: "Our Architecture", href: "/about/architecture" },
        ]}
      />

      {/* Vision Points */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {visionPoints.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group flex h-full flex-col gap-4 rounded-3xl border border-[var(--color-accent-primary)]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-primary)]/30 hover:shadow-luxury">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] group-hover:bg-[var(--color-accent-primary)] group-hover:text-white transition-colors">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-xl text-[var(--color-text-primary)]">{p.title}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A Vision Taking Shape */}
      <section className="bg-[var(--color-bg-secondary)] py-20 sm:py-24">
        <div className="container-page text-center">
          <Reveal>
            <SectionHeading 
              eyebrow="Rising in Devotion" 
              title="A Vision Taking Shape" 
              intro="Witness the temple's divine vision unfold through grand shikhars, ornate cravings and timeless architecture." 
              className="mx-auto" 
            />
          </Reveal>
          
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "EXTERIOR", title: "The Grand Shikhar" },
              { label: "EXTERIOR", title: "Temple Entrance" },
              { label: "EXTERIOR", title: "Ornate Cravings" },
              { label: "INTERIOR", title: "Interior Design" },
              { label: "INTERIOR", title: "Temple Hall" },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 100} className={i >= 3 ? "lg:col-span-1.5" : ""}>
                <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-left transition-transform duration-500 group-hover:scale-105">
                    <span className="text-[10px] font-bold tracking-widest text-[var(--color-accent-light)] uppercase mb-2">{img.label}</span>
                    <h4 className="text-xl font-display text-white">{img.title}</h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the Temple */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <Reveal>
              <SectionHeading 
                eyebrow="Inside the Temple" 
                title="A Space for Krishna Consciousness" 
                intro="Experience Devotion in its purest form." 
              />
            </Reveal>
            <div className="mt-12 space-y-8">
              {insideFeatures.map((feat, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 grid h-14 w-14 place-items-center rounded-2xl bg-[var(--color-bg-tertiary)] text-[var(--color-accent-primary)]">
                      <feat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-display text-[var(--color-text-primary)] mb-2">{feat.title}</h4>
                      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          
          <div className="bg-[var(--color-bg-secondary)] rounded-3xl p-8 border border-[var(--color-accent-primary)]/10">
            <Reveal>
              <h3 className="font-display text-2xl text-[var(--color-text-primary)] mb-6">Temple Features</h3>
              <ul className="space-y-4 mb-10">
                {["Traditional Design", "Natural materials", "Devotional spaces", "Peaceful atmosphere"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--color-text-muted)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-primary)]"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-white rounded-2xl p-6 border border-[var(--color-accent-primary)]/10 shadow-sm text-center">
                <h4 className="text-lg font-display text-[var(--color-text-primary)] mb-2">Mandir Nirman Seva</h4>
                <p className="text-sm text-[var(--color-text-muted)] mb-6">Contribute to the sacred atmosphere of Gupt Vrindavan Dham and be part of timeless spiritual heritage.</p>
                <Link href="/donate" className="inline-flex items-center gap-2 bg-[var(--color-accent-primary)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--color-accent-secondary)] transition-colors w-full justify-center">
                  Offer Seva Now <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-[var(--color-accent-primary)] py-20 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.png')] mix-blend-overlay"></div>
        <div className="container-page relative z-10 text-center">
          <Reveal>
            <span className="text-[var(--color-accent-light)] font-bold tracking-widest text-xs uppercase mb-4 block">Project Overview</span>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">A Temple Taking Shape</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-16">
              A collective effort in devotional service, meant to create a place where people can seek spiritual knowledge and connect with the Lord personally.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex flex-col gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-semibold text-[#E6C687]">{stat.value.split(" ")[0]}</span>
                  <span className="text-white/90 text-sm font-medium">{stat.label}</span>
                  <span className="text-white/60 text-xs">{stat.value.substring(stat.value.indexOf(" ") + 1)}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-20">
              <p className="font-serif italic text-2xl text-[#E6C687]">“Every act here is dedicated to Lord Krishna”</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Temple Layout */}
      <section className="bg-[var(--color-bg-secondary)] py-20 sm:py-24">
        <div className="container-page max-w-4xl">
          <Reveal className="text-center mb-16">
            <SectionHeading eyebrow="Temple Layout" title="Multi-level Structure" intro="Each floor is thoughtfully designed to serve a unique spiritual and community purpose." className="mx-auto" />
          </Reveal>
          
          <div className="space-y-6">
            {levels.map((lvl, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 border border-[var(--color-accent-primary)]/10 shadow-sm transition-all hover:shadow-luxury">
                  <div className="sm:w-1/3 flex-shrink-0">
                    <h4 className="font-display text-xl text-[var(--color-accent-primary)]">{lvl.level}</h4>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-[var(--color-text-muted)] leading-relaxed">{lvl.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Vision */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="text-center mb-16">
            <SectionHeading eyebrow="Behind the Vision" title="What Makes Gupt Vrindavan Dham Unique" intro="The temple is not just a structure but a space designed to protect dharma and guide people towards the path of Krishna Consciousness." className="mx-auto" />
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {uniquePoints.map((point, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="group relative flex flex-col h-full bg-[var(--color-bg-secondary)] rounded-3xl p-8 overflow-hidden border border-[var(--color-accent-primary)]/5 hover:border-[var(--color-accent-primary)]/20 transition-all">
                  <div className="absolute top-0 right-0 p-6 opacity-5 font-display text-8xl font-bold text-[var(--color-accent-primary)] pointer-events-none group-hover:scale-110 transition-transform">{point.num}</div>
                  <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-[var(--color-accent-primary)] w-max mb-6 shadow-sm">{point.tag}</span>
                  <h3 className="font-display text-2xl text-[var(--color-text-primary)] mb-4 relative z-10">{point.title}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm relative z-10">{point.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-bg-secondary)] py-20 sm:py-24">
        <div className="container-page text-center max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Be a Part of Lord’s Divine Seva" title="Be Part of This Sacred Vision" className="mx-auto" />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)] mb-10">
              Every contribution and visit is counted as a part of serving the Lotus Feet of the Lord. Help us in building Gupt Vrindavan Dham, a place of devotion, simplicity, and spiritual awakening.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-serif text-2xl text-[var(--color-accent-primary)] italic mb-10">
              “ Join the Legacy That is Truly Exceptional ”
            </p>
            <Link href="/donate" className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent-primary)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--color-accent-secondary)] transition-colors hover:shadow-lg hover:-translate-y-1">
              <Heart size={20} className="fill-current animate-heart-beat" /> Contribute Now
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
