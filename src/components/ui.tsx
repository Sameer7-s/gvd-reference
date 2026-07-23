import Link from "next/link";
import { Lotus } from "./decor";

/* ---------------------------------------------------------------- Button */

type ButtonVariant = "primary" | "gold" | "outline" | "outline-light" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-accent-secondary to-accent-primary text-white shadow-luxury hover:from-accent-primary hover:to-accent-secondary hover:shadow-luxury-hover",
  gold: "bg-gradient-to-br from-accent-light to-accent-primary text-text-primary shadow-luxury hover:from-accent-light hover:to-accent-secondary",
  outline:
    "border border-accent-primary/40 bg-bg-secondary/60 text-text-primary hover:border-accent-primary hover:bg-bg-tertiary/50",
  "outline-light":
    "border border-accent-light/40 bg-transparent text-bg-primary hover:border-accent-light hover:bg-bg-primary/10",
  ghost: "text-text-primary hover:bg-bg-secondary/50",
  light:
    "bg-bg-primary text-text-primary shadow-luxury hover:bg-bg-secondary border border-accent-primary/30",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  ...rest
}: ButtonProps) {
  const cls = `group/btn inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-wide transition-all duration-300 ease-soft cursor-pointer focus-visible:outline-none ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={cls}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

/* --------------------------------------------------------- Section heading */

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] ${
        light ? "text-accent-light" : "text-accent-primary"
      }`}
    >
      <Lotus className="h-3.5 w-3.5 rotate-180" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`text-3xl leading-[1.08] sm:text-4xl md:text-[2.75rem] ${
          light ? "text-bg-primary" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`text-base leading-relaxed sm:text-lg ${light ? "text-bg-primary/75" : "text-text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------------------------------- Image slot frame
   Elegant placeholder where the temple drops in real photography.
   To use a real photo, replace the inner content with:
     <Image src="/photos/your-photo.jpg" alt="..." fill className="object-cover" />
*/

const TONE_GRAD: Record<string, string> = {
  saffron: "from-accent-light via-accent-primary to-accent-secondary",
  maroon: "from-accent-primary via-accent-secondary to-text-primary",
  gold: "from-accent-light via-accent-primary to-accent-secondary",
  krishna: "from-accent-light via-accent-primary to-text-primary",
  night: "from-accent-secondary via-text-primary to-black",
};

export function AssetFrame({
  label,
  tone = "saffron",
  className = "",
  arched = false,
  children,
}: {
  label?: string;
  tone?: keyof typeof TONE_GRAD;
  className?: string;
  arched?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden bg-gradient-to-br ${TONE_GRAD[tone]} ${
        arched ? "rounded-[50%_50%_12px_12px_/_22%_22%_4px_4px]" : "rounded-3xl"
      } ${className}`}
      data-image-slot={label ?? "photo"}
    >
      {/* mandala texture */}
      <div className="absolute inset-0 bg-dots opacity-25" />
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-black/15 blur-2xl" />
      {children}
      {label && !children && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
          <Lotus className="h-10 w-10 text-white/80" />
          <span className="text-sm font-medium tracking-wide text-white/90">{label}</span>
          <span className="text-[0.65rem] uppercase tracking-[0.22em] text-white/55">
            Photography
          </span>
        </div>
      )}
    </div>
  );
}
