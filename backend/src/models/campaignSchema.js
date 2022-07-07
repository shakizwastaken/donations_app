const { DataTypes } = require("sequelize");
const defaultSchemaConfig = require("../utils/defaultSchema.config");

const campaignSchema = {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mainImg: {
    type: DataTypes.STRING,
  },
  contentImgs: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  goalSum: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  raisedSum: {
    type: DataTypes.INTEGER,
    default: 0,
    allowNull: false,
  },
};

const campaignConfig = {
  ...defaultSchemaConfig,
};

module.exports = { campaignSchema, campaignConfig };
