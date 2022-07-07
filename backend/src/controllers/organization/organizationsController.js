const { Organization } = require("../../config/db.config");
const { statusError } = require("../../utils/errorHandling");

const findAllOrganizations = async (req, res, next) => {
  try {
    const organizations = await Organization.findAll({ raw: true });

    if (!organizations.length) {
      return next(new statusError("no organizations to display", 404, false));
    }
    res.status(200).json(organizations);
  } catch (e) {
    return next(e);
  }
};

const findOrganizationFromId = async (req, res, next) => {
  try {
    const organization = Organization.findByPk(req.params.id, { raw: true });

    if (!organization.length) {
      return next(new statusError("organization not found !", 404, false));
    }

    res.status(200).json(organization);
  } catch (e) {
    next(e);
  }
};

const findOrganizationFromName = async (req, res, next) => {
  try {
    const organization = await Organization.findAll({
      where: { name: req.params.name },
      raw: true,
    });

    if (!organization.length) {
      return next(new statusError("organization not found !", 404, false));
    }

    res.status(200).json(organization);
  } catch (e) {
    return next(e);
  }
};

const updateOrganization = async (req, res, next) => {
  const id = req.params.id;

  try {
    const { password, ...other } = req.body;

    const hashedPass = await hashPassword(password, next);

    const state = await User.update(
      { password: hashedPass, ...other },
      { where: { id } },
      { raw: true }
    );
    if (state[0] === 0)
      return next(new statusError("Organization not found", 404, false));

    res.status(200).json({ msg: "Organization successfully updated !" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAllOrganizations,
  findOrganizationFromId,
  findOrganizationFromName,
  updateOrganization,
};
