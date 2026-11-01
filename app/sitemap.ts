import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

const pages = ["", "/owners", "/tenants-buyers", "/pricing", "/nexus", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
