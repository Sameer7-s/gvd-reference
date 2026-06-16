import Link from "next/link";
import { ArrowRight, BadgeIndianRupee, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Button } from "@/components/ui";
import { Icon } from "@/components/icon";
import { Mandala } from "@/components/decor";
import { SEVAS, type Seva } from "@/lib/site";

export function SevaCard({ seva }: { seva: Seva }) {
  return (
    <article
      id={seva.slug}
      className={`group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-luxury ${
        seva.highlight
          ? "border-[var(--color-accent-primary)]/50 bg-gradient-to-br from-neutral-900 to-black text-white"
          : "border-[var(--color-accent-primary)]/20 bg-white/80 text-[var(--color-text-primary)] shadow-luxury hover:border-[var(--color-accent-primary)]/50"
      }`}
    >
      {seva.highlight && (
        <span className="absolute right-5 top-5 rounded-full bg-[var(--color-accent-primary)]/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--color-accent-primary)]">
          Most Needed
        </span>
      )}
      <span
        className={`grid h-14 w-14 place-items-center rounded-2xl ${
          seva.highlight
            ? "bg-[var(--color-accent-primary)]/15 text-[var(--color-accent-primary)]"
            : "bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
        }`}
      >
        <Icon name={seva.icon} className="h-7 w-7" />
      </span>

      <h3 className="mt-5 font-display text-2xl">{seva.title}</h3>
      <p className={`text-sm font-semibold ${seva.highlight ? "text-[var(--color-accent-primary)]" : "text-[var(--color-accent-primary)]"}`}>
        {seva.tagline}
      </p>
      <p className={`mt-3 text-sm leading-relaxed ${seva.highlight ? "text-white/75" : "text-[var(--color-text-muted)]"}`}>
        {seva.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {seva.amounts.map((amt) => (
          <span
            key={amt}
            className={`inline-flex items-center gap-0.5 rounded-full px-3 py-1 text-sm font-semibold ${
              seva.highlight
                ? "bg-white/10 text-[var(--color-accent-light)]"
                : "bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]"
            }`}
          >
            <BadgeIndianRupee className="h-3.5 w-3.5" />
            {amt.toLocaleString("en-IN")}
          </span>
        ))}
      </div>

      <div className="mt-6 flex-1" />
      <Button
        href={`/donate#${seva.slug}`}
        variant={seva.highlight ? "gold" : "primary"}
        size="md"
        className="w-full"
      >
        Contribute
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </article>
  );
}

export function Seva() {
  return (
    <section id="sevas" className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-20 sm:py-28">
      <Mandala className="pointer-events-none absolute -right-48 top-20 h-[32rem] w-[32rem] text-[var(--color-accent-primary)] opacity-[0.05] animate-spin-slower" />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow="Seva — Loving Service"
            title={
              <>
                Be a part of the Lord&apos;s <span className="text-[var(--color-accent-primary)]">service</span>
              </>
            }
            intro="Every contribution, however small, becomes eternal devotional service. Choose a seva close to your heart and share in the merit."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SEVAS.map((seva, i) => (
            <Reveal key={seva.slug} delay={i * 70}>
              <SevaCard seva={seva} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-600/20 bg-emerald-500/5 px-6 py-5 text-center sm:flex-row sm:text-left shadow-luxury">
            <ShieldCheck className="h-8 w-8 shrink-0 text-emerald-600" />
            <p className="text-sm text-[var(--color-text-muted)]">
              <strong className="text-[var(--color-text-primary)]">100% secure &amp; tax-exempt.</strong> All
              donations are processed over an encrypted connection and are eligible for tax exemption.
              A receipt is issued for every contribution.
            </p>
            <Button href="/donate" variant="outline" size="sm" className="shrink-0">
              View all sevas
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
