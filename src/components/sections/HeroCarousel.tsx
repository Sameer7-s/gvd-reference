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

const textWrap = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
  exit:    { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};
const eyebrowV = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.32, ease: EASE } },
};
const headingV = {
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: EASE } },
  exit:    { opacity: 0, y: -18, transition: { duration: 0.38, ease: EASE } },
};
const descV = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay: 0.15 } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.28, ease: EASE } },
};
const btnV = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay: 0.30 } },
  exit:    { opacity: 0, y: -6,  transition: { duration: 0.22, ease: EASE } },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export function HeroCarousel() {
  const [current, setCurrent]   = useState(0);
  const [mounted, setMounted]   = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => { setMounted(true); }, []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % TOTAL), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + TOTAL) % TOTAL), []);
  const goTo = (i: number) => { setCurrent(i); setAutoplay(false); };

  useEffect(() => {
    if (!autoplay || !mounted) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [autoplay, next, mounted]);

  const tx = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { tx.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const dx = tx.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) { dx > 0 ? next() : prev(); }
    setAutoplay(false);
  };

  if (!mounted) {
    return (
      <section
        aria-label="Hero gallery"
        style={{ position: "relative", width: "100%", height: "100svh", minHeight: 560, background: "#030816" }}
      />
    );
  }

  const pos = (i: number) => {
    const d = ((i - current) % TOTAL + TOTAL) % TOTAL;
    if (d === 0)         return "active";
    if (d === 1)         return "next";
    if (d === TOTAL - 1) return "prev";
    return "hidden";
  };

  // Mobile: full-width card, prev/next hidden off-screen
  // Desktop: 68% card with visible peek cards
  const cardW  = isMobile ? "92%" : "68%";
  const cardML = isMobile ? "-46%" : "-34%";
  const cardTop = isMobile ? "5%" : "9%";
  const cardH  = isMobile ? "90%" : "82%";

  const mobileStyleMap: Record<string, React.CSSProperties> = {
    active: { transform: "translateX(0%)", opacity: 1, filter: "brightness(1)", zIndex: 10, boxShadow: "0 40px 100px rgba(0,0,0,0.50)" },
    prev:   { transform: "translateX(-110%)", opacity: 0, filter: "brightness(0.6)", zIndex: 5, boxShadow: "none" },
    next:   { transform: "translateX(110%)", opacity: 0, filter: "brightness(0.6)", zIndex: 5, boxShadow: "none" },
    hidden: { transform: "translateX(0%)", opacity: 0, filter: "brightness(0.4)", zIndex: 0, boxShadow: "none" },
  };
  const desktopStyleMap: Record<string, React.CSSProperties> = {
    active: { transform: "translateX(0%) scale(1) rotateY(0deg)", opacity: 1, filter: "brightness(1)", zIndex: 10, boxShadow: "0 60px 140px rgba(0,0,0,0.45)" },
    prev:   { transform: "translateX(-78%) scale(0.88) rotateY(10deg)", opacity: 0.78, filter: "brightness(0.70)", zIndex: 5, boxShadow: "0 20px 60px rgba(0,0,0,0.30)" },
    next:   { transform: "translateX(78%) scale(0.88) rotateY(-10deg)", opacity: 0.78, filter: "brightness(0.70)", zIndex: 5, boxShadow: "0 20px 60px rgba(0,0,0,0.30)" },
    hidden: { transform: "translateX(0%) scale(0.7)", opacity: 0, filter: "brightness(0.4)", zIndex: 0, boxShadow: "none" },
  };
  const styleMap = isMobile ? mobileStyleMap : desktopStyleMap;

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
        minHeight: isMobile ? 560 : 700,
        overflow: "hidden",
        background: "#030816",
      }}
    >
      {/* Atmosphere background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`atm-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0, zIndex: 0, background: SLIDES[current].atm.bg, pointerEvents: "none" }}
        />
      </AnimatePresence>

      {/* Gallery stage */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          display: "flex", alignItems: "center", justifyContent: "center",
          perspective: isMobile ? undefined : "2500px",
        }}
      >
        {SLIDES.map((slide, i) => {
          const p = pos(i);
          const isActive = p === "active";

          return (
            <div
              key={slide.id}
              onClick={() => { if (!isActive) goTo(i); }}
              style={{
                position: "absolute",
                width: cardW,
                height: cardH,
                top: cardTop,
                left: "50%",
                marginLeft: cardML,
                borderRadius: isMobile ? 16 : 20,
                overflow: "hidden",
                transformStyle: isMobile ? "flat" : "preserve-3d",
                willChange: "transform, opacity, filter",
                cursor: isActive ? "default" : "pointer",
                border: isActive ? "1px solid rgba(255,255,255,0.10)" : "none",
                transition: "transform 1000ms cubic-bezier(0.22,1,0.36,1), opacity 900ms ease, filter 900ms ease, box-shadow 900ms ease",
                ...styleMap[p],
              }}
            >
              {/* Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={i === 0}
                unoptimized
                style={{ objectFit: "cover", objectPosition: slide.focal }}
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
                  background: isActive
                    ? isMobile
                      ? "linear-gradient(to top, rgba(4,10,28,0.96) 0%, rgba(4,10,28,0.72) 38%, rgba(4,10,28,0.22) 70%, rgba(4,10,28,0) 100%)"
                      : "linear-gradient(90deg, rgba(4,10,28,0.82) 0%, rgba(4,10,28,0.55) 30%, rgba(4,10,28,0.15) 62%, rgba(4,10,28,0) 100%)"
                    : "rgba(4,8,22,0.35)",
                  transition: "background 800ms ease",
                }}
              />

              {/* Slide content */}
              {isActive && (
                <div
                  style={{
                    position: "absolute", inset: 0, zIndex: 2,
                    display: "flex",
                    // Mobile: anchor text to bottom over the gradient
                    // Desktop: vertically center, left-aligned
                    alignItems: isMobile ? "flex-end" : "center",
                    paddingLeft:   isMobile ? 22 : "clamp(36px, 6%, 88px)",
                    paddingRight:  isMobile ? 22 : "50%",
                    paddingTop:    isMobile ? 16 : "clamp(80px, 12vh, 130px)",
                    paddingBottom: isMobile ? 72 : "clamp(60px, 8vh, 100px)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`c-${current}`}
                      variants={textWrap}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: isMobile ? "center" : "flex-start",
                        textAlign: isMobile ? "center" : "left",
                        width: "100%",
                        maxWidth: isMobile ? "100%" : 600,
                      }}
                    >
                      {/* Eyebrow */}
                      <motion.div
                        variants={eyebrowV}
                        style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: isMobile ? 10 : 20 }}
                      >
                        <span style={{ display: "block", width: 18, height: 1.5, background: "linear-gradient(90deg, transparent, #90C0EF)" }} />
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: isMobile ? 9.5 : 12,
                          fontWeight: 600,
                          letterSpacing: isMobile ? "0.32em" : "0.45em",
                          color: "#90C0EF",
                          textTransform: "uppercase",
                        }}>
                          {slide.eyebrow}
                        </span>
                        <span style={{ display: "block", width: 18, height: 1.5, background: "linear-gradient(90deg, #90C0EF, transparent)" }} />
                      </motion.div>

                      {/* Heading — h1 for SEO on first slide */}
                      <motion.h1
                        variants={headingV}
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 500,
                          fontSize: isMobile ? "clamp(28px, 7vw, 40px)" : "clamp(44px, 4.8vw, 92px)",
                          lineHeight: isMobile ? 1.12 : 0.93,
                          letterSpacing: isMobile ? "-0.02em" : "-0.04em",
                          color: "#FFFFFF",
                          textShadow: "0 4px 32px rgba(0,0,0,0.55)",
                          margin: 0,
                        }}
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.p
                        variants={descV}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: isMobile ? 12.5 : "clamp(15px, 1.2vw, 20px)",
                          lineHeight: 1.72,
                          color: "rgba(255,255,255,0.80)",
                          marginTop: isMobile ? 10 : 24,
                          fontWeight: 400,
                        }}
                      >
                        {slide.subtitle}
                      </motion.p>

                      {/* CTA buttons */}
                      <motion.div
                        variants={btnV}
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: isMobile ? "center" : "flex-start",
                          gap: isMobile ? 10 : 16,
                          marginTop: isMobile ? 18 : 36,
                          width: "100%",
                        }}
                      >
                        <Link
                          href={slide.primaryCTA.link}
                          style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            height: isMobile ? 44 : 58,
                            padding: isMobile ? "0 20px" : "0 32px",
                            borderRadius: 999,
                            background: "linear-gradient(135deg, #123A8C, #1D5C96)",
                            boxShadow: "0 10px 28px rgba(18,58,140,0.40)",
                            color: "#fff",
                            fontSize: isMobile ? 12.5 : 14,
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                            fontFamily: "'Inter', sans-serif",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {slide.primaryCTA.text}
                        </Link>

                        <Link
                          href={slide.secondaryCTA.link}
                          style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            height: isMobile ? 44 : 58,
                            padding: isMobile ? "0 20px" : "0 32px",
                            borderRadius: 999,
                            background: "rgba(255,255,255,0.10)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            border: "1px solid rgba(255,255,255,0.28)",
                            color: "#fff",
                            fontSize: isMobile ? 12.5 : 14,
                            fontWeight: 500,
                            letterSpacing: "0.04em",
                            fontFamily: "'Inter', sans-serif",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
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

      {/* Navigation arrows */}
      {[
        { dir: "prev", fn: () => { prev(); setAutoplay(false); } },
        { dir: "next", fn: () => { next(); setAutoplay(false); } },
      ].map(({ dir, fn }) => (
        <button
          key={dir}
          onClick={fn}
          aria-label={`${dir === "prev" ? "Previous" : "Next"} slide`}
          style={{
            position: "absolute",
            [dir === "prev" ? "left" : "right"]: isMobile ? 10 : 20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width:  isMobile ? 40 : 68,
            height: isMobile ? 40 : 68,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.22)",
            color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            transition: "all 350ms cubic-bezier(0.22,1,0.36,1)",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "linear-gradient(135deg, #123A8C, #1D5C96)";
            el.style.borderColor = "#123A8C";
            el.style.boxShadow = "0 0 28px rgba(18,58,140,0.45)";
            el.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "rgba(255,255,255,0.12)";
            el.style.borderColor = "rgba(255,255,255,0.22)";
            el.style.boxShadow = "none";
            el.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          {dir === "prev"
            ? <ChevronLeft  size={isMobile ? 16 : 28} strokeWidth={1.5} />
            : <ChevronRight size={isMobile ? 16 : 28} strokeWidth={1.5} />
          }
        </button>
      ))}

      {/* Pagination dots */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? 18 : 28,
          left: 0, right: 0,
          zIndex: 30,
          display: "flex", justifyContent: "center", alignItems: "center", gap: 8,
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              borderRadius: 999, border: "none", cursor: "pointer", padding: 0,
              transition: "all 500ms cubic-bezier(0.22,1,0.36,1)",
              width:  i === current ? (isMobile ? 28 : 48) : (isMobile ? 7 : 9),
              height: isMobile ? 5 : 8,
              background: i === current
                ? "linear-gradient(90deg, #123A8C, #1D5C96)"
                : "rgba(255,255,255,0.35)",
              boxShadow: i === current ? "0 0 12px rgba(18,58,140,0.55)" : "none",
            }}
          />
        ))}
      </div>

      {/* Slide counter — desktop only */}
      {!isMobile && (
        <div
          style={{
            position: "absolute", bottom: 28, right: 28, zIndex: 30,
            display: "flex", alignItems: "center", gap: 6,
            fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)",
          }}
        >
          <span style={{ color: "#1D5C96", fontWeight: 600 }}>{String(current + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(TOTAL).padStart(2, "0")}</span>
        </div>
      )}
    </section>
  );
}
