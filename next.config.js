const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["bcrypt", "mongodb", "mongoose"],
  },
  env: {
    LOCAL_API_URL: process.env.LOCAL_API_URL,
    DEPLOY_API_URL: process.env.DEPLOY_API_URL,
  },
};

module.exports = withVanillaExtract(nextConfig);
