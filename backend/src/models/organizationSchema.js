const { DataTypes } = require("sequelize");
const defaultSchemaConfig = require("../utils/defaultSchema.config");

const organizationSchema = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  locations: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  goals: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
  },
  logo: {
    type: DataTypes.STRING,
  },
  mainImg: {
    type: DataTypes.STRING,
  },
  contentImgs: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  sponsors: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
  },
};

const organizationConfig = {
  ...defaultSchemaConfig,
};

module.exports = { organizationSchema, organizationConfig };
