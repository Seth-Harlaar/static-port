/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  compiler: {
    styledComponents: true
  },

  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

// module.exports = nextConfig
export default nextConfig;
