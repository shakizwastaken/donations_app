require("dotenv").config();
const express = require("express");
const cors = require("cors");

//mysql setup
const { connection } = require("./config/db.config");
const { seedData } = require("./utils/seeder");

try {
  // seedData(); //create db if not exists and seed data

  connection.authenticate().then(console.log("connected"));
} catch (err) {
  console.log(err);
}

//end of mysql setup

const app = express();

const port = process.env.PORT || 3001;

//middleware

//access quick fix
const corsFix = require("./utils/cors.js");
app.use(corsFix);

//json
app.use(express.json());

//static public
app.use(express.static("public"));

//cookies middleware
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//routes

//user auth router
const authRouter = require("./controllers/auth/authRouter");
app.use("/api/auth", authRouter);

//users router
const usersRouter = require("./controllers/user/userRouter");
app.use("/api/user", usersRouter);

//organizations router
const organizationsRouter = require("./controllers/organization/organizationsRouter");
app.use("/api/organization", organizationsRouter);

//events router
const eventRouter = require("./controllers/event/eventRouter");
app.use("/api/event", eventRouter);

//campaigns router
const campaignRouter = require("./controllers/campaign/campaignRouter");
app.use("/api/campaign", campaignRouter);

//end of routing

//err handling
const { _handleErr, statusError } = require("./utils/errorHandling");

//404
app.use((req, res, next) => {
  next(new statusError("not found", 404, false));
});

//other errs
app.use(_handleErr);

app.listen(port, () => {
  console.log(`live on http://localhost:${port}/`);
});
