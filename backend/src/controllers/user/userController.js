const { User } = require("../../config/db.config");
const { hashPassword } = require("../../utils/bcrypt");
const { statusError } = require("../../utils/errorHandling");

const findAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ raw: true });

    if (!users.length) {
      return next(new statusError("no users to display", 404, false));
    }

    res.status(200).json(users.map(({ password, ...other }) => other)); //send mapped users with passwords removed
  } catch (e) {
    return next(e);
  }
};

const findUserFromId = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id, { raw: true });
    if (!user) {
      return next(new statusError("user not found !", 404, false));
    }

    const { password, ...other } = user;

    res.status(200).json(other);
  } catch (e) {
    return next(e);
  }
};

const findUserFromEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { email: req.params.email },
      raw: true,
    });

    if (!user) {
      return next(new statusError("user not found !", 404, false));
    }

    const { password, ...other } = user;

    res.status(200).json(other);
  } catch (e) {
    return next(e);
  }
};

const findUsersFromFirstName = async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: { firstName: req.params.firstName },
      raw: true,
    });

    if (!user) {
      return next(new statusError("user not found !", 404, false));
    }

    const { password, ...other } = user;

    res.status(200).json(other);
  } catch (err) {
    return next(err);
  }
};

const findUsersFromLasName = async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: { lastName: req.params.lastName },
      raw: true,
    });
    if (!user.length) {
      return next(new statusError("user not found !", 404, false));
    }

    const { password, ...other } = user;

    res.status(200).json(other);
  } catch (err) {
    return next(err);
  }
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    const { password, ...other } = req.body;

    const hashedPass = await hashPassword(password, next);

    const state = await User.update(
      { password: hashedPass, ...other },
      { where: { id } },
      { raw: true }
    );
    if (state[0] === 0)
      return next(new statusError("user not found", 404, false));

    res.status(200).json({ msg: "user successfully updated !" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAllUsers,
  findUserFromId,
  findUserFromEmail,
  findUsersFromFirstName,
  findUsersFromLasName,
  updateUser,
};
