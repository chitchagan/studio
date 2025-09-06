import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",              // create static site in /out
  images: { unoptimized: true }, // needed for export when using next/image
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
