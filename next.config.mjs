/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'swiperjs.com',
            port: '',
            pathname: '/demos/images/**',
          },
        ],
      },

      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            pathname: '/**',

          },
        ],
      },

      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.freepik.com',
            port: '',
            pathname: '/free-photo/**',

          },
        ],
      },
    };




export default nextConfig;
