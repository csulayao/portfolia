/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    //appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

//Updating this to a common JS module "export"
//module.exports = nextConfig;
export default nextConfig;
