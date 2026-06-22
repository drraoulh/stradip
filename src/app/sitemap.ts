import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { getProducts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getProducts();
  const staticPages = ["", "/a-propos", "/produits", "/services", "/contact", "/mentions-legales"];

  const staticEntries = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productEntries = products.map((p) => ({
    url: `${siteUrl}/produits/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...productEntries];
}
