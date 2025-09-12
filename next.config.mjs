// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.webmob.webmobtech.biz",
        pathname: "/wp-content/uploads/**", // WordPress uploads
      },
      {
        protocol: "https",
        hostname: "webmobtechcdn.nyc3.cdn.digitaloceanspaces.com",
        pathname: "/wmt_v4/**", // CDN assets
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/avatar/**", // Gravatar avatars
      },
      {
        protocol: "https", 
        hostname: "webmobtechcdn.nyc3.digitaloceanspaces.com",
        pathname: "/**", // All files from this CDN
      },
      {
        protocol: "https",
        hostname: "hcti.io",
        pathname: "/v1/image/**", // HCTI image service
      },
    ],
  },
  trailingSlash:true
};

export default nextConfig;