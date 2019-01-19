const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const config = require('./app/configs');
const router = require('./app/routes');
const logger = require('./app/middlewares/logger');

const env = process.env.NODE_ENV || 'development';

const app = new Koa();

app.use(bodyParser());

if (env === 'development') {
  app.use(logger);
}

app.use(router.routes());

app.listen(config.service.port);

// eslint-disable-next-line
console.log(`app started at port ${config.service.port}...`);
