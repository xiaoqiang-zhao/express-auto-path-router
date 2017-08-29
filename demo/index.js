const express = require('express');
const app = express();
const router = require('../index');

app.use(router('./demo/mock/'));
app.listen(5000);

console.log('请测试: localhost:5000/a');