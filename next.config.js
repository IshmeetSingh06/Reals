/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pinimg.com", "lh3.googleusercontent.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig
