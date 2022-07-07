const bcrypt = require("bcrypt");

const hashPassword = async (pass, next) => {
  try {
    const hashed = await bcrypt.hash(pass, 10);
    return hashed;
  } catch (err) {
    next(err);
  }
};

module.exports = { hashPassword };
