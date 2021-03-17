module.exports = {
  apps: [
    {
      name: 'rest-api',
      script: 'npx ts-node src/index.ts',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
