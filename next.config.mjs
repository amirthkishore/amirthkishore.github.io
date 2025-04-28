/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/amirthkishore.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/amirthkishore.github.io/' : '',
  trailingSlash: true,
  // Basic optimizations
  optimizeFonts: true,
  poweredByHeader: false,
  // CSS configuration
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  }
};

export default nextConfig;