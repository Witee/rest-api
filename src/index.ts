import 'module-alias/register';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import config from './config';
import router from './routes';
// import logger from './middlewares/logger';
// import auth from './middlewares/auth';

// const env = process.env.NODE_ENV || 'development';

const app = new Koa();
const { port, listen } = config.server;

// app.use(auth);

app.use(bodyParser());

// if (env === 'development') {
//   app.use(logger);
// }

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, listen);

// eslint-disable-next-line
console.log(`app started at ${listen}:${port}...`);
