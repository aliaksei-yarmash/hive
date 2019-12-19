const Koa = require('koa');
const session = require('koa-session');

const app = new Koa();

app.keys = ['secret-key'];

const sessionStorage = {}
const sessionStorageApi = {
  set: async (key, data) => {
    sessionStorage[key] = data
  },
  get: async (key) => {
    return sessionStorage[key]
  },
  destroy: async (key) => {
    delete sessionStorage[key]
  }
}

app.use(session(app, { store: sessionStorageApi }));

app.use(ctx => {
  // ignore favicon
  if (ctx.path === '/favicon.ico') return;

  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = n + ' views';
});

app.listen(3000);
console.log('listening on port 3000');
