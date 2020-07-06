require ('./envSetup');
console.log('booting up application')
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config');
const api = require('./src/api');
const { passport } = require('./src/passport');
const { mongoManager } = require('./src/mongo');

const app = express();
const cors = require('cors');

const port = process.env.PORT || 8000;

// Server side rendering stuff
import { matchRoutes } from 'react-router-config';
import createStore from './helpers/createStore';
import Routes from './client/Routes';
import renderer from './helpers/renderer';

// Connect to the mongodb
mongoManager
    .connect()
    .then(() => {
        console.log('successfully connected to mongodb');
    })
    .catch(e => {
        console.error('connection error', e);
    });

app.use(cookieParser());
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


app.use('/api/', api(config));

app.get('/api/', (req, res) => {
    res.send('Successfully hit endpoint.');
});

app.get('/_ah/stop', (req, res) => {
    res.status(200).send();
});

app.get('/_ah/start', (req, res) => {
    res.status(200).send()
});

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore(req);

    // load data to store
    const promises = matchRoutes(Routes, req.path).map(({ route, match }) => {
        return route.loadData ? route.loadData(store, match) : null;
    }).map(promise => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            })
        }
    });

    Promise.all(promises).then(() => {

        const context = {};
        const content = renderer(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    })

});

app.listen(port, () => console.log(`App is listening on ${port}`));
