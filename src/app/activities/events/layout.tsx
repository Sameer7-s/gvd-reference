import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events at Gupt Vrindavan Dham | Join Our Spiritual Programs",
  description: "The Gupt Vrindavan Dham organises a variety of events throughout the year, aiming to saturate participants in spiritual culture.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
