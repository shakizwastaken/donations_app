const { DataTypes } = require("sequelize");
const defaultSchemaConfig = require("../utils/defaultSchema.config");

const donationSchema = {
  ammount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: DataTypes.STRING,
};

const donationConfig = {
  ...defaultSchemaConfig,
  createdAt: "donatedAt",
};

module.exports = { donationConfig, donationSchema };
