'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModules = exports.es6import = exports.readdir = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  返回目录下所有可导入的模块列表

  dir 要加载的目录
  exts 要加载的模块文件后缀，多个可以是数组, 默认为 js
  excludes 要排除的文件, 默认排除 index
*/
var readdir = function readdir(dir) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js';
  var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'index';

  var exts = _lodash2.default.isString(ext) ? [ext] : ext;
  var excludes = _lodash2.default.isString(exclude) ? [exclude] : exclude;

  return _lodash2.default.chain(_fs2.default.readdirSync(dir)).map(function (x) {
    return x.split('.');
  }).filter(function (x) {
    return _lodash2.default.includes(exts, x[1]) && !_lodash2.default.includes(excludes, x[0]);
  }).map(function (x) {
    return x[0];
  }).value();
};

/**
  兼容 es6 的 export
*/
var es6import = function es6import(obj) {
  var isES6 = _lodash2.default.size(obj) === 1 && hasOwnProperty.call(obj, 'default');
  return isES6 ? obj.default : obj;
};

/**
  根据设置的路径，获取对象
*/
var getModules = function getModules(path, exts, excludes) {
  var modules = {};

  if (!_lodash2.default.isString(path)) return path;
  if (!_fs2.default.existsSync(path)) return modules;

  _lodash2.default.each(readdir(path, exts, excludes), function (file) {
    var name = _lodash2.default.camelCase(file);
    modules[name] = es6import(require(path + '/' + file));
  });

  return modules;
};

exports.readdir = readdir;
exports.es6import = es6import;
exports.getModules = getModules;