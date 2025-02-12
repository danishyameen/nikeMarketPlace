import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
  ignoreDuringBuilds: true,
},
env: {
  NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
},
images: {
  domains: ["cdn.sanity.io"], // Allow images from Sanity's CDN
},


};

export default nextConfig;
