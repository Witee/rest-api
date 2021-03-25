import Router from 'koa-router';

import hello from './controllers/hello';

const router = new Router();

router.get('/hello', hello.sayHello);

export default router;
