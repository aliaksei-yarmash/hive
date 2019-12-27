const Koa = require('koa');
const mount = require('koa-mount');

const frontpage = require('./modules/frontpage')

const app = new Koa();
app.use(mount('/', frontpage));

module.exports = app.listen();
