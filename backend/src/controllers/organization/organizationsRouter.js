const express = require("express");
const { Organization } = require("../../config/db.config");
const { checkAdmin, checkUser } = require("../../utils/auth");

const {
  findAllOrganizations,
  findOrganizationFromId,
  findOrganizationFromName,
  updateOrganization,
} = require("./organizationsController");

const router = express.Router();

//return all organizations
router.get("/", findAllOrganizations);

router
  .route("/id/:id")
  //return organization from id
  .get(findOrganizationFromId)
  //update organization
  .patch(checkAdmin, updateOrganization);

//return organization from name
router.route("/name/:name").get(findOrganizationFromName);

module.exports = router;
