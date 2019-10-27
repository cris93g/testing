require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const cors = require('cors');
app = express();
port = 3001;
const routes = require('./Routes/routes');

app.use(cors());
app.use(json());
massive(process.env.CONNECTION_STRING).then((dbinstance) => {
	app.set('db', dbinstance);
});

routes(app);

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
