/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'res.cloudinary.com']
  },
  env: {
    MONGO: process.env.MONGO,
    KEY: process.env.KEY
  }
}

module.exports = nextConfig
