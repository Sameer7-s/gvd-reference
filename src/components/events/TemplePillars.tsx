"use client";

import { useId } from "react";

function Pillar({ className, flip }: { className?: string; flip?: boolean }) {
  const gradId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 80 200"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A8C4D8" />
          <stop offset="50%" stopColor="#D4E5F2" />
          <stop offset="100%" stopColor="#8CA8BF" />
        </linearGradient>
      </defs>
      <rect x="18" y="24" width="44" height="12" rx="2" fill={`url(#${gradId})`} />
      <rect x="14" y="36" width="52" height="10" rx="1" fill={`url(#${gradId})`} opacity="0.9" />
      <rect x="20" y="46" width="40" height="130" fill={`url(#${gradId})`} />
      <rect x="16" y="176" width="48" height="14" rx="2" fill={`url(#${gradId})`} />
      <rect x="10" y="190" width="60" height="10" rx="1" fill={`url(#${gradId})`} opacity="0.85" />
      {[58, 72, 86, 100, 114, 128, 142, 156].map((y) => (
        <g key={y}>
          <ellipse cx="40" cy={y} rx="18" ry="5" fill="none" stroke="#7898B0" strokeWidth="0.75" opacity="0.55" />
          <path
            d={`M28 ${y} Q40 ${y - 4} 52 ${y}`}
            fill="none"
            stroke="#5F7E96"
            strokeWidth="0.5"
            opacity="0.45"
          />
        </g>
      ))}
    </svg>
  );
}

export function TemplePillars() {
  return (
    <>
      <Pillar className="sg-pillar sg-pillar--left" />
      <Pillar className="sg-pillar sg-pillar--right" flip />
    </>
  );
}
