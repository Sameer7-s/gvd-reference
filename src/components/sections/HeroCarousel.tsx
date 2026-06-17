"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Slide data ─────────────────────────────────────────────────── */
const SLIDES = [
  {
    id: "darshan",
    image: "/images/darshan-new.jpg",
    focal: "70% center",
    eyebrow: "DIVINE DARSHAN",
    title: "Experience the Eternal Beauty of Radha Krishna",
    subtitle: "Immerse yourself in devotion, kirtan, wisdom and the divine presence of Sri Sri Radha Krishna.",
    primaryCTA: { text: "Visit Temple", link: "/visit" },
    secondaryCTA: { text: "Explore Sevas", link: "/#sevas" },
    atm: { bg: "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(10,28,80,0.95) 0%, rgba(3,8,22,1) 100%)" },
  },
  {
    id: "architecture",
    image: "/images/temple_architecture_4k.png",
    focal: "center center",
    eyebrow: "SACRED ARCHITECTURE",
    title: "Discover the Majesty of Timeless Temples",
    subtitle: "Witness exquisite temple craftsmanship inspired by centuries of Vaishnava devotion.",
    primaryCTA: { text: "Plan Visit", link: "/visit" },
    secondaryCTA: { text: "View Gallery", link: "/#gallery" },
    atm: { bg: "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(55,30,8,0.95) 0%, rgba(12,6,2,1) 100%)" },
  },
  {
    id: "kirtan",
    image: "/images/kirtan_gathering_4k.png",
    focal: "center center",
    eyebrow: "HOLY KIRTAN",
    title: "Experience the Joy of Collective Devotion",
    subtitle: "Join uplifting kirtans that awaken the heart through the power of sacred sound.",
    primaryCTA: { text: "Join Kirtan", link: "/#programs" },
    secondaryCTA: { text: "Learn More", link: "/about" },
    atm: { bg: "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(30,10,72,0.95) 0%, rgba(6,2,18,1) 100%)" },
  },
  {
    id: "festival",
    image: "/images/festival_celebration_4k.png",
    focal: "center center",
    eyebrow: "FESTIVAL CELEBRATION",
    title: "Celebrate the Divine Through Sacred Festivals",
    subtitle: "Experience vibrant festivals filled with devotion, culture and pure spiritual joy.",
    primaryCTA: { text: "View Festivals", link: "/festivals" },
    secondaryCTA: { text: "Upcoming Events", link: "/#events" },
    atm: { bg: "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(80,25,5,0.95) 0%, rgba(18,5,0,1) 100%)" },
  },
  {
    id: "wisdom",
    image: "/images/spiritual_wisdom_4k.png",
    focal: "center center",
    eyebrow: "ETERNAL WISDOM",
    title: "Transform Life Through Bhagavad Gita",
    subtitle: "Explore timeless teachings of Srila Prabhupada that guide the journey toward inner peace.",
    primaryCTA: { text: "Read Wisdom", link: "/about" },
    secondaryCTA: { text: "Explore Classes", link: "/#programs" },
    atm: { bg: "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(5,50,30,0.95) 0%, rgba(1,10,6,1) 100%)" },
  },
];

const TOTAL = SLIDES.length;
const EASE  = [0.22, 1, 0.36, 1] as const;

/* ─── Text animation variants (only used for active slide) ─────── */
const textWrap = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14 } },
  exit:    { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
};
const eyebrowV = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  exit:    { opacity: 0, y: -14, transition: { duration: 0.38, ease: EASE } },
};
const headingV = {
  hidden:  { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
  exit:    { opacity: 0, y: -22, transition: { duration: 0.42, ease: EASE } },
};
const descV = {
  hidden:  { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: EASE, delay: 0.18 } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.32, ease: EASE } },
};
const btnV = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE, delay: 0.38 } },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.28, ease: EASE } },
};

