"use client";

import React, { useRef, useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// Seeded deterministic pseudo-random — avoids SSR/CSR hydration mismatch
function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: seededRandom(i * 7 + 1) * 100,
  y: seededRandom(i * 7 + 2) * 100,
  size: 2 + seededRandom(i * 7 + 3) * 4,
  duration: 10 + seededRandom(i * 7 + 4) * 8,
  delay: seededRandom(i * 7 + 5) * 6,
}));


// SVG Mandala corner decoration
function Mandala({ size = 200, opacity = 0.04 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" style={{ opacity }}>
      <circle cx="100" cy="100" r="90" stroke="#7898B0" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="70" stroke="#7898B0" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="50" stroke="#7898B0" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="30" stroke="#7898B0" strokeWidth="0.8" />
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 30 * Math.cos(rad);
        const y1 = 100 + 30 * Math.sin(rad);
        const x2 = 100 + 90 * Math.cos(rad);
        const y2 = 100 + 90 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7898B0" strokeWidth="0.4" />;
      })}
    </svg>
  );
}

// Temple watercolor silhouette via SVG
function TempleSilhouette() {
  return (
    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="templeMist" cx="50%" cy="80%" r="70%">
          <stop offset="0%" stopColor="#C8D8F0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#EBF2FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="300" cy="360" rx="280" ry="60" fill="url(#templeMist)" />
      {/* Main temple tower */}
      <rect x="240" y="150" width="120" height="200" fill="#C8D8F0" opacity="0.4" />
      <polygon points="300,60 220,150 380,150" fill="#B8C8E8" opacity="0.45" />
      <polygon points="300,90 250,140 350,140" fill="#A8B8D8" opacity="0.4" />
      <polygon points="300,110 260,140 340,140" fill="#98A8C8" opacity="0.35" />
      {/* Spires */}
      <rect x="270" y="55" width="10" height="40" fill="#C8D8F0" opacity="0.5" />
      <rect x="310" y="65" width="8" height="30" fill="#C8D8F0" opacity="0.4" />
      {/* Side towers */}
      <rect x="150" y="200" width="70" height="150" fill="#C8D8F0" opacity="0.25" />
      <polygon points="185,140 150,200 220,200" fill="#B8C8E8" opacity="0.28" />
      <rect x="375" y="200" width="70" height="150" fill="#C8D8F0" opacity="0.25" />
      <polygon points="410,140 375,200 445,200" fill="#B8C8E8" opacity="0.28" />
      {/* Domes */}
      <ellipse cx="300" cy="148" rx="45" ry="20" fill="#B8C8E8" opacity="0.3" />
      <ellipse cx="185" cy="198" rx="30" ry="14" fill="#B8C8E8" opacity="0.2" />
      <ellipse cx="410" cy="198" rx="30" ry="14" fill="#B8C8E8" opacity="0.2" />
      {/* Columns */}
      {[260, 280, 300, 320, 340].map((x) => (
        <rect key={x} x={x - 3} y="280" width="6" height="70" fill="#9AABC8" opacity="0.3" />
      ))}
    </svg>
  );
}

export function Donate() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        minHeight: "720px",
        height: "100vh",
        maxHeight: "850px",
        background: "#F4F8FC",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .editorial-quote {
          font-family: var(--font-cormorant);
          font-weight: 500;
          color: #123A8C;
          font-size: 72px;
          line-height: 1.08;
          letter-spacing: -0.02em;
        }
        @media (max-width: 1024px) {
          .editorial-quote { font-size: 56px; }
        }
        @media (max-width: 767px) {
          .editorial-quote { font-size: 38px; }
        }

        .editorial-grid {
          display: grid;
          grid-template-columns: 45% 55%;
          gap: 80px;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 64px;
          width: 100%;
          height: 100%;
        }
        @media (max-width: 1024px) {
          .editorial-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 60px 32px;
          }
        }
      `}} />

      {/* ── BACKGROUND SYSTEM ── */}

      {/* Layer 1 — Luxury parchment */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 60% 40%, #F4F8FC 0%, #E2EBF4 50%, #D4E2F0 100%)" }} />

      {/* Layer 2 — Watercolor cloud wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 65% 60% at 72% 45%, #EAF2FF 0%, #DCE9FF 30%, transparent 70%)",
          opacity: 0.55,
        }}
      />

      {/* Layer 3 — Sky-blue mist */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 55% at 20% 75%, #DCE9FF 0%, #B8D3EB 20%, transparent 65%)",
          opacity: 0.25,
        }}
      />

      {/* Layer 4 — Micro floating particles (client-only to avoid hydration mismatch) */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: "radial-gradient(circle, #90E0EF, transparent)",
                opacity: 0.35,
              }}
              animate={{ y: [0, -28, 0], opacity: [0.2, 0.45, 0.2] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      {/* Layer 5 — Mandala corners */}
      <div className="absolute top-0 left-0 pointer-events-none"><Mandala size={240} opacity={0.045} /></div>
      <div className="absolute bottom-0 right-0 pointer-events-none"><Mandala size={160} opacity={0.035} /></div>

      {/* Layer 6 — Decorative Watermark */}
      <div
        className="absolute top-[10%] right-[0%] pointer-events-none select-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 500,
          fontSize: "clamp(120px, 16vw, 240px)",
          color: "#B8D3EB",
          opacity: 0.03, // 2-4% per PRD
          lineHeight: 0.88,
          textAlign: "right",
          transform: "scale(1.2)",
          filter: "blur(1px)",
        }}
        aria-hidden="true"
      >
        HARE<br />KRISHNA
      </div>

      {/* ── TEMPLE WATERCOLOR SILHOUETTE (bottom-right) ── */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: "clamp(320px, 42%, 560px)",
          height: "clamp(240px, 55%, 420px)",
          opacity: 0.28,
        }}
      >
        <TempleSilhouette />
      </div>

      {/* ── TRUE 2-COLUMN EDITORIAL GRID ── */}
      <div className="editorial-grid relative z-10">
        
        {/* LEFT COLUMN: Feather Decoration */}
        <div className="flex justify-center items-center w-full h-full relative">
          <motion.div
            className="relative flex items-center justify-center"
            style={{
              width: "100%",
              maxWidth: 450,
              minWidth: 380,
              height: "100%",
              maxHeight: 650,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.6, ease: EASE }}
          >
            <motion.div
              style={{ width: "100%", height: "100%", position: "relative" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/peacock-feather.png"
                alt="Sacred Krishna peacock feather"
                fill
                className="object-contain"
                style={{ transform: "rotate(-4deg)" }}
                unoptimized
              />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Content */}
        <div className="flex flex-col items-start text-left w-full">
          
          {/* Main quote */}
          <motion.h2
            className="editorial-quote m-0"
            style={{ maxWidth: 650 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            True peace begins<br className="hidden md:block" />
            when the heart remembers<br className="hidden md:block" />
            its eternal relationship<br className="hidden md:block" />
            with Krishna.
          </motion.h2>

          {/* Blue divider line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            style={{
              width: 80,
              height: 1.5,
              background: "linear-gradient(90deg, #1D5C96, #90E0EF, #1D5C96)",
              marginTop: 40,
              marginBottom: 40,
              transformOrigin: "left",
            }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 20,
              lineHeight: 1.8,
              color: "rgba(40,40,40,0.75)",
              maxWidth: 520,
              margin: 0,
            }}
          >
            Through devotion, kirtan, sacred wisdom, and spiritual community, discover a life filled with purpose, compassion, and inner fulfilment.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-row items-center gap-5 mt-[50px]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          >
            {/* Primary */}
            <Link
              href="/visit"
              className="inline-flex items-center justify-center gap-2 font-semibold tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              style={{
                height: 56,
                padding: "0 36px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #1546A8, #205FD4)",
                boxShadow: "0 20px 40px rgba(21,70,168,0.25)",
                fontSize: 13,
                letterSpacing: "0.15em",
                fontFamily: "'Inter', sans-serif",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Visit Temple
            </Link>

            {/* Secondary */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 font-semibold tracking-widest transition-all duration-300 hover:bg-[rgba(29,92,150,0.08)] hover:-translate-y-1"
              style={{
                height: 56,
                padding: "0 36px",
                borderRadius: 999,
                border: "1px solid #1D5C96",
                color: "#1D5C96",
                fontSize: 13,
                letterSpacing: "0.15em",
                fontFamily: "'Inter', sans-serif",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
