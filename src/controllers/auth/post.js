const { withoutErrors } = require('../../middleware');
const crypto = require('crypto');

const adminSignUp = ({ User, Token }) => async (req, res, next) => {

    const { email, password, firstName, lastName } = req.body;

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    if (!validateEmail(email)) {
        res.status(400).send({
            message: 'Invalid email provided!',
        });
    }

    try {

        const existingUser = await User.findOne({
            email,
        });
        if (existingUser) {
            // It would be nice to check if the existing use has a google id and so should
            // alert the user that the account is google related, but existingUser.googleProvider
            // doesn't get returned here for some reason
            // console.log('existing user: ', existingUser);

            return res.status(401).send({
                message: 'An account with this email already exists.',
            });
        }

        const user = new User({
            email: email,
            profile: {
                firstName,
                lastName,
            },
        });

        const token = new Token({
            _userId: user._id,
            token: crypto.randomBytes(16).toString('hex'),
        });

        await token.save();

        // This is a function provided by the npm package passport-local-mongoose
        // That just helps with this stuff, there are plenty of functions to help deal with various
        // Authentication related problems
        User.register(user, password, withoutErrors(next, () => next()));
    } catch (e) {
        res.status(400).send({
            message: e.message,
        });
        console.error('error when signing up: ', e);
    }
};

const adminSignIn = ({ firebaseAuth, auth }) => async (req, res) => {

    const {
        email,
        password
    } = req.body;

    try {
        const {
            user
        } = await firebaseAuth.signInWithEmailAndPassword(email, password);
        const token = await auth.createCustomToken(user.uid);

        res.status(200).send({
            user,
            token
        })
    } catch (e) {
        console.error("Error when logging in: ", e);
        res.status(400).send({
            message: "There was an error signing you in."
        })
    }

};

module.exports = {
    adminSignUp,
    adminSignIn
};
