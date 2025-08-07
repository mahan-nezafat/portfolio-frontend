import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // output: "standalone",
 images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'portfolio-storage.storage.iran.liara.space',
      pathname: '/**',
    },
  ],
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
