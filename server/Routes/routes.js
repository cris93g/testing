const { addUser, checkUser } = require("../controllers/controller");

module.exports = app => {
  app.post("/api/newuser", addUser);
  app.post("/api/check", checkUser);
};
