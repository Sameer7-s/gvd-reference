"use client"; // force HMR

import { CalendarDays, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Button, AssetFrame } from "@/components/ui";
import { Countdown } from "@/components/Countdown";
import { Lotus } from "@/components/decor";
import { FESTIVALS, FEATURED_FESTIVAL } from "@/lib/site";

export function Festivals() {
  const PAST_FESTIVALS = [
    { name: "Janmashtami", img: "https://images.unsplash.com/photo-1582645607373-f93ccaf28352?auto=format&fit=crop&q=80&w=800" },
    { name: "Gaura Purnima", img: "https://images.unsplash.com/photo-1620853549646-cd13ed4a7428?auto=format&fit=crop&q=80&w=800" },
    { name: "Ratha Yatra", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800" },
    { name: "Govardhan Puja", img: "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="festivals" className="relative bg-[var(--color-bg-tertiary)] py-20 sm:py-28 overflow-hidden">
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
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-accent-primary)]/20 bg-white shadow-luxury">
            <div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
              <div className="flex flex-col items-start gap-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-primary)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-primary)]">
                  <Lotus className="h-3.5 w-3.5 rotate-180" /> Festival Spotlight
                </span>
                <h3 className="font-display text-3xl text-[var(--color-text-primary)] sm:text-4xl">
                  {FEATURED_FESTIVAL.name}
                </h3>
                <p className="inline-flex items-center gap-2 text-[var(--color-accent-primary)] font-medium">
                  <CalendarDays className="h-4 w-4" /> {FEATURED_FESTIVAL.display}
                </p>
                <p className="max-w-md text-[var(--color-text-muted)]">{FEATURED_FESTIVAL.blurb}</p>
                <Countdown iso={`${FEATURED_FESTIVAL.date}T00:00:00+05:30`} className="mt-1" />
                <Button href="/donate#nitya-seva" variant="gold" size="md" className="mt-2">
                  Sponsor the celebration
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <AssetFrame
                label={`${FEATURED_FESTIVAL.name} Utsav`}
                tone="gold"
                className="aspect-[4/3] w-full shadow-luxury ring-1 ring-[var(--color-accent-primary)]/30"
              />
            </div>
          </div>
        </Reveal>

        {/* Festival list */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FESTIVALS.map((f, i) => (
            <Reveal key={f.name} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-[var(--color-accent-primary)]/15 bg-white/60 p-6 shadow-luxury transition-all duration-300 hover:border-[var(--color-accent-primary)]/40 hover:bg-white hover:-translate-y-1">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--color-accent-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent-primary)]">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {f.display}
                </span>
                <h3 className="mt-4 font-display text-xl text-[var(--color-text-primary)]">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{f.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* New Interactive Addition: Past Festivals Carousel */}
        <Reveal className="mt-24">
          <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-2xl text-[var(--color-text-primary)] sm:text-3xl">Glimpses of Devotion</h3>
              <p className="mt-2 text-[var(--color-text-muted)] max-w-lg">Experience the joy and spiritual vibrancy of our past temple celebrations.</p>
            </div>
            <div className="flex gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent-primary)]">Swipe to explore</span>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {PAST_FESTIVALS.map((festival, i) => (
              <div key={festival.name} className="relative min-w-[280px] sm:min-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden snap-center group shadow-luxury border border-[var(--color-accent-primary)]/10 flex-shrink-0">
                <img 
                  src={festival.img} 
                  alt={festival.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-display text-2xl text-white">{festival.name}</h4>
                  <div className="h-0.5 w-8 bg-[var(--color-accent-primary)] mt-3 mb-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                  <span className="text-xs text-white/80 font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">View Highlights</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
