const { NEXT_OUTPUT } = process.env;
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  ...(NEXT_OUTPUT && {
    output: NEXT_OUTPUT,
  }),
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    unoptimized: NEXT_OUTPUT === "export",
  },
};

module.exports = nextConfig;
