import { ArrowRight, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui";
import { Mandala, Lotus, PeacockFeather, DivineGlow } from "@/components/decor";
import { DarshanStatus } from "@/components/DarshanStatus";
import { Countdown } from "@/components/Countdown";
import { AssetFrame } from "@/components/ui";
import { SITE, MAHA_MANTRA, FEATURED_FESTIVAL } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-maroon-950 pt-[calc(var(--nav-h)+2.25rem)] pb-24 sm:pt-[calc(var(--nav-h)+4.5rem)] sm:pb-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_-10%,#7e2240_0%,#46091f_45%,#2e0614_100%)]" />
        <Mandala className="absolute left-1/2 top-[-18%] h-[120%] w-auto -translate-x-1/2 text-gold-500/10 animate-spin-slow" />
        <PeacockFeather className="absolute left-[3%] top-[12%] hidden h-72 text-gold-300/30 animate-float lg:block" />
        <Lotus className="absolute bottom-8 right-[6%] hidden h-24 w-24 rotate-180 text-saffron-300/20 lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </div>

      <div className="container-page grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
            <Lotus className="h-3.5 w-3.5 rotate-180" />
            The Hidden Treasure of Vrindavan
          </span>

          <h1 className="text-3xl leading-[1.08] text-cream sm:text-5xl sm:leading-[1.04] lg:text-6xl">
            Welcome to the
            <br />
            <span className="text-gold-grad">Hare Krishna Movement</span>
            <br />
            <span className="text-cream/90">Visakhapatnam</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-cream/75">
            Step into the {SITE.center} at Gambhiram — a sanctuary of soulful kirtan, the
            daily darshan of Sri Sri Nitai-Gauranga, and sanctified prasadam, lovingly served
            in the lineage of {SITE.founderAcharya.split(" ").slice(-3).join(" ")}.
          </p>

          <p className="font-deva text-base text-gold-300 sm:text-lg">{MAHA_MANTRA.devanagari}</p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button href="/donate" variant="gold" size="lg">
              <Heart className="h-5 w-5" />
              Offer a Seva
            </Button>
            <Button href="/visit" variant="outline-light" size="lg">
              <MapPin className="h-5 w-5" />
              Plan Your Visit
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </div>

          <DarshanStatus className="mt-2" />
        </div>

        {/* Deity frame */}
        <div className="relative mx-auto mt-6 w-full max-w-[17rem] sm:max-w-md lg:mt-0">
          <DivineGlow className="absolute inset-0 -z-10 scale-125" />

          {/* concentric arched gold frame — a clean torana, no stray strokes */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[50%_50%_18px_18px_/_22%_22%_6px_6px] border border-gold-400/35"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-1.5 rounded-[50%_50%_16px_16px_/_22%_22%_5px_5px] border border-gold-400/20"
          />
          {/* crowning lotus finial */}
          <Lotus
            aria-hidden="true"
            className="absolute -top-7 left-1/2 h-9 w-9 -translate-x-1/2 rotate-180 text-gold-300"
          />

          <AssetFrame
            label="Sri Sri Nitai-Gauranga Darshan"
            tone="night"
            arched
            className="aspect-[3/4] shadow-temple-lg ring-1 ring-gold-400/40"
          />

          {/* Festival countdown ribbon */}
          <div className="absolute -bottom-8 left-1/2 w-[96%] -translate-x-1/2 rounded-2xl border border-gold-500/30 bg-maroon-900/85 px-3 py-4 shadow-temple-lg backdrop-blur-md sm:px-4">
            <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
              Next Festival · {FEATURED_FESTIVAL.name}
            </p>
            <Countdown iso={`${FEATURED_FESTIVAL.date}T00:00:00+05:30`} className="mt-2 justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
