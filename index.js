require ('./envSetup');

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const api = require('./src/api');

const app = express();
const cors = require('cors');

const port = 8000;

// Use the json middleware
app.use(
    bodyParser.json({
        // Because Stripe needs the raw body, we compute it but only when hitting the Stripe callback URL.
        verify: function(req, res, buf) {
            const url = req.originalUrl;
            if (url.includes('/v1/stripe_hooks')) {
                req.rawBody = buf.toString();
            }
        },
        limit: '15MB',
    }),
);

app.use(
    bodyParser.urlencoded({
        limit: '15MB',
        extended: true,
        parameterLimit: 1500000,
    }),
);

app.use(cors());

app.use('/', api(config));

app.listen(port, () => console.log(`App is listening on ${port}`));