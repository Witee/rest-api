import compose from 'koa-compose';
import _ from 'lodash';

interface Controllers {
  [i: string]: any;
}

export default (controllers: Controllers): any => {
  const ctls: Controllers = {};

  _.map(controllers, (val, key) => {
    ctls[key] = compose(val);
  });

  return ctls;
};
