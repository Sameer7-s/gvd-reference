"use client";

import type { ReactNode } from "react";

type IconName =
  | "aarti"
  | "kirtan"
  | "gita"
  | "festival"
  | "community"
  | "retreat";

function CategoryIcon({ name }: { name: IconName }) {
  const icons: Record<IconName, ReactNode> = {
    aarti: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 8 C22 18, 20 24, 24 32 C28 24, 26 18, 24 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="24" cy="36" rx="14" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 36 C12 32, 18 30, 24 30 C30 30, 36 32, 36 36" fill="none" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
    kirtan: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <ellipse cx="24" cy="28" rx="16" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 28 C8 18, 14 12, 24 12 C34 12, 40 18, 40 28" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="28" x2="44" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="12" x2="4" y2="8" stroke="currentColor" strokeWidth="1.5" />
        <line x1="24" y1="12" x2="24" y2="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    gita: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 10 H30 C36 10, 38 14, 38 20 V38 C38 42, 34 44, 30 44 H10 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 10 V44" stroke="currentColor" strokeWidth="1.25" />
        <path d="M24 18 H32 M24 26 H32 M24 34 H30" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
    festival: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6 L28 18 L40 18 L30 26 L34 38 L24 30 L14 38 L18 26 L8 18 L20 18 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 30 V44 M16 44 H32" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    community: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="36" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <path d="M14 44 C14 34, 18 28, 24 28 C30 28, 34 34, 34 44" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 44 C4 36, 8 30, 12 30" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <path d="M44 44 C44 36, 40 30, 36 30" fill="none" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
    retreat: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 8 C20 20, 18 28, 24 36 C30 28, 28 20, 24 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 36 C18 28, 21 22, 24 20 C27 22, 30 28, 32 36" fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.7" />
        <path d="M24 36 L24 42" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="24" cy="42" rx="8" ry="2" fill="none" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
  };

  return <span className="sg-card-icon">{icons[name]}</span>;
}

const categories: { title: string; icon: IconName }[] = [
  { title: "Morning Aarti", icon: "aarti" },
  { title: "Kirtan Evenings", icon: "kirtan" },
  { title: "Bhagavad Gita Sessions", icon: "gita" },
  { title: "Festivals & Celebrations", icon: "festival" },
  { title: "Community Gatherings", icon: "community" },
  { title: "Retreat Programs", icon: "retreat" },
];

type EventCategoryCardProps = {
  title: string;
  icon: IconName;
};

export function EventCategoryCard({ title, icon }: EventCategoryCardProps) {
  return (
    <article className="sg-category-card">
      <CategoryIcon name={icon} />
      <h3 className="sg-card-title">{title}</h3>
      <div className="sg-card-divider" aria-hidden="true" />
    </article>
  );
}

export function EventCategoryCards() {
  return (
    <div className="sg-cards-row">
      {categories.map((cat) => (
        <EventCategoryCard key={cat.title} title={cat.title} icon={cat.icon} />
      ))}
    </div>
  );
}
