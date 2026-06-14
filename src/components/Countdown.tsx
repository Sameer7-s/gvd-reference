"use client";

import { useEffect, useState } from "react";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(target: number): Parts {
  const total = Math.max(0, target - Date.now());
  return {
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total / 3_600_000) % 24),
    minutes: Math.floor((total / 60_000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="font-display text-2xl tabular-nums text-cream sm:text-4xl">
      {String(value).padStart(2, "0")}
    </span>
    <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold-300">
      {label}
    </span>
  </div>
);

export function Countdown({ iso, className = "" }: { iso: string; className?: string }) {
  const target = new Date(iso).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const p = parts ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className={`flex items-center gap-2 sm:gap-5 ${className}`} aria-label="Countdown to festival">
      <Cell value={p.days} label="Days" />
      <span className="font-display text-2xl text-gold-400/60">:</span>
      <Cell value={p.hours} label="Hrs" />
      <span className="font-display text-2xl text-gold-400/60">:</span>
      <Cell value={p.minutes} label="Min" />
      <span className="font-display text-2xl text-gold-400/60">:</span>
      <Cell value={p.seconds} label="Sec" />
    </div>
  );
}
