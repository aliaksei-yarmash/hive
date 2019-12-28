const authError = () => {
  const error = new Error();
  error.status = 401;
  throw error;
}

module.exports = authError;
