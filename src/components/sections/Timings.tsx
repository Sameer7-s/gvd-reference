import { Sunrise, Sunset, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Button } from "@/components/ui";
import { DarshanStatus } from "@/components/DarshanStatus";
import { Lotus } from "@/components/decor";
import { SCHEDULE } from "@/lib/site";

export function Timings() {
  const morning = SCHEDULE.filter((s) => Number(s.time.split(":")[0]) < 13);
  const evening = SCHEDULE.filter((s) => Number(s.time.split(":")[0]) >= 13);

  const Column = ({
    icon: IconCmp,
    title,
    items,
  }: {
    icon: typeof Sunrise;
    title: string;
    items: typeof SCHEDULE;
  }) => (
    <div className="rounded-3xl border border-gold-500/20 bg-ivory/80 p-6 shadow-temple sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-maroon-700 text-cream">
          <IconCmp className="h-5 w-5" />
        </span>
        <h3 className="font-display text-xl text-maroon-900">{title}</h3>
      </div>
      <ul className="mt-5 divide-y divide-gold-500/15">
        {items.map((s) => (
          <li key={s.name} className="flex items-baseline justify-between gap-4 py-3">
            <div>
              <p className="font-medium text-maroon-900">{s.name}</p>
              {s.note && <p className="text-xs text-muted">{s.note}</p>}
            </div>
            <span className="shrink-0 font-display text-lg tabular-nums text-saffron-700">
              {s.display}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="timings" className="relative bg-sand py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Daily Worship"
              title="Aarti & Darshan Timings"
              intro="The deities are worshipped from before sunrise to night across nine sacred aartis. Plan your visit around the auspicious moments."
              className="max-w-none"
            />
            <div className="mt-6 flex flex-col items-start gap-4">
              <DarshanStatus />
              <div className="inline-flex items-center gap-2 rounded-xl bg-maroon-900/5 px-4 py-2 text-sm text-muted">
                <Clock className="h-4 w-4 text-saffron-600" />
                Temple rests 1:00 PM – 4:30 PM
              </div>
              <Button href="/visit" variant="primary" size="md" className="mt-1">
                <Lotus className="h-4 w-4 rotate-180" />
                Plan Your Visit
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <Column icon={Sunrise} title="Morning" items={morning} />
            </Reveal>
            <Reveal delay={120}>
              <Column icon={Sunset} title="Evening" items={evening} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
