import { Context, Next } from 'koa';

export const index = () => async (ctx: Context, next: Next) => {
  ctx.body = '<h1>Index</h1>';
  await next();
};

export const hello = () => async (ctx: Context, next: Next) => {
  ctx.body = `<h1>Hello ${ctx.params.name}</h1>`;
  await next();
};
