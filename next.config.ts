// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // for static HTML export
  assetPrefix: '/amirthkishore.github.io',
  images: {
    unoptimized: true,
  },
  basePath: '/amirthkishore.github.io',
};

module.exports = nextConfig;
