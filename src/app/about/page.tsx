import { headers } from "next/headers";
import { Target, Eye, Users, UtensilsCrossed, GraduationCap, Music, Heart } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame } from "@/components/ui";
import { LotusDivider } from "@/components/decor";
import { Prabhupada } from "@/components/sections/Prabhupada";
import { Impact } from "@/components/sections/Impact";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Us · Our Story & Mission",
  description:
    "Learn about Hare Krishna Movement, Visakhapatnam — a registered spiritual trust serving the city since 2015 through worship, education, prasadam distribution and seva, in the lineage of Srila Prabhupada.",
  path: "/about",
  keywords: ["about HKM Vizag", "ISKCON Visakhapatnam history", "Krishna consciousness Vizag"],
});

const programs = [
  { icon: UtensilsCrossed, title: "Anna-Daan & Subhojanam", text: "Daily distribution of sanctified meals to pilgrims and the needy." },
  { icon: GraduationCap, title: "Value Education", text: "Character-building and Gita wisdom for children and youth." },
  { icon: Music, title: "Kirtan & Outreach", text: "Public chanting programs, home gatherings and festival yatras." },
  { icon: Heart, title: "Go-Seva", text: "Protection and loving care of the sacred cows of the dham." },
];

const timeline = [
  { year: "2015", title: "A trust is born", text: "HKMI Visakhapatnam is registered as a spiritual and cultural charitable trust." },
  { year: "2017", title: "Seva expands", text: "Anna-Daan and community prasadam programs begin reaching thousands each month." },
  { year: "2020", title: "Hands that serve", text: "Relief kitchens and food distribution intensify during times of need." },
  { year: "Today", title: "The Vaikuntham Centre", text: "A growing cultural centre at Gambhiram — a spiritual landmark for the coast." },
];

export default async function AboutPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Who We Are"
        title="A movement of love, devotion and service"
        intro={SITE.mission}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* Mission / Vision */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", text: SITE.mission },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To make the holy name of Krishna a part of every home in Visakhapatnam — nurturing a society that is happy, healthy, compassionate and spiritually awake.",
            },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-[var(--color-accent-primary)]/20 bg-white/80 p-8 shadow-luxury">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white">
                  <b.icon className="h-7 w-7" />
                </span>
                <h2 className="font-display text-2xl text-[var(--color-text-primary)]">{b.title}</h2>
                <p className="leading-relaxed text-[var(--color-text-muted)]">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our story timeline */}
      <section className="bg-[var(--color-bg-secondary)] py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Our Journey" title="From humble beginnings" />
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal className="relative mx-auto w-full max-w-sm">
              <AssetFrame label="The dham through the years" tone="gold" className="aspect-[4/5] shadow-luxury" />
            </Reveal>
            <ol className="relative space-y-8 border-l-2 border-[var(--color-accent-primary)]/30 pl-8">
              {timeline.map((t, i) => (
                <Reveal as="li" key={t.year} delay={i * 90} className="relative">
                  <span className="absolute -left-[2.6rem] grid h-8 w-8 place-items-center rounded-full border-2 border-[var(--color-accent-primary)] bg-[var(--color-bg-primary)] text-xs font-bold text-[var(--color-accent-primary)]">
                    {i + 1}
                  </span>
                  <p className="font-display text-2xl text-[var(--color-accent-primary)]">{t.year}</p>
                  <h3 className="mt-1 font-display text-xl text-[var(--color-text-primary)]">{t.title}</h3>
                  <p className="mt-1 text-[var(--color-text-muted)]">{t.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Service in many forms"
              intro="Our activities flow from a single source — love for God expressed as love for all living beings."
            />
          </Reveal>
          <LotusDivider className="mt-8" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-[var(--color-accent-primary)]/20 bg-white/70 p-6 transition-colors duration-300 hover:border-[var(--color-accent-primary)]/50 hover:bg-[var(--color-bg-tertiary)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg text-[var(--color-text-primary)]">{p.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Users className="h-5 w-5 text-[var(--color-accent-primary)]" />
            Powered by a community of 6,000+ life members and countless volunteers.
          </Reveal>
        </div>
      </section>

      <Prabhupada />
      <Impact />
    </>
  );
}
