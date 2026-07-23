import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Read Srila Prabhupada’s Books – A Guided Sequence",
  description: "Explore the profound wisdom contained within the books of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada and a guided sequence on how to read them.",
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
