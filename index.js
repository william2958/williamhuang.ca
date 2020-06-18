require ('./envSetup');

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const api = require('./src/api');
const { passport } = require('./src/passport');
const { mongoManager } = require('./src/mongo');

const app = express();
const cors = require('cors');

const port = process.env.PORT || 8000;

// Connect to the mongodb
mongoManager
    .connect()
    .then(() => {
        console.log('successfully connected to mongodb');
    })
    .catch(e => {
        console.error('connection error', e);
    });

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

app.use(passport.init());

app.use('/', api(config));

app.listen(port, () => console.log(`App is listening on ${port}`));
