const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");
module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    // Before a POST request (for example), the browser sends an OPTIONS request to check if the POST request will be permitted. This OPTIONS request doesn't contain a token and it doesn't need to. So we allow it to proceed.
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new HttpError("Authentication failed!"); // Will make us reach the catch block here
    }
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};
