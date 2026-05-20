import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [
    "@prisma/client",
    "@prisma/adapter-neon",
    "@neondatabase/serverless",
    "@queuely/db",
    "@prisma/client-runtime-utils",
  ],
};

export default nextConfig;
