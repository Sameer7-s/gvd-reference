import { Music, Sparkles, UtensilsCrossed, HandHeart } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame } from "@/components/ui";
import { Mandala, LotusDivider } from "@/components/decor";
import { SITE } from "@/lib/site";

const pillars = [
  { icon: Sparkles, title: "Deity Worship", text: "Archana from dawn to dusk across nine aartis." },
  { icon: Music, title: "Harinaam Kirtan", text: "The congregational chanting of the holy names." },
  { icon: UtensilsCrossed, title: "Prasadam", text: "Sanctified vegetarian food, offered first to Krishna." },
  { icon: HandHeart, title: "Selfless Seva", text: "Feeding, teaching and serving the community." },
];

export function Welcome() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <Mandala className="pointer-events-none absolute -left-40 top-10 h-96 w-96 text-saffron-500/5" />

      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <AssetFrame
            label="The Vaikuntham Cultural Centre"
            tone="saffron"
            className="aspect-[4/5] shadow-temple-lg"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold-500/30 bg-ivory/95 p-5 shadow-temple sm:block">
            <p className="font-display text-4xl text-saffron-grad">2015</p>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Serving Vizag since
            </p>
          </div>
          <div className="absolute -left-5 -top-5 hidden h-24 w-24 rounded-full border border-gold-500/30 bg-gold-500/5 lg:grid lg:place-items-center">
            <Mandala className="h-16 w-16 text-gold-500/40 animate-spin-slow" />
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title={
              <>
                A sacred refuge of <span className="text-saffron-grad">bhakti</span> on the
                eastern coast
              </>
            }
            className="max-w-none"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              {SITE.legalName} is a registered spiritual and cultural trust dedicated to sharing the
              timeless science of Krishna consciousness. From humble beginnings, the dham has grown
              into a vibrant centre of worship, learning and seva for the people of Visakhapatnam.
            </p>
            <p>
              Rooted in the teachings of <strong className="text-maroon-900">{SITE.founderAcharya}</strong>,
              we offer every soul an opportunity for a life of happiness, good health and peace of
              mind through devotion to the Supreme Lord.
            </p>
          </div>

          <LotusDivider className="!justify-start" />

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group flex h-full items-start gap-3 rounded-2xl border border-gold-500/20 bg-ivory/70 p-4 transition-colors duration-300 hover:border-saffron-400 hover:bg-saffron-50">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-maroon-700 text-cream">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-maroon-900">{p.title}</h3>
                    <p className="mt-0.5 text-sm text-muted">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
