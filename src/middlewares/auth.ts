import { Context, Next } from 'koa';
import _ from 'lodash';
import config from '../config';

const { allowedRequests } = config;

/**
  通过 IP 判断访问 API 的权限
*/
const auth = async (ctx: Context, next: Next) => {
  const { ip } = ctx;
  if (_.has(allowedRequests, ip)) {
    // const allowedMethod = _.get(allowedRequests, ip, null);
    /**
     * 号表示允许 ip 访问所有接口
     */
    // if (allowedMethod === '*') { await next(); }

    await next();
  } else {
    ctx.throw(403, 'Request Forbidden111');
  }
};

export default auth;
