import type { MetadataRoute } from "next";
import { plants } from "@/data/plants";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/plants`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  return [
    ...pages,
    ...plants.map((plant) => ({
      url: `${siteUrl}/plants/${plant.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
