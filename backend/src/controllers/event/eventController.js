const { Event } = require("../../config/db.config");
const { statusError } = require("../../utils/errorHandling");

const findAllEvents = async (req, res, next) => {
  try {
    const events = await Event.findAll({ raw: true });

    if (!events.length) {
      return next(new statusError("no events to display", 404, false));
    }
    res.status(200).json(events);
  } catch (e) {
    return next(e);
  }
};

const findEventFromId = async (req, res, next) => {
  try {
    const event = Event.findByPk(req.params.id, { raw: true });

    if (!event.length) {
      return next(new statusError("event not found !", 404, false));
    }

    res.status(200).json(event);
  } catch (e) {
    next(e);
  }
};

const findEventFromTitle = async (req, res, next) => {
  try {
    const event = await Event.findOne({
      where: { name: req.params.title },
      raw: true,
    });

    if (!events) {
      return next(new statusError("event not found !", 404, false));
    }

    res.status(200).json(event);
  } catch (e) {
    return next(e);
  }
};

const updateEvent = async (req, res, next) => {
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
      return next(new statusError("Event not found", 404, false));

    res.status(200).json({ msg: "Event successfully updated !" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAllEvents,
  findEventFromId,
  findEventFromTitle,
  updateEvent,
};
