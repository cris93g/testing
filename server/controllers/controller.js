const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  console.log(req.body);
  const { user_name, pass_word, email, first_name, last_name, age } = req.body;
  const db = req.app.get("db");
  const rounds = 10;
  let hash = await bcrypt.hash(pass_word, rounds);
  db.addUser([user_name, hash, email, first_name, last_name, age])
    .then(results => {
      res.status(200).send(results);
    })
    .catch(console.log);
};

const checkUser = (req, res) => {
  const { user_name, new_pass_word } = req.body;
  console.log(req.body);
  const db = req.app.get("db");
  db.getUser([user_name, new_pass_word]).then(async results => {
    if (results[0]) {
      let { hash } = results[0];
      let check = await bcrypt.compare(new_pass_word, hash);
      if (check == true) {
        console.log("logged in");
      } else {
        console.log("thats not u");
      }
    }
  });
};
// hashPassword();
// console.log(hash);

module.exports = {
  addUser,
  checkUser
};
