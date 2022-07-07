const { User } = require("../../config/db.config");
const bcrypt = require("bcrypt");
const { hashPassword } = require("../../utils/bcrypt");
const { sendJwt } = require("../../utils/auth");
const { statusError } = require("../../utils/errorHandling");

//register user
const registerUser = async (req, res, next) => {
  try {
    //get data from body
    const { password, email, ...other } = req.body;

    //hash password
    const hashedPass = await hashPassword(password, next);

    const user = await User.create(
      { ...other, email, password: hashedPass },
      { raw: true }
    );

    //in case of user not being created for some reason
    if (!user) return next(new statusError("failed to create user", 501, true));

    //201 for created success
    res
      .status(201)
      .json({ msg: "successfully registred user", user: other, status: 201 });
  } catch (err) {
    return next(err);
  }
};

//login user
const loginUser = async (req, res, next) => {
  //invalid error variable
  const invalid = new statusError("invalid email or password", 401);

  try {
    //get data from body
    const { password: reqPassword, email: reqEmail } = req.body;

    if (!reqPassword || !reqEmail) return next(invalid);

    //query user
    const user = await User.findOne({
      where: { email: reqEmail },
      raw: true,
    });

    //user not found
    if (!user) return next(invalid);

    //user found, check password
    const { password: hashedPass, email, ...other } = user;

    //compare password
    const isPass = await bcrypt.compare(reqPassword, hashedPass);
    if (!isPass) return next(invalid);

    sendJwt(other, res); //send jwt token as cookie

    //json success
    res.status(201).json(other);
  } catch (err) {
    next(err);
  }
};

module.exports = { registerUser, loginUser };
