const _ = require('lodash');

const login = () => async (ctx, next) => {
  if (_.has(ctx.query, 'access_token')) {
    await next();
  } else {
    ctx.body = 'not login';
  }
};

module.exports = {
  login,
};
