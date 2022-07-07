const jwt = require("jsonwebtoken");
const { User } = require("../config/db.config");
const { userSchema } = require("../models/userSchema");

const access_secret = process.env.JWT_ACCESS;

const { statusError } = require("./errorHandling");

const _generateToken = (data) => {
  return jwt.sign(data, access_secret);
};

const sendJwt = (data, res) => {
  const token = _generateToken(data);
  res.cookie("access_token", token, { httpOnly: true });
};

//check if user has a valid token
const checkToken = (req, res, next) => {
  //get token from cookies
  const token = req.cookies.access_token;

  //check if token is null
  if (!token) {
    console.log("no token");
    return next(new statusError("unauthorized", 401, false));
  }

  //verify token
  jwt.verify(token, access_secret, (err, user) => {
    if (err) next(new statusError("unauthorized", 403, false));

    req.user = user;
    return next();
  });
};

//refresh user
const refreshUser = async (req, res, next) => {
  checkToken(req, res, async (err) => {
    try {
      if (err) return next(err);

      const user = req.user;
      const newUser = await User.findOne({ where: { id: user.id }, raw: true });

      if (!newUser) return next(new statusError("invalid logged in user", 400));

      req.user = newUser;

      sendJwt(newUser, res);
      next();
    } catch (err) {
      next(err);
    }
  });
};

//check if user is admin
const checkAdmin = (req, res, next) => {
  refreshUser(req, res, (err) => {
    if (err) return next(err);
    if (!req.user.isAdmin)
      return next(new statusError("you cannot access this route", 403, false));

    next();
  });
};

//check if user is same requested user info
const checkUser = (req, res, next) => {
  checkToken(req, res, async (err) => {
    if (err) return next(err);
    const user = req.user;
    try {
      if (user.isAdmin) return next(); //admins can have other user's data

      const requestedUser = await User.findOne({
        where: { ...req.params },
        raw: true,
      });

      if (!requestedUser) return next(new statusError("not authorized", 403));

      if (user.id !== requestedUser.id) {
        return next(new statusError("not authorized.", 403));
      }
      req.user = requestedUser;
      next();
    } catch (err) {
      next(err);
    }
  });
};

module.exports = { sendJwt, checkToken, checkAdmin, checkUser, refreshUser };
