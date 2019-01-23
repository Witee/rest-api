'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _configs = require('../configs');

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var allowedRequests = _configs2.default.allowedRequests;

/**
  通过 IP 判断访问 API 的权限
*/

var auth = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
    var ip;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ip = ctx.request.ip;

            if (!_lodash2.default.has(allowedRequests, ip)) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return next();

          case 4:
            _context.next = 7;
            break;

          case 6:
            ctx.throw(403, 'Request Forbidden');

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function auth(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = auth;