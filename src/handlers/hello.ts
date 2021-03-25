import { Context, Next } from 'koa';

const sayHello = () => async (ctx: Context, next: Next) => {
  ctx.body = 'Hello World!';

  await next();
};

export default { sayHello };
