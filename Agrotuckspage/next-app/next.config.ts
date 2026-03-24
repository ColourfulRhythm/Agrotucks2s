import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use next-app as workspace root (fixes lockfile warning in monorepos)
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
