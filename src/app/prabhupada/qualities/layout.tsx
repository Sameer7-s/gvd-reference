import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualities of Srila Prabhupada | 26 Qualities of Pure Devotee",
  description: "Srila Prabhupada perfectly displayed the twenty-six qualities of a pure devotee of Lord Krsna.",
};

export default function QualitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
