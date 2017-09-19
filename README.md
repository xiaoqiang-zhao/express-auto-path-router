# express-auto-path-router

[中文文档](https://github.com/longze/express-auto-path-router/blob/master/README-CH.md)

Express auto path middleware, no need to write every router. The rule like this:

GET `/a` -> `/GET/a/index.js`

POST `/a` -> `/POST/a/index.js`

## Installation

```bash
$ npm install express-auto-path-router
```

## API

```js
const Express = require('express');
const app = Express();
app.use(require('express-auto-path-router')(root));
```

* `root` root directory string. nothing above this root directory can be served

## Example

```js
const expressAutoPathRouter = require('express-auto-path-router');
const Express = require('express');
const app = new Express();

app.use(expressAutoPathRouter('./mock/'));
```

You can write the index.js like this:

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

    npm install
    npm run demo

## Test

    npm install
    npm run test

## License

  MIT
