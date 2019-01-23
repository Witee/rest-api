'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _configs = require('./configs');

var _configs2 = _interopRequireDefault(_configs);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _logger = require('./middlewares/logger');

var _logger2 = _interopRequireDefault(_logger);

var _auth = require('./middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'development';
var _config$service = _configs2.default.service,
    listen = _config$service.listen,
    port = _config$service.port;


var app = new _koa2.default();

app.use(_auth2.default);

app.use((0, _koaBodyparser2.default)());

if (env === 'development') {
  app.use(_logger2.default);
}

app.use(_routes2.default.routes());

app.listen(port, listen, function (error) {
  if (error) {
    // eslint-disable-next-line
    console.log('app start failed: ' + error);
  }
  // eslint-disable-next-line
  console.log('app started at ' + listen + ':' + port + '...');
});