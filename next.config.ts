import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is the officially supported way in Next.js 15.3.4
  experimental: {
    webpackBuildWorker: true // Forces Webpack instead of Turbopack
  },
  // devIndicators: false
};

export default nextConfig;