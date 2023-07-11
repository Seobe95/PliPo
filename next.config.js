const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "bcrypt",
      "mongodb",
      "mongoose",
      "jsonwebtoken",
    ],
  },
  env: {
    LOCAL_API_URL: process.env.LOCAL_API_URL,
    DEPLOY_API_URL: process.env.DEPLOY_API_URL,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = withVanillaExtract(nextConfig);
