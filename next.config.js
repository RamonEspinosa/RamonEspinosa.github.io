/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
