import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Srila Prabhupada Quotes | Words of Wisdom",
  description: "Explore the profound quotes and teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.",
};

export default function QuotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
