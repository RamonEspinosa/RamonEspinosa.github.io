// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")(["three"]);
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
