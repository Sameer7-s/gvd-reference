import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/visit", priority: 0.9, freq: "monthly" },
    { path: "/donate", priority: 0.9, freq: "weekly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  // Stable lastModified avoids noisy diffs; bump when content changes.
  const lastModified = new Date("2026-06-01");

  return routes.map((r) => ({
    url: `${base}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
