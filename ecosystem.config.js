module.exports = {
  apps: [
    {
      name: 'rest-api',
      script: './dev-entry.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
