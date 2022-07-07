//err custom class
class statusError extends Error {
  constructor(message, status, showStack, stack) {
    super(message);

    this.showStack = showStack;
    this.status = status || 500;
    if (stack) this.stack = stack;
  }
}

//err => json
const _errJson = (err, status) => ({
  msg: err.message,
  status: err.status || status,
});

//errs handler
const _handleErr = (err, req, res, next) => {
  const status = err.status || 500;

  // console.log(err.stack);
  res.status(status).json(_errJson(err, status));
};

module.exports = {
  statusError,
  _handleErr,
};
