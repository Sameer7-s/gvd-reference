import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4 Vaishnava Sampradayas – Origins, Acharyas & Teachings",
  description: "Learn about the 4 authorized Vaishnava Sampradayas, the Guru Shishya Parampara, and the Gaudiya Vaishnava lineage.",
};

export default function SampradayaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
