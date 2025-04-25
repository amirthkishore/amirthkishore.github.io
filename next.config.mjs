/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/amirthkishore.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/amirthkishore.github.io/' : '',
  trailingSlash: true,
};

export default nextConfig;