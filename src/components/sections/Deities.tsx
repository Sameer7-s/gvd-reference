import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame } from "@/components/ui";
import { Mandala, DivineGlow } from "@/components/decor";
import { DEITIES } from "@/lib/site";

const tones = ["night", "krishna", "gold"] as const;

export function Deities() {
  return (
    <section className="relative overflow-hidden bg-maroon-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,#5a132c_0%,transparent_60%)]" />
      <Mandala className="pointer-events-none absolute left-1/2 top-0 h-[140%] w-auto -translate-x-1/2 text-gold-500/[0.06] animate-spin-slower" />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="The Worshipable Lords"
            title="Darshan of the Deities"
            intro="The Lord personally appears in the deity form to accept our love and service. Behold the beautifully adorned forms worshipped daily at the dham."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {DEITIES.map((d, i) => (
            <Reveal key={d.name} delay={i * 120}>
              <article className="group relative flex flex-col items-center text-center">
                <div className="relative w-full">
                  <DivineGlow className="absolute inset-0 -z-10 scale-110 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <AssetFrame
                    label={d.name}
                    tone={tones[i]}
                    arched
                    className="aspect-[3/4] w-full shadow-temple-lg ring-1 ring-gold-400/25 transition-transform duration-500 ease-soft group-hover:-translate-y-1.5"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl text-gold-300">{d.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-saffron-300/80">
                  {d.role}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/65">{d.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
