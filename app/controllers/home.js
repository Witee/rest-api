const index = async (ctx, next) => {
  ctx.response.body = '<h1>Hello World</h1>';
  await next();
};

module.exports = { index };