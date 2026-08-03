import "./globals.css";
import { Footer, Header, JsonLd } from "./components";
import { ogImage, personSchema, siteDescription, siteName, siteUrl, websiteSchema } from "./site-data";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Uchechukwu Ajuzieogu — Technologist, Author & AI Policy Researcher",
    template: "%s | Uchechukwu Ajuzieogu",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Uchechukwu Ajuzieogu", url: siteUrl }],
  creator: "Uchechukwu Ajuzieogu",
  publisher: "Uchechukwu Ajuzieogu",
  category: "Technology policy, artificial intelligence and research",
  classification: "Professional portfolio and research profile",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Uchechukwu Ajuzieogu",
    "Apex Ajuzieogu",
    "African AI policy",
    "AI economics researcher",
    "technology policy Africa",
    "artificial intelligence education",
    "African technology leader",
  ],
  alternates: {
    canonical: siteUrl,
    languages: { "en-NG": siteUrl },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName,
    title: "Uchechukwu Ajuzieogu | AI Policy Researcher & Author",
    description: siteDescription,
    images: [{ url: ogImage, width: 1730, height: 909, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@apex_zy",
    title: "Uchechukwu Ajuzieogu | AI Policy Researcher & Author",
    description: siteDescription,
    images: [ogImage],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.jpg", apple: "/icon.jpg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b38ff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <div id="main">{children}</div>
        <Footer />
        <JsonLd data={[websiteSchema, personSchema]} />
      </body>
    </html>
  );
}
