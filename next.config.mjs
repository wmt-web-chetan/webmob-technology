/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.webmob.webmobtech.biz",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "webmobtechcdn.nyc3.cdn.digitaloceanspaces.com",
        pathname: "/wmt_v4/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "webmobtechcdn.nyc3.digitaloceanspaces.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hcti.io",
        pathname: "/v1/image/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",  // Allow all image paths from Unsplash
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
