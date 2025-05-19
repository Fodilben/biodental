/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable image optimization since we'll use Netlify for image optimization
  images: {
    unoptimized: true,
  },
  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
