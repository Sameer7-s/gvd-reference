import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Education Programs at Gupt Vrindavan Dham",
  description: "Explore spiritual educational seminars and courses for kids, youth, and families derived from the timeless wisdom of authoritative scriptures.",
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
