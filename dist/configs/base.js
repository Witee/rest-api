'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  基础的配置
*/

exports.default = {
  service: {
    port: 9988,
    listen: '0.0.0.0'
  },

  /**
    允许访问 api 的 ip，及 ip 允许访问的方法
     * 号表示允许所有
  */
  allowedRequests: {
    '127.0.0.1': '*'
  },

  dateFormat: 'YYYY-MM-DD',

  dateTimeFormat: 'YYYY-MM-DD HH:mm:ss'
};