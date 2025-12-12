import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-blog.brilliahib.tech",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
