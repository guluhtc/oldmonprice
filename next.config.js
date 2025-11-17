/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out for dev server - uncomment for static export builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;