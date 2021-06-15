module.exports = {
  distDir: "build",
  env: {
    CONTACT_SENDER_EMAIL = process.env.CONTACT_SENDER_EMAIL,
    CONTACT_SENDER_PASSWORD = process.env.CONTACT_SENDER_PASSWORD,
    CONTACT_EMAIL = process.env.CONTACT_EMAIL,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY,
  },
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
