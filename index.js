require ('./envSetup');

const express = require('express');

const config = require('./config');
const api = require('./src/api');

const app = express();
const cors = require('cors');

const port = 8000;

app.use(express.json());

app.use(cors());

app.use('/', api(config));

app.listen(port, () => console.log(`App is listening on ${port}`));