import type { MetadataRoute } from "next";
import { navItems } from "@/lib/content/navigation";

const SITE_URL = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: `${SITE_URL}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
