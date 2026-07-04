import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { legalPages } from "@/lib/legalPages";
import { siteUrl } from "@/lib/site";
import { tools } from "@/lib/tools";

function absoluteUrl(path: string) {
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/tools", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/guides", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  // Only canonical tool URLs are listed. Alias and /tools/... duplicate routes
  // resolve to canonical metadata and are intentionally excluded.
  const toolRoutes: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: absoluteUrl(`/${tool.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Only canonical guide URLs are listed. Alias and /guides/... duplicate routes
  // resolve to canonical metadata and are intentionally excluded.
  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: absoluteUrl(`/${guide.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legalPages.map((page) => ({
    url: absoluteUrl(`/${page.slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...toolRoutes,
    ...guideRoutes,
    ...legalRoutes,
  ];
}
