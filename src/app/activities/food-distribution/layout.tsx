import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Distribution Initiatives by Gupt Vrindavan Dham",
  description: "Learn about our food distribution programs like Nitya Annadana, Krishnamrita, and Khichadi Vitran that provide free food to those in need.",
};

export default function FoodDistributionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
