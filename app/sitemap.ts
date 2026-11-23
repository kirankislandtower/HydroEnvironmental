import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { productPages, solutionPages } from "@/lib/pages";

// Bump when page content changes — a fixed date (not new Date()) so Google trusts lastmod.
const updated = new Date("2026-11-23");

// Add inner pages here as they are built.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    ...["/solutions", ...solutionPages.map((p) => `/solutions/${p.slug}`), "/products", ...productPages.map((p) => `/products/${p.slug}`), "/projects", "/about", "/resources", "/contact", "/privacy"].map((p) => ({
      url: `${siteUrl}${p}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.8,
    })),
  ];
}
