import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame } from "@/components/ui";
import { Lotus, Mandala } from "@/components/decor";

export function Prabhupada() {
  return (
    <section id="prabhupada" className="relative overflow-hidden bg-sand py-20 sm:py-28">
      <Mandala className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] text-saffron-500/5" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <AssetFrame
            label="Srila Prabhupada"
            tone="saffron"
            arched
            className="aspect-[3/4] shadow-temple-lg ring-1 ring-gold-400/30"
          />
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-gold-500/30 bg-ivory/95 px-5 py-2 text-center shadow-temple">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-700">
              Founder-Acharya · ISKCON
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Our Inspiration"
            title="His Divine Grace A. C. Bhaktivedanta Swami Prabhupada"
            className="max-w-none"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              In 1965, at the age of sixty-nine, Srila Prabhupada journeyed from India to the West
              with little more than a trunk of sacred books and unshakable faith in the holy name.
              Within a few years he had ignited a worldwide spiritual movement.
            </p>
            <p>
              He founded the International Society for Krishna Consciousness, translated and
              commented on the timeless Vedic scriptures, and established temples, farms and schools
              across the globe — a legacy we humbly continue here in Visakhapatnam.
            </p>
          </div>

          <figure className="relative rounded-2xl border-l-4 border-gold-500 bg-ivory/80 p-6 shadow-temple">
            <Quote className="absolute -top-3 left-4 h-8 w-8 text-gold-500/40" />
            <blockquote className="font-display text-xl italic leading-relaxed text-maroon-900">
              &ldquo;Chant Hare Krishna and be happy.&rdquo;
            </blockquote>
            <figcaption className="mt-3 flex items-center gap-2 text-sm font-semibold text-saffron-700">
              <Lotus className="h-4 w-4 rotate-180" />
              Srila Prabhupada
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
