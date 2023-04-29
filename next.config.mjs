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

export default nextConfig;
