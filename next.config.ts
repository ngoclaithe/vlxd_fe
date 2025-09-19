import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scgvlxd.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vlxdgiatot.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
