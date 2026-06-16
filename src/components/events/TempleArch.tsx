"use client";

import { useId } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PeacockFeather } from "@/components/decor";
import { TempleBell } from "./TempleBell";
import { TemplePillars } from "./TemplePillars";
import { DiyaLamp } from "./DiyaLamp";

/** Traditional multi-lobed temple arch silhouette (1100 × 620 viewBox). */
export const ARCH_PATH =
  "M 48 620 V 310 C 48 210, 105 165, 175 155 C 215 148, 248 118, 285 132 C 318 115, 352 128, 385 108 C 418 92, 448 72, 485 52 C 510 36, 532 18, 550 8 C 568 18, 590 36, 615 52 C 652 72, 682 92, 715 108 C 748 128, 782 115, 815 132 C 852 118, 885 148, 925 155 C 995 165, 1052 210, 1052 310 V 620 Z";

function SmokePlume({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} aria-hidden="true">
      <path
        d="M30 80 C28 60, 34 48, 28 36 C32 28, 26 18, 30 8 C34 18, 28 28, 32 36 C26 48, 32 60, 30 80"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="2"
      />
    </svg>
  );
}

function FloatingParticles() {
  const reduced = useReducedMotion();
  const particles = [
    { x: "18%", y: "35%", delay: 0 },
    { x: "72%", y: "42%", delay: 1.2 },
    { x: "45%", y: "55%", delay: 0.6 },
    { x: "28%", y: "48%", delay: 2 },
    { x: "62%", y: "38%", delay: 1.8 },
    { x: "38%", y: "62%", delay: 0.9 },
    { x: "82%", y: "52%", delay: 2.4 },
    { x: "52%", y: "44%", delay: 1.5 },
  ];

  if (reduced) return null;

  return (
    <div className="sg-particles" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="sg-particle"
          style={{ left: p.x, top: p.y }}
          animate={{ y: [0, -12, 0], opacity: [0.15, 0.28, 0.15] }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export function TempleArch() {
  const clipId = useId().replace(/:/g, "");

  return (
    <>
      <svg width="0" height="0" className="sg-arch-defs" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <path d={ARCH_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div className="sg-arch-shell">
        <div className="sg-arch-glow" aria-hidden="true" />
        <div className="sg-arch-frame">
          <svg viewBox="0 0 1100 620" className="sg-arch-border-svg" aria-hidden="true">
            <defs>
              <linearGradient id="sg-arch-border" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E8C76A" />
                <stop offset="50%" stopColor="#D6A957" />
                <stop offset="100%" stopColor="#B8892A" />
              </linearGradient>
            </defs>
            <path
              d={ARCH_PATH}
              fill="none"
              stroke="url(#sg-arch-border)"
              strokeWidth="3"
              style={{ filter: "drop-shadow(0 0 45px rgba(214,169,87,0.35))" }}
            />
          </svg>

          <div className="sg-arch-interior" style={{ clipPath: `url(#${clipId})` }}>
            <div className="sg-interior-bg" />
            <div className="sg-interior-walls" aria-hidden="true" />
            <div className="sg-interior-garland sg-interior-garland--left" aria-hidden="true" />
            <div className="sg-interior-garland sg-interior-garland--right" aria-hidden="true" />

            <SmokePlume className="sg-smoke sg-smoke--left" />
            <SmokePlume className="sg-smoke sg-smoke--right" />
            <FloatingParticles />

            <TemplePillars />

            <TempleBell className="sg-bell sg-bell--1" delay={0} />
            <TempleBell className="sg-bell sg-bell--2" delay={1.5} />
            <TempleBell className="sg-bell sg-bell--3" delay={0.8} />
            <TempleBell className="sg-bell sg-bell--4" delay={2.2} />

            <DiyaLamp className="sg-diya sg-diya--left" />
            <DiyaLamp className="sg-diya sg-diya--right" />

            <div className="sg-featured-content">
              <PeacockFeather className="sg-featured-feather text-[#D6A957]" />
              <p className="sg-featured-label">Featured Event</p>
              <h3 className="sg-featured-title">
                Janmashtami
                <br />
                Mahotsava
              </h3>
              <div className="sg-featured-meta">
                <span className="sg-meta-item">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  16 Aug 2025
                </span>
                <span className="sg-meta-separator" aria-hidden="true">
                  |
                </span>
                <span className="sg-meta-item">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Main Temple
                </span>
              </div>
              <p className="sg-featured-description">
                Celebrate the divine birth of Lord Krishna with kirtan, cultural programs, prasadam
                and devotional joy.
              </p>
              <Link href="/visit" className="sg-featured-cta">
                Reserve Your Place
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
