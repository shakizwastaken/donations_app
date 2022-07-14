// module.exports = function (req, res, next) {
//   //allow requests from localhost:3000
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");

//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

//   res.setHeader("Access-Control-Allow-Credentials", true);

//   // Pass to next layer of middleware
//   next();
// };

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
];

module.exports = {
  origin: (origin, callback) => {
    callback(null, true);
  },
  credentials: true,
};
