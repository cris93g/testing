const bcrypt = require('bcrypt');
module.exports = {
	addUser(req, res) {
		console.log(req.body);
		const db = req.app.get('db');
		const { user_name, pass_word } = req.body;
		let hash;
		const rounds = 10;

		hash = bcrypt.hash(pass_word, rounds);
		bcrypt.compare(pass_word.toString(), hash.toString());
		// console.log(hash);

		console.log(hash);

		db
			.addUser([ user_name, hash ])
			.then((results) => {
				res.status(200).send(results);
			})
			.catch(console.log);
	}
};
