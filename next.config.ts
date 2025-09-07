import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Prevent workspace root inference warning in CI with multiple lockfiles
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
