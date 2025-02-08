import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
  ignoreDuringBuilds: true,
},
env: {
  NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
},

};

export default nextConfig;
