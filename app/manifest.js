export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Uchechukwu Ajuzieogu",
    short_name: "Ajuzieogu",
    description:
      "Official portfolio of Uchechukwu Ajuzieogu—technologist, author and AI policy researcher.",
    start_url: "/",
    display: "standalone",
    background_color: "#f1efe8",
    theme_color: "#0b38ff",
    lang: "en-NG",
    categories: ["education", "business", "productivity"],
    icons: [
      {
        src: "/icon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
