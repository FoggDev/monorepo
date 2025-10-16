/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  transpilePackages: ["@monorepo/ui", "@monorepo/utils"]
};

module.exports = nextConfig;
