/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configures Next.js for static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
};

export default nextConfig;
