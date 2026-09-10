/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.CLOUDFLARE_PAGES_STATIC === "1" ? "export" : undefined,
  images: { unoptimized: true },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ajuzieogu.com" }],
        destination: "https://ajuzieogu.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
