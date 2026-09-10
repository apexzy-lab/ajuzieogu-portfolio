import { siteUrl } from "./site-data";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly", images: ["/og.png", "/apex-hero-real.jpg"] },
    { path: "/about", priority: 0.9, changeFrequency: "monthly", images: ["/apex-isi-agu.jpg"] },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/research", priority: 0.9, changeFrequency: "monthly" },
    { path: "/books", priority: 0.8, changeFrequency: "monthly", images: ["/ai-modern-education.jpg", "/igbo-business-moguls.jpg", "https://m.media-amazon.com/images/I/7107tYfsW+L._SL1500_.jpg"] },
    { path: "/speaking", priority: 0.8, changeFrequency: "monthly", images: ["/apex-mobile.png"] },
    { path: "/media", priority: 0.9, changeFrequency: "monthly" },
    { path: "/hire", priority: 0.9, changeFrequency: "monthly" },
    { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date("2026-09-10"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: { languages: { "en-NG": `${siteUrl}${route.path}` } },
    ...(route.images && { images: route.images.map((image) => image.startsWith("http") ? image : `${siteUrl}${image}`) }),
  }));
}
