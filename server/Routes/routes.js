const { addUser, checkUser,getUser } = require("../controllers/controller");

module.exports = app => {
  app.post("/api/newuser", addUser);
  app.post("/api/check", checkUser);
  app.get("/api/user", getUser);
};
