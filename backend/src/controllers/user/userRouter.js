const express = require("express");
const { User } = require("../../config/db.config");
const router = express.Router();

const {
  findAllUsers,
  findUserFromId,
  findUserFromEmail,
  findUsersFromFirstName,
  findUsersFromLasName,
  updateUser,
} = require("./userController");
const { checkAdmin, checkUser } = require("../../utils/auth");

//return all users
router.get("/", checkAdmin, findAllUsers);
router
  .route("/id/:id")
  //return user from id
  .get(checkUser, findUserFromId)
  //update user
  .patch(checkAdmin, updateUser);

//return user from email
router.route("/email/:email").get(checkUser, findUserFromEmail);
//return user/users from first_name
router.route("/firstName/:firstName").get(checkUser, findUsersFromFirstName);
//return user/users from last_name
router.route("/lastName/:lastName").get(checkUser, findUsersFromLasName);

module.exports = router;
