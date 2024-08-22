require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyparser.json());
const router = require('./routes');

app.use('/api', router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.status(200).send('Server is up and running');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

module.exports = app;
