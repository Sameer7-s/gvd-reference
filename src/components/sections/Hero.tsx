"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mandala, Om } from "@/components/decor";
import { HeroPrimaryButton, HeroSecondaryButton } from "@/components/motion/HeroButtons";
import { useMouseParallax, parallaxOffset } from "@/hooks/useMouseParallax";
import { EASE_LUXURY, MOTION } from "@/lib/motion";

const HEADLINE_LINES = [
  <>Experience the</>,
  <>
    Beauty of{" "}
    <span className="text-[var(--color-accent-primary)] italic font-normal">Krishna</span>
  </>,
  <>Consciousness</>,
];

function HeadlineLine({
  children,
  index,
  reduced,
}: {
  children: React.ReactNode;
  index: number;
  reduced: boolean | null;
}) {
  return (
    <motion.span
      className="block"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: MOTION.headline.duration,
        ease: EASE_LUXURY,
        delay: reduced ? 0 : 0.35 + index * 0.1,
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMouseParallax(sectionRef);
  const reduced = useReducedMotion();

  const bgParallax = parallaxOffset(mouse, 2);
  const decorParallax = parallaxOffset(mouse, 5);
  const imageParallax = parallaxOffset(mouse, 8);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100vh] overflow-hidden flex items-center bg-[var(--color-bg-primary)]"
    >
      {/* Layer 1 — ambient background glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden
        animate={
          reduced
            ? undefined
            : {
                x: bgParallax.x,
                y: bgParallax.y,
              }
        }
        transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.6 }}
        style={{ willChange: "transform" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 72% 50%, rgba(255,235,180,0.12), transparent 68%)",
          }}
        />
      </motion.div>

      {/* Layer 2 — decorative ornaments (depth only, nearly invisible) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden
        animate={
          reduced
            ? undefined
            : {
                x: decorParallax.x,
                y: decorParallax.y,
              }
        }
        transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.6 }}
        style={{ willChange: "transform" }}
      >
        <Mandala
          className="absolute -right-[8%] top-[18%] h-[420px] w-[420px] text-[var(--color-accent-primary)] opacity-[0.04]"
          petals={16}
        />
        <Om className="absolute right-[12%] bottom-[22%] h-16 w-16 text-[var(--color-accent-primary)] opacity-[0.05]" />
        <Mandala
          className="absolute -left-[6%] bottom-[10%] h-[280px] w-[280px] text-[var(--color-accent-primary)] opacity-[0.03]"
          petals={12}
        />
      </motion.div>

      {/* Layer 3 — deity image with reveal, float & parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={
          reduced
            ? undefined
            : {
                x: imageParallax.x,
                y: imageParallax.y,
              }
        }
        transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.6 }}
        style={{ willChange: "transform" }}
      >
        {/* Soft edge glow behind deity */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 68% 48%, rgba(255,235,180,0.15), transparent 70%)",
          }}
        />

        <motion.div
          className="absolute inset-0 z-[1]"
          initial={reduced ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={MOTION.heroReveal}
          style={{ willChange: "opacity, transform" }}
        >
          <Image
            src="/photos/krishna.png"
            alt="Sri Sri Radha Krishna — Hare Krishna Movement Visakhapatnam"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
            style={{ objectPosition: "center center" }}
          />
        </motion.div>
      </motion.div>

      {/* Subtle scrim on the left to ensure text readability over the image's cream area */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,252,247,0.55) 0%, rgba(255,252,247,0.3) 35%, transparent 60%)",
        }}
      />

      {/* Layer 4 — hero content (no parallax) */}
      <div
        className="relative z-[2] w-full min-h-[100vh] flex items-center"
        style={{ paddingLeft: "8vw", paddingRight: "4vw" }}
      >
        <div className="max-w-[600px] flex flex-col items-start text-left pt-[120px] pb-[80px]">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-primary)]/25 bg-white/60 backdrop-blur-sm mb-8"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_LUXURY, delay: reduced ? 0 : 0.15 }}
            style={{ willChange: "opacity, transform" }}
          >
            <span style={{ fontSize: "14px" }}>✨</span>
            <span
              className="text-[11px] md:text-[13px] font-semibold tracking-[0.2em] uppercase text-[var(--color-accent-primary)]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Experience Divine Consciousness
            </span>
          </motion.div>

          {/* Main Heading — staggered editorial reveal */}
          <h1
            className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] xl:text-[76px] leading-[1.08] font-bold text-[var(--color-text-primary)] mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <HeadlineLine index={0} reduced={reduced}>
              {HEADLINE_LINES[0]}
              <br className="hidden sm:block" />
            </HeadlineLine>
            <HeadlineLine index={1} reduced={reduced}>
              {HEADLINE_LINES[1]}
            </HeadlineLine>
            <HeadlineLine index={2} reduced={reduced}>
              {HEADLINE_LINES[2]}
            </HeadlineLine>
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-[15px] md:text-[17px] lg:text-[19px] leading-[1.7] text-[var(--color-text-secondary)] mb-12 max-w-[520px]"
            style={{ fontFamily: "var(--font-inter)", willChange: "opacity, transform" }}
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_LUXURY, delay: reduced ? 0 : 0.65 }}
          >
            Discover spiritual wisdom, daily worship, devotional practices,
            community programs, and timeless teachings that inspire peace,
            purpose, and inner transformation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_LUXURY, delay: reduced ? 0 : 0.75 }}
            style={{ willChange: "opacity, transform" }}
          >
            <HeroPrimaryButton href="/temple">Explore Temple</HeroPrimaryButton>
            <HeroSecondaryButton href="/darshan">Watch Darshan</HeroSecondaryButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
