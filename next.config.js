/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cv-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/cv-website' : '',
};

module.exports = nextConfig; 