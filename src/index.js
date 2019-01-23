import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import config from './configs';
import router from './routes';
import logger from './middlewares/logger';
import auth from './middlewares/auth';

const env = process.env.NODE_ENV || 'development';
const { listen, port } = config.service;

const app = new Koa();

app.use(auth);

app.use(bodyParser());

if (env === 'development') {
  app.use(logger);
}

app.use(router.routes());

app.listen(port, listen, (error) => {
  if (error) {
    // eslint-disable-next-line
    console.log(`app start failed: ${error}`);
  }
  // eslint-disable-next-line
  console.log(`app started at ${listen}:${port}...`);
});
