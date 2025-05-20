/** @type {import('next').NextConfig} */
// next.config.js
const basePath = "";
const nextConfig = {
  basePath,
  env: {
    BASE_PATH: basePath,
  },
    images: {
    domains: ['res.cloudinary.com'],
  },
};
export default nextConfig;
