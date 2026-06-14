import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Mandala, Lotus } from "@/components/decor";

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs: { name: string; href: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-maroon-950 pt-[calc(var(--nav-h)+3.5rem)] pb-16 text-cream">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_50%_-20%,#7e2240_0%,#46091f_50%,#2e0614_100%)]" />
      <Mandala className="pointer-events-none absolute left-1/2 top-[-30%] h-[130%] w-auto -translate-x-1/2 text-gold-500/[0.07] animate-spin-slow" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream/90 to-transparent" />

      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-cream/60">
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gold-500/50" />}
                {i === crumbs.length - 1 ? (
                  <span className="text-gold-300">{c.name}</span>
                ) : (
                  <Link href={c.href} className="transition-colors hover:text-gold-300">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
            <Lotus className="h-3.5 w-3.5 rotate-180" /> {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] text-cream sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">{intro}</p>}
      </div>
    </section>
  );
}
