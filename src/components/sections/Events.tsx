import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function Events() {
  const events = [
    { title: "Upcoming Festivals", date: "Multiple Dates", desc: "Join our grand festival celebrations." },
    { title: "Special Celebrations", date: "Every Sunday", desc: "Weekly gathering with kirtan and feast." },
    { title: "Community Gatherings", date: "Monthly", desc: "Connect with like-minded spiritual seekers." },
  ];

  return (
    <section className="w-full section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-page">
        <Reveal className="text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] leading-[1.2] mb-4">
            Upcoming Events
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev, idx) => (
            <Reveal key={idx} delay={idx * 90}>
            <div 
              className="bg-white p-8 rounded-[var(--radius-card)] shadow-luxury transition-transform duration-300 hover:-translate-y-2 h-full"
            >
              <div className="inline-block px-3 py-1 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] rounded-full text-[12px] font-semibold uppercase tracking-wider mb-4">
                {ev.date}
              </div>
              <h3 className="text-[24px] mb-3">{ev.title}</h3>
              <p className="text-[16px] text-[var(--color-text-muted)] mb-6">
                {ev.desc}
              </p>
              <Link href="/events" className="font-medium text-[var(--color-text-primary)] border-b border-[var(--color-text-primary)]/30 pb-1 hover:border-[var(--color-text-primary)] transition-colors">
                Learn More
              </Link>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
