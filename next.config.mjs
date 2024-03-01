/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'rickandmortyapi.com',
        pathname:'/**',
        port:'',
        
      },
    ]
  }
};

export default nextConfig;
