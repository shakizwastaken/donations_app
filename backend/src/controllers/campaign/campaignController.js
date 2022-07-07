const { Campaign } = require("../../config/db.config");
const { statusError } = require("../../utils/errorHandling");

const findAllCampaigns = async (req, res, next) => {
  try {
    const campaigns = await Campaign.findAll({ raw: true });

    if (!campaigns.length) {
      return next(new statusError("no campaigns to display", 404, false));
    }
    res.status(200).json(campaigns);
  } catch (e) {
    return next(e);
  }
};

const findCampaignFromId = async (req, res, next) => {
  try {
    const campagin = Campaign.findByPk(req.params.id, { raw: true });

    if (!campagin.length) {
      return next(new statusError("campagin not found !", 404, false));
    }

    res.status(200).json(campagin);
  } catch (e) {
    next(e);
  }
};

const findCampaignFromTitle = async (req, res, next) => {
  try {
    const campaign = await Campaign.findOne({
      where: { name: req.params.title },
      raw: true,
    });

    if (!campagins) {
      return next(new statusError("campagin not found !", 404, false));
    }

    res.status(200).json(campaign);
  } catch (e) {
    return next(e);
  }
};

const createCampaign = async (req, res, next) => {
  try {
    const campaign = await Campaign.create({ ...req.body });
    res.status(201).json(campaign);
  } catch (err) {
    next(err);
  }
};

const updateCampaign = async (req, res, next) => {
  const id = req.params.id;

  try { 
    const state = await Campaign.update(
      { ...req.body },
      { where: { id } },
      { raw: true }
    );

    if (state[0] === 0)
      return next(new statusError("Campaign not found", 404, false));

    res.status(200).json({ msg: "Campaign successfully updated !" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAllCampaigns,
  findCampaignFromId,
  findCampaignFromTitle,
  createCampaign,
  updateCampaign,
};
