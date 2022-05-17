/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com']
  },
  env: {
    MONGO: process.env.MONGO
  }
}

module.exports = nextConfig
