import Link from "next/link";
import { SITE } from "@/lib/site";

/* Brand-accurate social glyphs (Simple Icons paths, 24×24). */
const BRAND_PATHS: Record<string, string> = {
  facebook:
    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  youtube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  twitter:
    "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413",
};

export function BrandIcon({ name, className }: { name: string; className?: string }) {
  const d = BRAND_PATHS[name];
  if (!d) return null;
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/** The HKM Vizag mark: a gopuram + lotus emblem rendered in gold. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hkm-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e9d08a" />
          <stop offset="55%" stopColor="#c8a14a" />
          <stop offset="100%" stopColor="#a9853a" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="none" stroke="url(#hkm-gold)" strokeWidth="2" />
      {/* gopuram */}
      <path
        d="M32 10 l3 5 -3 0 -3 0 z M24 44 V30 C24 24 27.6 19 32 19 C36.4 19 40 24 40 30 V44 Z"
        fill="url(#hkm-gold)"
      />
      <path d="M22 44 h20 v3 h-20 z M20 47 h24 v3 h-24 z" fill="url(#hkm-gold)" />
      {/* lotus base */}
      <path
        d="M32 56 c-5 0-9-2-11-5 c4 1 7 0 11-3 c4 3 7 4 11 3 c-2 3-6 5-11 5 z"
        fill="url(#hkm-gold)"
        opacity="0.9"
      />
    </svg>
  );
}

export function Logo({ className, mode = "dark" }: { className?: string; mode?: "dark" | "light" }) {
  const titleColor = mode === "light" ? "text-cream" : "text-maroon-900";
  const subColor = mode === "light" ? "text-gold-300" : "text-saffron-600";
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} — home`}
      className={`group inline-flex items-center gap-2.5 sm:gap-3 ${className ?? ""}`}
    >
      <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-500 ease-soft group-hover:rotate-6 sm:h-11 sm:w-11" />
      <span className="flex flex-col leading-none">
        <span className={`whitespace-nowrap font-display text-[0.95rem] tracking-wide sm:text-lg ${titleColor}`}>
          Hare Krishna Movement
        </span>
        <span
          className={`text-[0.58rem] font-semibold uppercase tracking-[0.2em] sm:text-[0.68rem] sm:tracking-[0.32em] ${subColor}`}
        >
          Visakhapatnam
        </span>
      </span>
    </Link>
  );
}
