const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');

const frontpage = require('./services/frontpage')

const app = new Koa();
app.keys = ['secret'];

const router = new Router();
router.get('/', frontpage);

router.post('/auth/login', function(ctx) {
  return passport.authenticate('local', (err, user, info, status) => {
    if (user === false) {
      ctx.body = { success: false }
      ctx.throw(401)
    } else {
      ctx.body = { success: true }
      return ctx.login(user)
    }
  })(ctx)
})

app.use(bodyParser());
app.use(session({}, app));
require('./services/passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(router.routes());
module.exports = app.listen();
