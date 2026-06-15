"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { LogoMark } from "@/components/brand";
import { usePathname } from "next/navigation";
import { EASE_LUXURY, MOTION } from "@/lib/motion";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sevas", href: "/#sevas" },
  { label: "Festivals", href: "/festivals" },
  { label: "Visit", href: "/visit" },
  { label: "Donate", href: "/donate" },
];

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  const reduced = useReducedMotion();

  return (
    <Link
      href={href}
      className={`relative block px-4 py-2 rounded-full text-[15px] font-medium font-sans border transition-[transform,background-color,border-color] duration-200 ${
        isActive
          ? "bg-[#D4AF37]/10 border-[#D4AF37]/20 text-[#D4AF37]"
          : "text-[#232323]/85 border-transparent hover:bg-white/10"
      }`}
      style={{ willChange: "transform" }}
    >
      <motion.span
        className="block"
        whileHover={reduced ? undefined : { y: -2 }}
        transition={{ duration: MOTION.navHover.duration }}
      >
        {label}
      </motion.span>
      {isActive && (
        <motion.span
          className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#D4AF37]/70 origin-left"
          initial={reduced ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: MOTION.navUnderline.duration, ease: EASE_LUXURY }}
          aria-hidden
          style={{ willChange: "transform" }}
        />
      )}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`ultra-navbar${scrolled ? " is-scrolled" : ""}`}>
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-4 relative z-10 group">
          <div className="w-[48px] h-[48px] bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105">
            <LogoMark className="w-[30px] h-[30px] text-[#D4AF37]" />
          </div>
          <div className="flex flex-col">
            <span
              className="tracking-tight text-[#111111] transition-colors"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Hare Krishna
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4AF37",
                fontWeight: 600,
                marginTop: "2px",
                lineHeight: "1",
              }}
            >
              MOVEMENT
            </span>
          </div>
        </Link>

        {/* Center: Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 relative z-10">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} isActive={!!isActive} />
              </li>
            );
          })}
        </ul>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center gap-4 relative z-10">
          <Link
            href="/events"
            className="h-[48px] px-6 rounded-2xl bg-white/10 border border-white/20 text-[#111111] text-[15px] font-medium flex items-center justify-center transition-all duration-200 hover:bg-white/15 hover:-translate-y-[2px]"
          >
            Explore Festivals
          </Link>
          <Link
            href="/visit"
            className="h-[48px] px-7 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#E8C55A] text-white text-[15px] font-semibold flex items-center justify-center shadow-[0_8px_20px_rgba(212,175,55,0.2)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_12px_25px_rgba(212,175,55,0.3)] border-none"
          >
            Visit Temple
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-12 w-12 place-items-center rounded-full lg:hidden transition-colors relative z-10 bg-white/20 backdrop-blur-md border border-white/25 text-[#111111]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed top-[120px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] z-[9999] rounded-[32px] p-6 lg:hidden animate-fade-in-up"
          style={{
            background: "rgba(255, 255, 255, 0.18)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            boxShadow: "0 24px 80px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.45)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <ul className="flex flex-col gap-2 mb-8">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-5 py-3 rounded-[999px] transition-colors ${
                      isActive ? "" : "hover:bg-[rgba(255,255,255,0.18)]"
                    }`}
                    style={
                      isActive
                        ? {
                            fontSize: "17px",
                            fontFamily: "var(--font-inter)",
                            fontWeight: 600,
                            color: "#D4AF37",
                            background: "rgba(212, 175, 55, 0.15)",
                            border: "1px solid rgba(212, 175, 55, 0.25)",
                            boxShadow: "0 0 30px rgba(212, 175, 55, 0.12)",
                          }
                        : {
                            fontSize: "17px",
                            fontFamily: "var(--font-inter)",
                            fontWeight: 500,
                            color: "rgba(35, 35, 35, 0.85)",
                            border: "1px solid transparent",
                          }
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-4">
            <Link
              href="/events"
              onClick={() => setOpen(false)}
              className="ultra-btn-secondary w-full"
            >
              Explore Festivals
            </Link>
            <Link
              href="/visit"
              onClick={() => setOpen(false)}
              className="ultra-btn-primary w-full"
            >
              Visit Temple
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
