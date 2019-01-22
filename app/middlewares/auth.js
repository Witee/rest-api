import _ from 'lodash';
import configs from '../configs';

const { allowedRequests } = configs;

/**
  通过 IP 判断访问 API 的权限
*/
const auth = async (ctx, next) => {
  const { ip } = ctx.request;
  if (_.has(allowedRequests, ip)) {
    // const allowedMethod = _.get(allowedRequests, ip, null);
    /**
      * 号表示允许 ip 访问所有接口
    */
    // if (allowedMethod === '*') { await next(); }

    await next();
  } else {
    ctx.throw(403, 'Request Forbidden');
  }
};

export default auth;
