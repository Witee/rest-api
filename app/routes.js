const router = require('koa-router')();
const home = require('./controllers/home');

router.get('/hello', home.index);

module.exports = router;
