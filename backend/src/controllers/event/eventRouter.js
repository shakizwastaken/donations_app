const express = require("express");
const { checkAdmin } = require("../../utils/auth");

const {
  findAllEvents,
  findEventFromId,
  findEventFromTitle,
  updateEvent,
} = require("./eventController");

const eventRouter = express.Router();

//return all Events
eventRouter.get("/", findAllEvents);

eventRouter
  .route("/id/:id")
  //return Event from id
  .get(findEventFromId)
  //update Event
  .patch(checkAdmin, updateEvent);

//return Event from title
eventRouter.route("/name/:name").get(findEventFromTitle);

module.exports = eventRouter;
