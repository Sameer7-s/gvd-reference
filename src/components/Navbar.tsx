"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo, BrandIcon } from "./brand";
import { Button } from "./ui";
import { DarshanStatus } from "./DarshanStatus";
import { NAV, CONTACT, SOCIALS } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every page opens on a dark hero/header, so the bar is light-on-dark at the
  // top and switches to dark-on-cream once scrolled (or when the mobile menu opens).
  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className="hidden border-b border-gold-500/15 bg-maroon-950 text-cream/80 lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${CONTACT.phonePrimaryRaw}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-300"
            >
              <Phone className="h-3.5 w-3.5" /> {CONTACT.phonePrimary}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition-colors hover:text-gold-300"
            >
              {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold-300">Darshan: 4:30 AM – 1 PM · 4:30 – 8:30 PM</span>
            <span className="text-gold-500/40">|</span>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors hover:text-gold-300"
                >
                  <BrandIcon name={s.icon} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-500 ease-soft ${
          solid ? "bg-cream/95 shadow-temple backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav
          className="container-page flex h-[var(--nav-h)] items-center justify-between gap-4"
          aria-label="Primary"
        >
          <Logo mode={solid ? "dark" : "light"} />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    solid
                      ? "text-maroon-900/80 hover:bg-saffron-50 hover:text-saffron-700"
                      : "text-cream/85 hover:bg-cream/15 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <DarshanStatus compact className="hidden 2xl:inline-flex" />
            <Button
              href="/donate"
              variant="primary"
              size="sm"
              className="hidden whitespace-nowrap sm:inline-flex"
            >
              Donate Now
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
                solid
                  ? "border-gold-500/30 bg-ivory/70 text-maroon-900 hover:bg-saffron-50"
                  : "border-cream/30 bg-cream/10 text-cream hover:bg-cream/20"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`fixed inset-0 top-0 -z-10 bg-maroon-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`origin-top border-b border-gold-500/20 bg-cream shadow-temple-lg transition-all duration-300 ease-soft ${
            open ? "max-h-[80vh] opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-maroon-900 transition-colors hover:bg-saffron-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-3 px-1">
              <Button href="/donate" variant="primary" size="md" className="w-full">
                Donate Now
              </Button>
              <a
                href={`tel:${CONTACT.phonePrimaryRaw}`}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-muted"
              >
                <Phone className="h-4 w-4" /> {CONTACT.phonePrimary}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
