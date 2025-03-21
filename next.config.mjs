/** @type {import('next').NextConfig} */
// next.config.js
const basePath = "";
const nextConfig = {
  basePath,
  env: {
    BASE_PATH: basePath,
  },
};
export default nextConfig;
