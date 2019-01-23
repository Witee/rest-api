'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaCompose = require('koa-compose');

var _koaCompose2 = _interopRequireDefault(_koaCompose);

var _utils = require('./libs/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default();
var controllers = (0, _utils.getModules)(__dirname + '/controllers');

router.get('/', (0, _koaCompose2.default)(controllers.home.index));

router.get('/hello/:name', (0, _koaCompose2.default)(controllers.home.hello));

router.get('/login', (0, _koaCompose2.default)(controllers.user.login));

exports.default = router;