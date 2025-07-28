/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/cornettoclicker',
        destination: '/cornettoclicker/index.html',
      },
      {
        source: '/cornettoclicker/',
        destination: '/cornettoclicker/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
