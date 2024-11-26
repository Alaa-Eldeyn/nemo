import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "luhpnvlqsoaiaknelyih.supabase.co",
      },
    ],
  },
};

export default nextConfig;
