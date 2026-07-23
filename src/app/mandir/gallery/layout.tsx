import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gupt Vrindavan Dham Gallery: A Visual Journey of Devotion",
  description: "The temple gallery housed a stunning collection of clicked images, each a visual tribute to its divine aura.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
