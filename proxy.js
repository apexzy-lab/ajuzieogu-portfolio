import { NextResponse } from "next/server";

const canonicalHost = "ajuzieogu.com";

export function proxy(request) {
  const requestHost = request.nextUrl.hostname.toLowerCase();

  if (requestHost === `www.${canonicalHost}`) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.protocol = "https:";
    canonicalUrl.hostname = canonicalHost;
    canonicalUrl.port = "";
    return NextResponse.redirect(canonicalUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
