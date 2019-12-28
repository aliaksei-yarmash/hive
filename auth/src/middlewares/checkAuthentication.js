const authError = require('../errors/authError');

module.exports = function (ctx, next) {
  if (ctx.isAuthenticated()) {
    return next()
  } else {
    authError()
  }
}
