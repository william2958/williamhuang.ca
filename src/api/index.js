const express = require('express');

const admin = require('firebase-admin');
const serviceAccount = require('../../ServiceAccountKey.json');

let credential;

if (process.env.NODE_ENV === 'local') {
    credential = admin.credential.cert(serviceAccount)
} else if (process.env.NODE_ENV === 'production') {
    credential = admin.credential.applicationDefault()
}

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

const routersInit = config => {

    const router = express();

    return router;

};

module.exports = routersInit;