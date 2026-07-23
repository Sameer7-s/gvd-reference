"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Reveal } from "@/components/Reveal";

function useIntersectionObserver(ref: React.RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [isIntersecting, setIntersecting] = useState(false);

  // Stabilize the threshold value to avoid re-running the effect on every render
  const threshold = options?.threshold;
  const rootMargin = options?.rootMargin;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
      }
    }, { threshold, rootMargin });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin]);

  return isIntersecting;
}

function Counter({ target, label }: { target: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const options = useMemo(() => ({ threshold: 0.1 }), []);
  const isVisible = useIntersectionObserver(ref, options);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8">
      <div 
        className={`text-[48px] md:text-[64px] font-bold text-[var(--color-accent-primary)] mb-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {isVisible ? target : "0"}
      </div>
      <div className={`text-[16px] uppercase tracking-widest text-[var(--color-text-text-muted)] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {label}
      </div>
    </div>
  );
}


export function Statistics() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Failed to fetch stats", err));
  }, []);

  return (
    <section className="w-full section-padding bg-[var(--color-bg-white)]">
      <Reveal>
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-accent-primary)]/10">
          <Counter target={stats?.donationsCount ? `${stats.donationsCount}+` : "10,000+"} label="Devotees" />
          <Counter target={stats?.sevasCount ? `${stats.sevasCount}` : "15+"} label="Active Sevas" />
          <Counter target="50,000+" label="Visitors" />
          <Counter target={stats?.eventsCount ? `${stats.eventsCount}+` : "500+"} label="Events Conducted" />
        </div>
      </div>
      </Reveal>
    </section>
  );
}
