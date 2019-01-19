const logger = async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const ms = new Date().getTime() - start;
  // eslint-disable-next-line
  console.log(`${ctx.request.method} ${ctx.request.url} ${ms}ms...`);
};

module.exports = logger;
