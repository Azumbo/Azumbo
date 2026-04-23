/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/italysunhomes/privacy',
        destination: '/italysunhomes/privacy.html',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
