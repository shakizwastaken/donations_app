const { DataTypes } = require("sequelize");
const userRoles = require("../constants/userRoles");
const defaultSchemaConfig = require("../utils/defaultSchema.config");

const userSchema = {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pfp: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  //user hashed password
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneNumber: DataTypes.INTEGER,

  //user roles (for authorization/access)
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
};

const userConfig = {
  ...defaultSchemaConfig,
};

module.exports = { userSchema, userConfig };
