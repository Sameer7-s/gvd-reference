import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "God Wallpapers HD, Bhakti Wallpapers - Free 4K Download",
  description: "Download free HD and 4K divine wallpapers of Radha Krishna, Lord Jagannath, Deities, and Acharyas.",
};

export default function WallpapersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
