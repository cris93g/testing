require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const session = require('express-session');
app = express();
port = 3001;
const routes = require('./Routes/routes');

app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING).then((dbinstance) => {
	app.set('db', dbinstance);
});
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);

app.use((req, res, next) => {
	if (!req.session.user) req.session.user = [];
	
	next();
});

routes(app);


app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
