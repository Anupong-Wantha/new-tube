import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "5mjc8h44e6.ufs.sh",
      },
    ],
  },
  env: {
    CLERK_SIGNING_SECRET: process.env.CLERK_SIGNING_SECRET,
  },
};


export default nextConfig;
