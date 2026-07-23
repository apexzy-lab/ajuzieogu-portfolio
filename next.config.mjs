/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.CLOUDFLARE_PAGES_STATIC === "1" ? "export" : undefined,
  images: { unoptimized: true },
  poweredByHeader: false
};

export default nextConfig;
