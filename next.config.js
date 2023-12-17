/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.BUILD_DIR || ".next",
  images: {
    domains: [
      "images2.alphacoders.com",
      "images4.alphacoders.com",
      "images6.alphacoders.com",
      "images7.alphacoders.com",
      "images8.alphacoders.com",
    ],
  },
};

module.exports = nextConfig;
