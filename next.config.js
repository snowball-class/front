/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/apilesson/:path*',
        destination: 'http://snowball-class.shop:30002/:path*',
      },
      {
        source: '/apimember/:path*',
        destination: 'http://snowball-class.shop:30001/:path*',
      },
    ]
  },
}

module.exports = nextConfig
