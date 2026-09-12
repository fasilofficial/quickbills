/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: "/invoice-generator",
        destination: "/invoice",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
