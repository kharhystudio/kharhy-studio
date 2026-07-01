import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { legalPages } from "@/lib/legalPages";
import { siteUrl } from "@/lib/site";
import { tools } from "@/lib/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/guides`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const toolRoutes: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${siteUrl}/${tool.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteUrl}/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legalPages.map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...toolRoutes, ...guideRoutes, ...legalRoutes];
}
