const bcrypt = require('bcrypt');
						/*****AUTH ******/
const addUser = async (req, res) => {
	console.log(req.body);
	const { user_name, pass_word, email, first_name, last_name, age } = req.body;
	const db = req.app.get('db');
	const rounds = 10;
	let hash = await bcrypt.hash(pass_word, rounds);
	db.getUser([ user_name ]).then(async (results) => {
		if (results[0]) {
			return 'sorry that user name is taken try anotherone';
		} else {
			db
				.addUser([ user_name, hash, email, first_name, last_name, age ])
				.then((results) => {
					res.status(200).send(results);
				})
				.catch(console.log);
		}
	});
};

const checkUser = (req, res) => {
	const { user_name, new_pass_word } = req.body;
	const db = req.app.get('db');
	db.getUser([ user_name, new_pass_word ]).then(async (results) => {
		if (results[0]) {
			let { hash } = results[0];
			let check = await bcrypt.compare(new_pass_word, hash);
			if (check == true) {
				req.session.user.push(results[0]);
				res.status(200).send(req.session.user);
				console.log(req.session.user)
			} else {
				console.log('thats not u');
			}
		}
	});
};

const getUser =(req,res) =>{
	res.status(200).send(req.session.user)
}
						/*****AUTH ******/
module.exports = {
	addUser,
	checkUser,
	getUser
};
