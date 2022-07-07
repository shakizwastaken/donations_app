const { initDb, User, Organization } = require("../config/db.config");
const { hashPassword } = require("./bcrypt");

const pfp = "https://avatars.dicebear.com/api/adventurer/wwwe.svg";
const randomImg =
  "https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg";

const randomImg2 =
  "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_960_720.jpg";

const logo =
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png";

const data = (admin) => {
  return {
    users: [
      {
        firstName: "user1",
        lastName: "userlast1",
        username: "coolguy1",
        pfp,
        email: "test@gmail.com",
        password: admin,
        phonenumber: "+2122321313",
        isAdmin: true,
      },
      {
        firstName: "user2",
        lastName: "userlast2",
        username: "coolguy2",
        pfp,
        email: "test2@gmail.com",
        password: admin,
        phonenumber: "+2122321313",
        isAdmin: false,
      },
    ],
    organizations: [
      {
        name: "test organiza 1",
        about: "very nice scam you should not donate :>",
        locations: ["sidi maarouf wow wow ", "ur mom's"],
        goals: [{ title: "cringe", info: "wow so cringe" }],
        logo,
        mainImg: randomImg,
        contentImgs: [randomImg2, randomImg],
        sponsors: [
          { name: "very rich company", logo },
          { name: "very rich company v2", logo },
          { name: "ur mom", logo },
        ],
      },
      {
        name: "test organiza 2",
        about: "those children can take the L !",
        locations: ["sidi maarouf wow wow ", "ur mom's"],
        goals: [{ title: "cringe", info: "wow so cringe" }],
        logo,
        mainImg: randomImg,
        contentImgs: [randomImg2, randomImg],
        sponsors: [
          { name: "very rich company", logo },
          { name: "very rich company v2", logo },
          { name: "ur dad", logo },
        ],
      },
    ],
  };
};

const seedData = async () => {
  await initDb().then(
    console.log("database have been initialized successfully !") //creates tables if not exist
  );

  const admin = await hashPassword("admin");
  const d = data(admin);

  d.users.forEach((user) => User.create(user));
  d.organizations.forEach((organization) => Organization.create(organization));
};

module.exports = { seedData };
