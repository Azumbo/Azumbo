/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        // Historical PascalCase route (pre Jun 2026) → canonical lowercase
        source: '/CiroMap',
        destination: '/ciromap',
        permanent: true,
      },
      {
        source: '/CiroMap/:path*',
        destination: '/ciromap/:path*',
        permanent: true,
      },
      {
        source: '/italysunhomes/privacy',
        destination: '/italysunhomes/privacy.html',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
