import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { LogoMark, BrandIcon } from "./brand";
import { Mandala } from "./decor";
import { NewsletterForm } from "./NewsletterForm";
import { SITE, CONTACT, SOCIALS, NAV, SEVAS, MAHA_MANTRA } from "@/lib/site";

const sevaLinks = SEVAS.slice(0, 5);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-maroon-950 text-cream/70">
      <Mandala
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-gold-500/10 animate-spin-slower"
        aria-hidden="true"
      />

      {/* Maha-mantra band */}
      <div className="relative border-b border-gold-500/15 bg-maroon-900/40">
        <div className="container-page flex flex-col items-center gap-2 py-8 text-center">
          <p className="font-deva text-xl text-gold-300 sm:text-2xl">{MAHA_MANTRA.devanagari}</p>
          <p className="text-xs uppercase tracking-[0.22em] text-cream/55 sm:text-sm">
            {MAHA_MANTRA.transliteration}
          </p>
        </div>
      </div>

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12" />
            <div>
              <p className="font-display text-lg text-cream">Hare Krishna Movement</p>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-300">
                Visakhapatnam
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">{SITE.mission}</p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE.shortName} on ${s.label}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/25 text-cream/70 transition-colors duration-200 hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-300"
              >
                <BrandIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <nav className="lg:col-span-2" aria-label="Footer">
          <h3 className="font-display text-base text-gold-300">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sevas */}
        <nav className="lg:col-span-2" aria-label="Sevas">
          <h3 className="font-display text-base text-gold-300">Sevas</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {sevaLinks.map((s) => (
              <li key={s.slug}>
                <Link href={`/donate#${s.slug}`} className="transition-colors hover:text-gold-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact + newsletter */}
        <div className="lg:col-span-4">
          <h3 className="font-display text-base text-gold-300">Visit & Connect</h3>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${CONTACT.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition-colors hover:text-gold-300"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {CONTACT.addressLine}, {CONTACT.street}, {CONTACT.locality}, {CONTACT.region}{" "}
                {CONTACT.postalCode}
              </span>
            </a>
            <a href={`tel:${CONTACT.phonePrimaryRaw}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" /> {CONTACT.phonePrimary}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" /> {CONTACT.email}
            </a>
          </address>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-gold-500/15">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-gold-300">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold-300">
              Terms
            </Link>
            <span className="text-gold-400/80">Hare Krishna · served with devotion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
