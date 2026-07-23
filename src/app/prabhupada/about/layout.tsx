import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Srila Prabhupada | The Founder Acharya of ISKCON",
  description: "Learn about His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, the Founder-Acharya of ISKCON and the light of spirituality in Kali Yuga.",
};

export default function AboutPrabhupadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
