const router = require('koa-router')();
const compose = require('koa-compose');
const { getModules } = require('./libs/utils');
const controllers = getModules(`${__dirname}/controllers`);

router.get('/', compose(controllers.home.index));

router.get('/hello/:name', compose(controllers.home.hello));

router.get('/login', compose(controllers.user.login));

module.exports = router;
