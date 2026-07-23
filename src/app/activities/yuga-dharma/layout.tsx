import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yuga Dharma of This Age | Harinaam Sankirtan",
  description: "Sri Caitanya Mahaprabhu has defined chanting the Hare Krishna Mahamantra as the Yuga Dharma of present time.",
};

export default function YugaDharmaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
