import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming & Ongoing Projects at Gupt Vrindavan Dham",
  description: "Take a glance at our upcoming grand projects to uplift the social consciousness by exhibiting cultural heritage of India.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
