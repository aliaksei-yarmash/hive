const Router = require('koa-router');
const User = require('../models/user');
const authError = require('../errors/authError');

const router = new Router();

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
