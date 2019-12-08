const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World, from Node.js!';
});

app.listen(3000);
