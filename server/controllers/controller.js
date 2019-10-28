const bcrypt = require('bcrypt');

const addUser = async (req, res) => {
	console.log(req.body);
	const { user_name, pass_word } = req.body;
	const db = req.app.get('db');
	const rounds = 10;
	let hash = await bcrypt.hash(pass_word, rounds);
	console.log(await bcrypt.compare(pass_word, hash));
	console.log(hash);
	db
		.addUser([ user_name, hash ])
		.then((results) => {
			res.status(200).send(results);
		})
		.catch(console.log);
};

// hashPassword();
// console.log(hash);

module.exports = {
	addUser
};
