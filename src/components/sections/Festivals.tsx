import { CalendarDays, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Button, AssetFrame } from "@/components/ui";
import { Countdown } from "@/components/Countdown";
import { Lotus } from "@/components/decor";
import { FESTIVALS, FEATURED_FESTIVAL } from "@/lib/site";

export function Festivals() {
  return (
    <section id="festivals" className="relative bg-cream py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="The Vaishnava Calendar"
            title="Upcoming Festivals & Celebrations"
            intro="The temple calendar is alive with colour, kirtan and feasting. Join us as we celebrate the pastimes of the Lord through the year."
          />
        </Reveal>

        {/* Featured festival */}
        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-500/30 bg-gradient-to-br from-maroon-900 to-maroon-950 shadow-temple-lg">
            <div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
              <div className="flex flex-col items-start gap-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                  <Lotus className="h-3.5 w-3.5 rotate-180" /> Festival Spotlight
                </span>
                <h3 className="font-display text-3xl text-cream sm:text-4xl">
                  {FEATURED_FESTIVAL.name}
                </h3>
                <p className="inline-flex items-center gap-2 text-saffron-300">
                  <CalendarDays className="h-4 w-4" /> {FEATURED_FESTIVAL.display}
                </p>
                <p className="max-w-md text-cream/75">{FEATURED_FESTIVAL.blurb}</p>
                <Countdown iso={`${FEATURED_FESTIVAL.date}T00:00:00+05:30`} className="mt-1" />
                <Button href="/donate#nitya-seva" variant="gold" size="md" className="mt-2">
                  Sponsor the celebration
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <AssetFrame
                label={`${FEATURED_FESTIVAL.name} Utsav`}
                tone="gold"
                className="aspect-[4/3] w-full shadow-temple-lg ring-1 ring-gold-400/30"
              />
            </div>
          </div>
        </Reveal>

        {/* Festival list */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FESTIVALS.map((f, i) => (
            <Reveal key={f.name} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-gold-500/20 bg-ivory/80 p-6 shadow-temple transition-colors duration-300 hover:border-saffron-400 hover:bg-saffron-50">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-saffron-50 px-3 py-1 text-xs font-semibold text-saffron-700">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {f.display}
                </span>
                <h3 className="mt-4 font-display text-xl text-maroon-900">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
