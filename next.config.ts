import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    CLERK_SIGNING_SECRET: process.env.CLERK_SIGNING_SECRET,
  }
};

export default nextConfig;
