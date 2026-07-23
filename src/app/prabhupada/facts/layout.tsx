import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Srila Prabhupada: Key Facts & Achievements",
  description: "Learn about the key facts, achievements, and legacy of Srila Prabhupada.",
};

export default function FactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
