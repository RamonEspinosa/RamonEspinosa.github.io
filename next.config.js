/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")(["three"]);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
