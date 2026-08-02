import type { NextConfig } from "next";

// Security headers applied to every response. Keeps the site hardened
// against common client-side attacks (clickjacking, MIME sniffing,
// referrer leakage) without touching how any page is built.
//
// One nuance: Next.js's DEV-mode tooling (Fast Refresh / error overlay)
// needs eval() to work in the browser, but the production build never
// uses eval() at all. So 'unsafe-eval' is only added to the script-src
// rule when running `next dev` -- the deployed/production CSP stays
// fully locked down.
const isDev = process.env.NODE_ENV !== "production";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "frame-ancestors 'self'",
      "img-src 'self' data: https:",
      "font-src 'self' https://fonts.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.jscache.com`,
      "connect-src 'self' https://www.jscache.com",
      "frame-src 'self' https://www.google.com",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;