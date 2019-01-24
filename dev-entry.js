/**
  由于 ./src 中代码使用 ES6 语法，所以使用此文件做为启动入口实时转义。

  使用方法：
    - node
      node dev-entry.js

    - 使用 pm2 [推荐] --watch 参数实现在修改后自动重启
      pm2 start dev-entry.js --watch --name rest-api

  @author Witee<github.com/Witee>
  @date   2019-01-24
*/

require('babel-core/register');
require('./src');
require('babel-polyfill');
