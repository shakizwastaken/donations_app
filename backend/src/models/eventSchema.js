const { DataTypes } = require("sequelize");
const defaultSchemaConfig = require("../utils/defaultSchema.config");

const eventSchema = {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  mainImg: {
    type: DataTypes.STRING,
  },
  contentImgs: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
};

const eventConfig = {
  ...defaultSchemaConfig,
};

module.exports = { eventConfig, eventSchema };
