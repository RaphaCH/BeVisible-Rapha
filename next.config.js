/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com']
  },
  env: {
    MONGO: "mongodb+srv://RaphaelCH:577uLumAb9wynY7@cluster0.zjqfk.mongodb.net/BeVisible?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
