import Link from "next/link";
import { SITE, SOCIALS, NAV } from "@/lib/site";
import { BrandIcon } from "./brand"; // Keep the BrandIcon if it's a valid local component

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border-t border-[var(--color-accent-primary)]/10">
      <div className="container-page py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex flex-col mb-6 group">
              <span
                className="tracking-tight text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent-primary)]"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "1.1"
                }}
              >
                Hare Krishna
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  letterSpacing: "3px",
                  color: "var(--color-accent-primary)",
                  fontWeight: 600,
                  marginTop: "4px",
                  lineHeight: "1"
                }}
              >
                MOVEMENT
              </span>
            </Link>
            <p className="text-[15px] leading-[1.6] max-w-[300px] mb-8">
              A sanctuary for the soul. Dedicated to spreading spiritual wisdom, peace, and devotion through the teachings of the Bhagavad Gita.
            </p>
            <div className="flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.shortName} on ${s.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-text-muted)]/20 text-[var(--color-text-muted)] transition-all duration-300 hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/10 hover:text-[var(--color-accent-primary)]"
                >
                  <BrandIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-3 lg:col-start-6">
            <h3 className="text-[16px] font-semibold text-[var(--color-text-primary)] mb-6">Explore</h3>
            <ul className="flex flex-col gap-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] transition-colors hover:text-[var(--color-accent-primary)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-8 lg:col-span-4">
            <h3 className="text-[16px] font-semibold text-[var(--color-text-primary)] mb-6">Contact & Visit</h3>
            <address className="not-italic flex flex-col gap-4 text-[15px]">
              <p>
                Hare Krishna Land, Beach Road,<br />
                Visakhapatnam, Andhra Pradesh 530045
              </p>
              <a href="tel:+919999999999" className="transition-colors hover:text-[var(--color-accent-primary)]">
                +91 99999 99999
              </a>
              <a href="mailto:info@hkmvizag.org" className="transition-colors hover:text-[var(--color-accent-primary)]">
                info@hkmvizag.org
              </a>
            </address>
          </div>

        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-text-muted)]/10">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-[13px]">
          <p>
            © {year} Hare Krishna Movement Visakhapatnam. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-[var(--color-accent-primary)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[var(--color-accent-primary)]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
