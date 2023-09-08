const nextConfig = {
  compiler:{
    styledComponents: true,
  },
  images:{
    remotePatterns: [
      {
        protocol:"https",
        hostname: "images.punkapi.com",
        port: "",
        pathname:"/v2/**",
      },
    ],
  },
};

module.exports =nextConfig;