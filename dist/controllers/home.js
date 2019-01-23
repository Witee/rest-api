'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hello = exports.index = undefined;

var _checker = require('./checker');

var _checker2 = _interopRequireDefault(_checker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = [_checker2.default.home.index()];

var hello = [_checker2.default.user.login(), _checker2.default.home.hello()];

exports.index = index;
exports.hello = hello;