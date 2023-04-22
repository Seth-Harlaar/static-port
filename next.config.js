/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  compiler: {
    styledComponents: true
  },

  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
