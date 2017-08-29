# express-auto-path-router

[English Readme](https://github.com/longze/express-auto-path-router/blob/master/README.md)

Express 自动路由中间件，解决的主要问题就是省略路由配置文件，路由和功能的对应采用一种逻辑关系，规则如下：

GET `/a` -> `/GET/a/index.js`

POST `/a` -> `/POST/a/index.js`

传统的路由都需要一个路由配置文件，每次添加新接口需要先修改配置文件，再添加文件，`express-auto-path-router` 自动路由中间件就是要省略配置路由这一步。自动路由的业务场景定位为前端项目脚手架(如 React 和 Vue 项目)的 Mock 或自己的小项目，使开发流程简化从而提升开发速度。

## 安装

```bash
$ npm install express-auto-path-router
```

## API

```js
const Express = require('express');
const app = Express();
app.use(require('express-auto-path-router')(root));
```

`root` 自动路由的根路径，必填参数。

## 示例

```js
const expressAutoPathRouter = require('express-auto-path-router');
const Express = require('express');
const app = new Express();

app.use(expressAutoPathRouter('./mock/'));
```

你可以像这样来写 index.js:

```js
module.exports = function (req, res, next) {
  return {
      status: 0,
      statusInfo: 'AAA',
      data: {

      }
  };
};
```

## Demo

    cd demo
    npm install
    cd ..
    npm run demo

## 测试

    npm run test

## License

MIT
