import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { AssetFrame } from "@/components/ui";
import { Icon } from "@/components/icon";
import { EXPERIENCES } from "@/lib/site";

const toneText: Record<string, string> = {
  saffron: "from-saffron-500/90 to-maroon-800/90",
  maroon: "from-maroon-700/90 to-maroon-950/90",
  gold: "from-gold-500/90 to-saffron-700/90",
  krishna: "from-krishna-500/90 to-maroon-900/90",
};

/** Asymmetric bento of temple experiences. */
export function Explore() {
  return (
    <section id="explore" className="relative bg-cream bg-dots py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Explore the Dham"
              title="Immerse yourself in temple life"
              intro="Discover the many ways to experience devotion — from serene darshan to soul-nourishing prasadam and joyful kirtan."
              className="max-w-xl"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[15rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((exp, i) => {
            // Make the first and fourth cards span two rows for an editorial bento rhythm.
            const tall = i === 0 || i === 3;
            return (
              <Reveal
                key={exp.title}
                delay={i * 70}
                className={tall ? "sm:row-span-2" : ""}
              >
                <article
                  className={`group relative h-full overflow-hidden rounded-3xl shadow-temple ${
                    tall ? "min-h-full" : ""
                  }`}
                >
                  <AssetFrame tone={exp.tone} className="absolute inset-0 h-full w-full rounded-3xl" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${toneText[exp.tone]} opacity-90`}
                  />
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <span className="mb-3 grid h-12 w-12 place-items-center rounded-2xl border border-white/25 bg-white/15 text-cream backdrop-blur">
                      <Icon name={exp.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-2xl text-cream">{exp.title}</h3>
                    <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-cream/80">
                      {exp.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
