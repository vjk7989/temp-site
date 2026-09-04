import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