/* ─── Component ─────────────────────────────────────────────────── */
export function HeroCarousel() {
  const [current, setCurrent]     = useState(0);
  const [mounted, setMounted]     = useState(false);
  const [autoplay, setAutoplay]   = useState(true);

  // ── Mount guard (prevents hydration mismatch) ──────────────────
  useEffect(() => { setMounted(true); }, []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % TOTAL), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + TOTAL) % TOTAL), []);
  const goTo = (i: number) => { setCurrent(i); setAutoplay(false); };

  // ── Autoplay ───────────────────────────────────────────────────
  useEffect(() => {
    if (!autoplay || !mounted) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [autoplay, next, mounted]);

  // ── Touch swipe ────────────────────────────────────────────────
  const tx = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { tx.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const dx = tx.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 50) { dx > 0 ? next() : prev(); }
    setAutoplay(false);
  };

  // ── SSR shell ──────────────────────────────────────────────────
  if (!mounted) {
    return (
      <section
        aria-label="Hero gallery"
        style={{ position: "relative", width: "100%", height: "100svh", minHeight: 700, background: "#030816" }}
      />
    );
  }

  // ── position helper (relative to current) ─────────────────────
  const pos = (i: number) => {
    const d = ((i - current) % TOTAL + TOTAL) % TOTAL;
    if (d === 0)         return "active";
    if (d === 1)         return "next";
    if (d === TOTAL - 1) return "prev";
    return "hidden";
  };

  return (
    <section
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Hero gallery"
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: 700,
        overflow: "hidden",
        background: "#030816",
      }}
    >

      {/* ── Adaptive atmosphere background ─────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`atm-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: "absolute", inset: 0, zIndex: 0,
            background: SLIDES[current].atm.bg,
            pointerEvents: "none",
          }}
        />
      </AnimatePresence>

      {/* ── 3D Gallery Stage ────────────────────────────────────── */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          display: "flex", alignItems: "center", justifyContent: "center",
          perspective: "2500px",
        }}
      >
        {SLIDES.map((slide, i) => {
          const p       = pos(i);
          const isActive = p === "active";

          /* Per-position style */
          const styleMap: Record<string, React.CSSProperties> = {
            active: {
              transform: "translateX(0%) scale(1) rotateY(0deg)",
              opacity: 1,
              filter: "brightness(1)",
              zIndex: 10,
              boxShadow: "0 60px 140px rgba(0,0,0,0.45)",
            },
            prev: {
              transform: "translateX(-78%) scale(0.88) rotateY(10deg)",
              opacity: 0.78,
              filter: "brightness(0.70)",
              zIndex: 5,
              boxShadow: "0 20px 60px rgba(0,0,0,0.30)",
            },
            next: {
              transform: "translateX(78%) scale(0.88) rotateY(-10deg)",
              opacity: 0.78,
              filter: "brightness(0.70)",
              zIndex: 5,
              boxShadow: "0 20px 60px rgba(0,0,0,0.30)",
            },
            hidden: {
              transform: "translateX(0%) scale(0.7)",
              opacity: 0,
              filter: "brightness(0.4)",
              zIndex: 0,
              boxShadow: "none",
            },
          };

          return (
            <div
              key={slide.id}
              onClick={() => { if (!isActive) goTo(i); }}
              style={{
                position: "absolute",
                /* Fixed card dimensions — centered via left + marginLeft */
                width: "68%",
                height: "82%",
                top: "9%",
                left: "50%",
                marginLeft: "-34%",
                borderRadius: 20,
                overflow: "hidden",
                transformStyle: "preserve-3d",
                willChange: "transform, opacity, filter",
                cursor: isActive ? "default" : "pointer",
                border: isActive ? "1px solid rgba(255,255,255,0.10)" : "none",
                transition: "transform 1200ms cubic-bezier(0.22,1,0.36,1), opacity 1000ms cubic-bezier(0.22,1,0.36,1), filter 1000ms ease, box-shadow 1000ms ease",
                ...styleMap[p],
              }}
            >
              {/* ── Slide image ──────────────────────────────── */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={i === 0}
                unoptimized
                style={{ objectFit: "cover", objectPosition: slide.focal }}
              />

              {/* ── Gradient overlay (active only is deeper) ─── */}
              <div
                style={{
                  position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
                  background: isActive
                    ? "linear-gradient(90deg, rgba(4,10,28,0.82) 0%, rgba(4,10,28,0.55) 30%, rgba(4,10,28,0.15) 62%, rgba(4,10,28,0) 100%)"
                    : "rgba(4,8,22,0.35)",
                  transition: "background 800ms ease",
                }}
              />

              {/* ── Content — ONLY rendered & visible when active ── */}
              {isActive && (
                <div
                  style={{
                    position: "absolute", inset: 0, zIndex: 2,
                    display: "flex", alignItems: "center",
                    paddingLeft: "clamp(36px, 6%, 88px)",
                    paddingRight: "50%",
                    paddingTop: "clamp(80px, 12vh, 130px)",
                    paddingBottom: "clamp(60px, 8vh, 100px)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`c-${current}`}
                      variants={textWrap}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", maxWidth: 600 }}
                    >
                      {/* Eyebrow */}
                      <motion.div
                        variants={eyebrowV}
                        style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
                      >
                        <span style={{ display: "block", width: 26, height: 1.5, background: "linear-gradient(90deg, transparent, #D4AF37)" }}/>
                        <span style={{
                          fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600,
                          letterSpacing: "0.45em", color: "#D4AF37", textTransform: "uppercase",
                        }}>
                          {slide.eyebrow}
                        </span>
                        <span style={{ display: "block", width: 26, height: 1.5, background: "linear-gradient(90deg, #D4AF37, transparent)" }}/>
                      </motion.div>

                      {/* Heading */}
                      <motion.h2
                        variants={headingV}
                        style={{
                          fontFamily: "'Cormorant Garamond', serif", fontWeight: 500,
                          fontSize: "clamp(44px, 4.8vw, 92px)",
                          lineHeight: 0.93, letterSpacing: "-0.04em",
                          color: "#FFFFFF", maxWidth: 620,
                          textShadow: "0 4px 40px rgba(0,0,0,0.5)",
                          margin: 0,
                        }}
                      >
                        {slide.title}
                      </motion.h2>

                      {/* Subtitle */}
                      <motion.p
                        variants={descV}
                        style={{
                          fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.2vw, 20px)",
                          lineHeight: 1.72, color: "rgba(255,255,255,0.88)",
                          maxWidth: 520, marginTop: 24, fontWeight: 400,
                        }}
                      >
                        {slide.subtitle}
                      </motion.p>

                      {/* Buttons */}
                      <motion.div
                        variants={btnV}
                        style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 36 }}
                      >
                        <Link
                          href={slide.primaryCTA.link}
                          style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            height: 58, padding: "0 32px", borderRadius: 999,
                            background: "linear-gradient(135deg, #CFA63A, #F2D46E)",
                            boxShadow: "0 14px 36px rgba(207,166,58,0.35)",
                            color: "#fff", fontSize: 14, fontWeight: 600,
                            letterSpacing: "0.05em", fontFamily: "'Inter', sans-serif",
                            textDecoration: "none",
                            transition: "transform 350ms cubic-bezier(0.22,1,0.36,1), box-shadow 350ms ease",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px) scale(1.03)";
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 22px 48px rgba(207,166,58,0.45)";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.transform = "";
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 36px rgba(207,166,58,0.35)";
                          }}
                        >
                          {slide.primaryCTA.text}
                        </Link>

                        <Link
                          href={slide.secondaryCTA.link}
                          style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            height: 58, padding: "0 32px", borderRadius: 999,
                            background: "rgba(255,255,255,0.08)",
                            backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
                            border: "1px solid rgba(255,255,255,0.26)",
                            color: "#fff", fontSize: 14, fontWeight: 500,
                            letterSpacing: "0.05em", fontFamily: "'Inter', sans-serif",
                            textDecoration: "none",
                            transition: "all 350ms cubic-bezier(0.22,1,0.36,1)",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.96)";
                            (e.currentTarget as HTMLAnchorElement).style.color = "#050F28";
                            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                            (e.currentTarget as HTMLAnchorElement).style.transform = "";
                          }}
                        >
                          {slide.secondaryCTA.text}
                        </Link>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Navigation arrows ───────────────────────────────────── */}
      {[{ dir: "prev", side: "left", fn: () => { prev(); setAutoplay(false); } },
        { dir: "next", side: "right", fn: () => { next(); setAutoplay(false); } }].map(({ dir, side, fn }) => (
        <button
          key={dir}
          onClick={fn}
          aria-label={`${dir === "prev" ? "Previous" : "Next"} slide`}
          style={{
            position: "absolute",
            [side]: 20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width: 68, height: 68,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.20)",
            color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            transition: "all 400ms cubic-bezier(0.22,1,0.36,1)",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "linear-gradient(135deg, #CFA63A, #F2D46E)";
            el.style.borderColor = "#CFA63A";
            el.style.boxShadow = "0 0 36px rgba(207,166,58,0.45)";
            el.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "rgba(255,255,255,0.12)";
            el.style.borderColor = "rgba(255,255,255,0.20)";
            el.style.boxShadow = "none";
            el.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          {dir === "prev"
            ? <ChevronLeft  size={28} strokeWidth={1.5} />
            : <ChevronRight size={28} strokeWidth={1.5} />
          }
        </button>
      ))}

      {/* ── Luxury capsule pagination ────────────────────────────── */}
      <div
        style={{
          position: "absolute", bottom: 28, left: 0, right: 0, zIndex: 30,
          display: "flex", justifyContent: "center", alignItems: "center", gap: 10,
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 550ms cubic-bezier(0.22,1,0.36,1)",
              width:  i === current ? 48 : 9,
              height: 8,
              background: i === current
                ? "linear-gradient(90deg, #CFA63A, #F2D46E)"
                : "rgba(255,255,255,0.38)",
              boxShadow: i === current ? "0 0 16px rgba(207,166,58,0.55)" : "none",
            }}
          />
        ))}
      </div>

      {/* ── Slide counter ────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute", bottom: 28, right: 28, zIndex: 30,
          display: "flex", alignItems: "center", gap: 6,
          fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)",
        }}
      >
        <span style={{ color: "#CFA63A", fontWeight: 600 }}>{String(current + 1).padStart(2, "0")}</span>
        <span>/</span>
        <span>{String(TOTAL).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
