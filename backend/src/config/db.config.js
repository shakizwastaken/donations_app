const { Sequelize } = require("sequelize");
const { userConfig, userSchema } = require("../models/userSchema");
const {
  organizationSchema,
  organizationConfig,
} = require("../models/organizationSchema");
const { campaignSchema, campaignConfig } = require("../models/campaignSchema");
const { donationSchema, donationConfig } = require("../models/donationSchema");
const { eventSchema, eventConfig } = require("../models/eventSchema");

let connection = new Sequelize({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  dialect: "postgres",

  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});

const models = {
  Donation: connection.define("Donation", donationSchema, donationConfig),
  User: connection.define("User", userSchema, userConfig),
  Organization: connection.define(
    "Organization",
    organizationSchema,
    organizationConfig
  ),
  Campaign: connection.define("Campaign", campaignSchema, campaignConfig),
  Event: connection.define("Event", eventSchema, eventConfig),
};

//one to many relationship between users and donations
models.User.hasMany(models.Donation);
models.Donation.belongsTo(models.User, { foreignKey: { name: "UserId" } });

//many to many relationship between campaigns and organizations
models.Organization.hasMany(models.Campaign);
models.Campaign.belongsToMany(models.Organization, {
  through: "Organization_Campaign",
});

//many to many relationship between events and organizations
models.Organization.hasMany(models.Event);
models.Event.belongsToMany(models.Organization, {
  through: "Organization_Event",
});

const initDb = async () => {
  Object.values(models).forEach(async (model) => {
    try {
      await model.sync();
    } catch (err) {
      console.log(err.message);
    }
  });
};

module.exports = { connection, initDb, ...models };
