/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  swcMinify: true,

}
module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  }
})

module.exports = nextConfig
