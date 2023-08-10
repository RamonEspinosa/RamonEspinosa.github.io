/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["three"],
};

module.exports = nextConfig;
