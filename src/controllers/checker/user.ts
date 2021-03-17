import { Context, Next } from 'koa';

import _ from 'lodash';

export const login = () => async (ctx: Context, next: Next) => {
  if (_.has(ctx.query, 'access_token')) {
    await next();
  } else {
    ctx.body = 'not login';
  }
};
