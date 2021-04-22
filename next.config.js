module.exports = {
  distDir: "build",
  env: {},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.watchOptions = {
      poll: 3000,
      aggregateTimeout: 300,
    };
    // Important: return the modified config
    return config;
  },
};
