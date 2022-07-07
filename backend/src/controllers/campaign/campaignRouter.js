const express = require("express");
const { checkAdmin } = require("../../utils/auth");

const {
  findAllCampaigns,
  findCampaignFromId,
  findCampaignFromTitle,
  createCampaign,
  updateCampaign,
} = require("./campaignController");

//create router
const campaignRouter = express.Router();

//return all Campaigns
campaignRouter
  .route("/")
  .get(findAllCampaigns)
  .post(checkAdmin, createCampaign);

//return Campaign from title
campaignRouter.route("/name/:name").get(findCampaignFromTitle);

campaignRouter
  .route("/id/:id")
  //return Campaign from id
  .get(findCampaignFromId)
  //update Campaign
  .patch(checkAdmin, updateCampaign);

module.exports = campaignRouter;
