/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['specialones.online','play-lh.googleusercontent.com'],
    
  },

}
module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  }
})

module.exports = nextConfig
