import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cow Protection Initiatives at Gupt Vrindavan Dham",
  description: "Learn about the cow protection efforts by the Hare Krishna Movement Jaipur at the Hingonia Rehabilitation Centre.",
};

export default function CowProtectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
