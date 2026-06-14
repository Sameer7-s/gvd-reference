import {
  Sparkles,
  UtensilsCrossed,
  Music,
  Heart,
  BookOpen,
  Landmark,
  Soup,
  GraduationCap,
  Flame,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Sparkles,
  UtensilsCrossed,
  Music,
  Heart,
  BookOpen,
  Landmark,
  Soup,
  GraduationCap,
  Flame,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
