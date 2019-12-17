const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'This should be available only after auth.';
});

app.listen(3000);
