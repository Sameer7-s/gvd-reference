import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Srila Prabhupada's Journey: Major Life Milestones",
  description: "A chronological timeline of the major milestones in the life of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.",
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
