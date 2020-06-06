const express = require('express');

const admin = require('firebase-admin');
const firebase = require('firebase');
const serviceAccount = require('../../ServiceAccountKey.json');

let credential;

if (process.env.NODE_ENV === 'local') {
    console.log('running on local');
    credential = admin.credential.cert(serviceAccount)
} else if (process.env.NODE_ENV === 'production') {
    credential = admin.credential.applicationDefault()
}
try {
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL: 'https://personal-website-master.firebaseio.com',
        storageBucket: "personal-website-master.appspot.com",
    });
} catch (e) {
    console.error('Could not initialize: ', e);
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsJaoC6khk8IDaBG14rCiOLw--R20uHbc",
    authDomain: "personal-website-master.firebaseapp.com",
    databaseURL: "https://personal-website-master.firebaseio.com",
    projectId: "personal-website-master",
    storageBucket: "personal-website-master.appspot.com",
    messagingSenderId: "826853114229",
    appId: "1:826853114229:web:734da219d02f05341c933c",
    measurementId: "G-ZNBSCLWQ7T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = admin.firestore();
db.settings({
    ignoreUndefinedProperties: true
});

const bucket = admin.storage().bucket();
const adminAuth = admin.auth();
const firebaseAuth = firebase.auth();

const BookReviews = db.collection('bookReviews');

const auth = require('../controllers/auth');
const bookReview = require('../controllers/bookReview');

const models = {
    admin,
    db,
    bucket,
    BookReviews,
    auth: adminAuth,
    firebaseAuth
};

const routersInit = config => {

    const router = express();

    router.use('/auth', auth(models, { ...config }));
    router.use('/bookReview', bookReview(models, { ...config }));

    return router;

};

module.exports = routersInit;