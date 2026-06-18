import Link from "next/link";
import { Lotus } from "./decor";

/* ---------------------------------------------------------------- Button */

type ButtonVariant = "primary" | "gold" | "outline" | "outline-light" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-[#123A8C] text-white shadow-[0_4px_20px_rgba(18,58,140,0.3)] hover:shadow-[0_8px_25px_rgba(18,58,140,0.4)] hover:bg-[#0f2d70] border border-[#123A8C]/20",
  gold: 
    "bg-[#d4af37] text-[#0f2d70] shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:bg-[#e0bc45] border border-[#d4af37]/50",
  outline:
    "bg-white border-2 border-[#123A8C]/20 text-[#123A8C] shadow-sm hover:border-[#123A8C] hover:bg-[#f4f8fc]",
  "outline-light":
    "bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-[#123A8C] hover:border-white shadow-sm backdrop-blur-md",
  ghost: 
    "bg-transparent text-[#123A8C] hover:bg-[#123A8C]/5",
  light:
    "bg-white text-[#123A8C] shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] border border-gray-100",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-[15px]",
  lg: "px-9 py-4 text-base",
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
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 active:scale-95 cursor-pointer focus-visible:outline-none ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

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
