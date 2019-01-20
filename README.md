# rest-api
基于 koa2 的 rest api 模版


> node >= 8

- 项目入口

  ```
    index.js
  ```

- 项目主体目录

  ```
    ./app/
  ```

  - `configs` 配置文件

  - `controllers` 路由控制器
    - `checker` 检查函数，尽可能小，方便复用、测试

    > `controllers` 中的函数写法是列表形式，
    > 在 `routes.js` 中使用  `compose` 函数组合成一个大的中间件，如下:

    ```
    const checker = require('./checker');

    const index = [
      checker.user.login(),
      checker.home.hello(),
    ];

    module.exports = { index };
    ```

    > index 为列表，其中每一个元素都是检查项
    > 在 `routers.js` 中使用方法如下:
    ```
      router.get('/hello', compose(controllers.home.index));
    ```

  - `libs` 公共库

  - `middlewares` 公共中间件

  - `routes.js` 路由入口，方便配置

- 启动方法

  ```
    node index.js
  ```
