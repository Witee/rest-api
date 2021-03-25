import { Context, Next } from 'koa';

export const isAdmin = async (ctx: Context, next: Next) => {
  await next();
};
