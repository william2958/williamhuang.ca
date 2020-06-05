const getAuthTokenFromRequest = (req) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        return req.headers.authorization.split(' ')[1];
    } else {
        return null;
    }
};

const authenticate = ({ firebaseAuth }) => async (req, res, next) => {

    const authToken = getAuthTokenFromRequest(req);
    if (!authToken) {
        return res.status(401).send({
            message: "You are not authorized to make this request."
        })
    }

    try {
        req.user = await firebaseAuth.signInWithCustomToken(authToken);
        return next();
    } catch (e) {
        console.log('error verifying token: ', e);
        return res.status(401).send({
            message: "You are not authorized to make this request."
        })
    }

};

module.exports = { authenticate };