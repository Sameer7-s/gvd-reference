import { Reveal } from "@/components/Reveal";
import { Mandala, Lotus } from "@/components/decor";
import { Button } from "@/components/ui";
import { IMPACT } from "@/lib/site";

export function Impact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-950 py-20 text-cream sm:py-24">
      <Mandala className="pointer-events-none absolute -left-40 -top-24 h-[34rem] w-[34rem] text-gold-500/[0.07] animate-spin-slow" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
            <Lotus className="h-3.5 w-3.5 rotate-180" /> Our Impact
          </span>
          <h2 className="mt-4 text-3xl text-cream sm:text-4xl">
            Devotion in <span className="text-gold-grad">action</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Through the mercy of the Lord and the generosity of devotees, the dham has touched
            countless lives across Visakhapatnam.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {IMPACT.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="rounded-3xl border border-gold-500/20 bg-cream/[0.04] p-5 text-center backdrop-blur transition-colors duration-300 hover:border-gold-400/50 hover:bg-cream/[0.07] sm:p-6">
                <p className="font-display text-3xl text-gold-300 sm:text-4xl lg:text-5xl">{stat.value}</p>
                <p className="mt-2 font-medium text-cream">{stat.label}</p>
                {stat.sub && <p className="mt-1 text-xs text-cream/55">{stat.sub}</p>}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href="/donate" variant="gold" size="lg">
            Help us serve more
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
