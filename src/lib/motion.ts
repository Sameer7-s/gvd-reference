/** Shared motion tokens — GPU-friendly, luxury easing */
export const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

export const MOTION = {
  heroReveal: { duration: 1.4, ease: EASE_LUXURY },
  headline: { duration: 0.8, ease: EASE_LUXURY },
  section: { duration: 0.7, ease: EASE_LUXURY },
  buttonHover: { duration: 0.25 },
  buttonTap: { duration: 0.15 },
  navHover: { duration: 0.2 },
  navUnderline: { duration: 0.25, ease: EASE_LUXURY },
} as const;
