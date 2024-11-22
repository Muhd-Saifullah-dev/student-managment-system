const { handleError } = require("../utils/handler.utils");

const globaleErrorMiddleware = async (error, _, res) => {
  const message = error.message ?? "Something went wrong";
  const status = error.status ?? 500;
  handleError(res, status, message, null);
};

module.exports = {
  globaleErrorMiddleware,
};
