/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_APP_SITE_URL,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_APP_SITE_URL,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_APP_SITE_URL,
        port: '8080',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  env: {
    HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME,
    PORT: process.env.NEXT_PUBLIC_PORT,
    HOST: process.env.NEXT_PUBLIC_HOST,
    APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    APP_SITE_URL: process.env.NEXT_PUBLIC_APP_SITE_URL,
    ANALYZE: process.env.NEXT_PUBLIC_ANALYZE,
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    API_BASE_PATH: process.env.NEXT_PUBLIC_API_BASE_PATH,
    API_UPLOAD_BASE_PATH: process.env.NEXT_PUBLIC_UPLOAD_BASE_PATH,
  },
};

export default nextConfig;
