"use client";

import { useEffect, useState } from "react";
import { DARSHAN_WINDOWS, SCHEDULE } from "@/lib/site";

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

type State = {
  open: boolean;
  label: string;
  detail: string;
};

/** Computes live darshan status in Asia/Kolkata, independent of the visitor's TZ. */
function computeStatus(): State {
  const now = new Date();
  // Convert "now" to IST minutes-since-midnight regardless of viewer timezone.
  const istParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);
  const h = Number(istParts.find((p) => p.type === "hour")?.value ?? 0);
  const m = Number(istParts.find((p) => p.type === "minute")?.value ?? 0);
  const cur = h * 60 + m;

  for (const w of DARSHAN_WINDOWS) {
    if (cur >= toMin(w.open) && cur < toMin(w.close)) {
      // Find the next aarti within or after now.
      const next = SCHEDULE.find((s) => toMin(s.time) > cur);
      return {
        open: true,
        label: "Darshan Open",
        detail: next ? `Next: ${next.name} · ${next.display}` : w.label,
      };
    }
  }
  // Closed — find the next opening window.
  const upcoming =
    DARSHAN_WINDOWS.find((w) => toMin(w.open) > cur) ?? DARSHAN_WINDOWS[0];
  return {
    open: false,
    label: "Darshan Closed",
    detail: `Opens ${formatTime(upcoming.open)}`,
  };
}

function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const am = h < 12;
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}:${String(m).padStart(2, "0")} ${am ? "AM" : "PM"}`;
}

export function DarshanStatus({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    setState(computeStatus());
    const id = setInterval(() => setState(computeStatus()), 30_000);
    return () => clearInterval(id);
  }, []);

  // Stable placeholder before hydration to avoid layout shift / mismatch.
  const open = state?.open ?? true;
  const label = state?.label ?? "Darshan";
  const detail = state?.detail ?? "4:30 AM – 1:00 PM · 4:30 PM – 8:30 PM";

  return (
    <div
      className={`inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-accent-primary/20 bg-bg-secondary/85 px-4 py-1.5 text-sm shadow-luxury backdrop-blur ${className}`}
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        {open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            open ? "bg-emerald-600" : "bg-amber-500"
          }`}
        />
      </span>
      <span className="font-semibold text-text-primary">{label}</span>
      {!compact && <span className="hidden text-text-muted sm:inline">·</span>}
      {!compact && <span className="hidden text-text-muted sm:inline">{detail}</span>}
    </div>
  );
}
