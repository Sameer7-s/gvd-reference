"use client";

import { Mandala } from "@/components/decor";

function TempleTowerLeft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 420" className={className} aria-hidden="true" fill="currentColor">
      <path d="M90 0 L110 40 L130 35 L115 80 L140 75 L120 130 L150 125 L90 280 L30 125 L60 130 L40 75 L65 80 L50 35 L70 40 Z" opacity="0.9" />
      <rect x="72" y="280" width="36" height="140" rx="2" />
      <path d="M60 420 H120 V320 H60 Z" />
      <path d="M45 320 H135 V300 H45 Z" />
    </svg>
  );
}

function TempleComplexRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 380" className={className} aria-hidden="true" fill="currentColor">
      <path d="M40 120 L55 80 L70 120 L85 70 L100 120 L115 60 L130 120 L145 90 L160 120 V380 H40 Z" />
      <path d="M170 140 L185 100 L200 140 L215 110 V380 H170 Z" opacity="0.85" />
      <rect x="55" y="300" width="90" height="80" />
      <rect x="175" y="310" width="35" height="70" />
    </svg>
  );
}

export function TempleBackground() {
  return (
    <div className="sg-background" aria-hidden="true">
      <Mandala className="sg-mandala sg-mandala--left text-[#D8B26A]" petals={24} />
      <Mandala className="sg-mandala sg-mandala--right text-[#D8B26A]" petals={24} />
      <TempleTowerLeft className="sg-temple-silhouette sg-temple-silhouette--left" />
      <TempleComplexRight className="sg-temple-silhouette sg-temple-silhouette--right" />
    </div>
  );
}
