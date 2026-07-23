import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Services & Enriching Programs | Gupt Vrindavan Dham",
  description: "Gupt Vrindavan Dham offers you spiritual guidance, prasadam booking, and kirtan instrument classes like mridanga and kartal.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
