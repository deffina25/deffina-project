import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'deffina.online',
        pathname: '/deffina-admin/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'deffina-backend-ntgg.onrender.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
