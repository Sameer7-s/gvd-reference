/**
 * Original sacred-geometry SVG art. Pure server components (no JS shipped).
 * Everything uses currentColor so motifs inherit their surrounding text color.
 */

type SvgProps = React.SVGProps<SVGSVGElement>;

/** Concentric mandala — used as a meditative background ornament. */
export function Mandala({ className, petals = 24, ...props }: SvgProps & { petals?: number }) {
  const ring = (count: number, r: number, len: number, w: number, opacity: number) =>
    Array.from({ length: count }).map((_, i) => {
      const angle = (360 / count) * i;
      return (
        <path
          key={`${r}-${i}`}
          d={`M0 ${-r} C ${w} ${-r - len * 0.5}, ${w} ${-r - len}, 0 ${-r - len} C ${-w} ${-r - len}, ${-w} ${-r - len * 0.5}, 0 ${-r}`}
          transform={`rotate(${angle})`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity={opacity}
        />
      );
    });

  return (
    <svg viewBox="-200 -200 400 400" className={className} aria-hidden="true" {...props}>
      <g>
        <circle r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle r="34" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        {ring(petals / 3, 36, 26, 9, 0.85)}
        {ring(petals / 2, 74, 34, 11, 0.7)}
        {ring(petals, 120, 44, 12, 0.55)}
        {ring(petals, 168, 28, 8, 0.4)}
        <circle r="188" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      </g>
    </svg>
  );
}

/** Stylised lotus bloom. */
export function Lotus({ className, ...props }: SvgProps) {
  const petal = "M0 0 C -14 -34, -8 -70, 0 -96 C 8 -70, 14 -34, 0 0 Z";
  return (
    <svg viewBox="-110 -110 220 130" className={className} aria-hidden="true" {...props}>
      <g fill="currentColor">
        {[-60, -30, 0, 30, 60].map((a) => (
          <path key={a} d={petal} transform={`rotate(${a})`} opacity="0.45" />
        ))}
        {[-45, -15, 15, 45].map((a) => (
          <path key={`b${a}`} d={petal} transform={`rotate(${a}) scale(0.78)`} opacity="0.8" />
        ))}
        <path d={petal} transform="scale(0.55)" />
      </g>
    </svg>
  );
}

/** Temple gateway (torana) arch — frames hero imagery and CTAs. */
export function ToranaArch({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden="true" {...props}>
      <path
        d="M14 256 V96 C14 44 54 8 100 8 C146 8 186 44 186 96 V256"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M30 256 V100 C30 58 62 26 100 26 C138 26 170 58 170 100 V256"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.6"
      />
      {/* finial */}
      <path d="M100 8 L100 -8 M92 -2 L108 -2" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="100" cy="-12" r="4" fill="currentColor" />
      {/* keystone lotus */}
      <path d="M100 40 l8 12 -8 8 -8 -8 z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

/** Om — the primordial sound. */
export function Om({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...props}>
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fontSize="78"
        fontFamily="var(--font-deva), serif"
        fill="currentColor"
      >
        ॐ
      </text>
    </svg>
  );
}

/** Peacock feather — Krishna's emblem. */
export function PeacockFeather({ className, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 80 220" className={className} aria-hidden="true" {...props}>
      <path d="M40 220 C 40 150 40 120 40 86" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="40" cy="58" rx="30" ry="46" fill="currentColor" opacity="0.18" />
      <ellipse cx="40" cy="58" rx="20" ry="32" fill="currentColor" opacity="0.3" />
      <ellipse cx="40" cy="62" rx="11" ry="17" fill="currentColor" opacity="0.65" />
      <ellipse cx="40" cy="64" rx="5" ry="8" fill="currentColor" />
      {Array.from({ length: 13 }).map((_, i) => {
        const a = -36 + i * 6;
        return (
          <line
            key={i}
            x1="40"
            y1="12"
            x2={40 + 34 * Math.sin((a * Math.PI) / 180)}
            y2={12 - 30 * Math.cos((a * Math.PI) / 180) + 30}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.45"
          />
        );
      })}
    </svg>
  );
}

/** Horizontal lotus divider for between sections. */
export function LotusDivider({ className }: { className?: string }) {
  return (
    <div className={`rule-ornament ${className ?? ""}`} aria-hidden="true">
      <Lotus className="h-5 w-5 rotate-180 text-gold-500" />
    </div>
  );
}

/** Soft layered "divine glow" radial used behind deities and CTAs. */
export function DivineGlow({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--color-gold-300),transparent_60%)] opacity-60 blur-2xl animate-pulse-glow" />
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,var(--color-saffron-300),transparent_65%)] opacity-50 blur-xl" />
    </div>
  );
}
