# rest-api

基于 koa2 的 rest api typescript 模版

### 解决 tsc 转换为 js 后路径问题

直接使用 tsc 转换后, 运行转换后的 js 时会提示 `@/controllers` 之类的路径找不到, 原因是 tsc 没有处理路径问题,
引入 `module-alias` 就是为了解决这个问题.

在 `src/index.ts` 第一行添加 `import 'module-alias/register';`,
在 `package.json` 中添加如下配置:
```json
"_moduleAliases": {
    "@": "dist"
  }
```
注意这里的路径别名写的不是 `src` 因为这里需要写转换后的路径, 也就是 `tsconfig.json` 中 `compilerOptions.outDir` 对应的值.