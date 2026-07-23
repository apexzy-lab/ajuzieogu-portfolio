import { siteUrl } from "./site-data";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = ["", "/about", "/work", "/research", "/books", "/speaking", "/insights", "/contact"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-07-23"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.7 : 0.8,
  }));
}
