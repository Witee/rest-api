import _ from 'lodash';


const login = () => async (ctx, next) => {
  if (_.has(ctx.query, 'access_token')) {
    await next();
  } else {
    ctx.body = 'not login';
  }
};

export { login };
