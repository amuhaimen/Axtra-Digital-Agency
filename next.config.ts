import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This tells Next.js to generate static HTML
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
