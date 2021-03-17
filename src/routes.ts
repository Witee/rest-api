import Router from 'koa-router';
import compose from 'koa-compose';
import { getModules } from './libs';

const router = new Router();
const controllers = getModules(`${__dirname}/controllers`);

router.get('/', compose(controllers.home.index));

router.get('/hello/:name', compose(controllers.home.hello));

router.get('/login', compose(controllers.user.login));

export default router;
