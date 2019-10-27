const { addUser } = require('../controllers/controller');

module.exports = (app) => {
	app.post('/api/newuser', addUser);
};
