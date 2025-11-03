import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
  
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig