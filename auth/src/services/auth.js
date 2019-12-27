const Router = require('koa-router');
const User = require('../models/user')

const router = new Router();

const authError = () => {
  const error = new Error();
  error.status = 403;
  throw error;
}

router.post('/login', async ctx => {
  const { username, password } = ctx.request.body;
  const user = await User.get(username);

  if (!user) {
    authError();
  } else if (!await user.checkPassword(password)) {
    authError();
  }
  
  ctx.body = 'success';
});

module.exports = router;
