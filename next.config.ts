/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Disable dev indicators
  devIndicators: {
    autoPrerender: false,
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  
  // Remove "Powered by Next.js" header
  poweredByHeader: false,
  
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig