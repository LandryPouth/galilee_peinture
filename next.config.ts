import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https" as const,
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https" as const,
        hostname: "flagcdn.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
