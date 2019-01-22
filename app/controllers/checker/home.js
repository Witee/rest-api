

const index = () => async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
  await next();
};

const hello = () => async (ctx, next) => {
  ctx.response.body = `<h1>Hello ${ctx.params.name}</h1>`;
  await next();
};

export { index, hello };
