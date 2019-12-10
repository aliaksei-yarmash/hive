const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');

const app = new Koa();

app.use(mount('/hive', serve('./static')));

app.listen(3000);
