/** @type {import('next').NextConfig} */
const nextConfig = {
  
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn-icons-png.freepik.com',
              port: '',
              pathname: '/256/**',
            },
          ],
        },

      
};

export default nextConfig;
