# rest-api

基于 koa2 的 rest api typescript 模版

> node >= 10  
>
> ts >= 4

- 项目入口

  ```
    src/index.ts
  ```

- 项目主体目录

  ```
    ./src
  ```

  - `config.ts` 配置文件

  - `controllers` 路由控制器

    - `checker` 检查函数，尽可能小，方便复用、测试

    > `controllers` 中的函数写法是列表形式，
    > 在 `routes.ts` 中使用 `compose` 函数组合成一个大的中间件，如下:

    ```
    const checker = require('./checker');

    export const index = [
      checker.user.login(),
      checker.home.hello(),
    ];
```
    
    > index 为列表，其中每一个元素都是检查项
> 在 `routers.ts` 中使用方法如下:
    
    ```
  router.get('/hello', compose(controllers.home.index));
    ```
    
  - `libs` 公共库

  - `middlewares` 公共中间件

  - `routes.js` 路由入口，方便配置

- 启动方法

  ```shell
    pm2 start pm2.config.js
    // 或
    npx ts-node src/index.ts
  ```
