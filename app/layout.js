import "./globals.css";
import { Footer, Header, JsonLd } from "./components";
import { personSchema, siteUrl } from "./site-data";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Uchechukwu Ajuzieogu — Technologist, Author & AI Policy Researcher",
    template: "%s | Uchechukwu Ajuzieogu",
  },
  description:
    "The official portfolio of Uchechukwu “Apex” Ajuzieogu—technologist, author, AI economics and policy researcher, educator and entrepreneur.",
  applicationName: "Uchechukwu Ajuzieogu",
  authors: [{ name: "Uchechukwu Ajuzieogu", url: siteUrl }],
  creator: "Uchechukwu Ajuzieogu",
  keywords: [
    "Uchechukwu Ajuzieogu",
    "Apex Ajuzieogu",
    "African AI policy",
    "AI economics researcher",
    "technology policy Africa",
    "artificial intelligence education",
    "African technology leader",
  ],
  icons: { icon: "/icon.jpg", apple: "/icon.jpg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b38ff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <div id="main">{children}</div>
        <Footer />
        <JsonLd data={personSchema} />
      </body>
    </html>
  );
}
