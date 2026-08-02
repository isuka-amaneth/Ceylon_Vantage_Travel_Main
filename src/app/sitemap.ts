import type { MetadataRoute } from "next";
import { destinations } from "@/lib/destinations";
import { tours } from "@/lib/tours";
import { experiences } from "@/lib/experiences";

// Set NEXT_PUBLIC_SITE_URL once the site has a real domain (e.g. in
// .env.local and again in your hosting provider's environment variables).
// Falls back to a placeholder so this still builds before that's set.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ceylonvantage.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/destinations`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/tours`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const destinationRoutes: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const tourRoutes: MetadataRoute.Sitemap = tours.map((t) => ({
    url: `${SITE_URL}/tours/${t.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = experiences.map((e) => ({
    url: `${SITE_URL}/experiences/${e.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...destinationRoutes, ...tourRoutes, ...experienceRoutes];
}