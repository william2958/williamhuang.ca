const adminSignUp = ({ auth }) => async (req, res) => {

    const {
        email,
        password,
        firstName,
        lastName
    } = req.body;

    try {
        const user = await auth.createUser({
            email,
            password,
            displayName: `${firstName} ${lastName}`
        });

        const token = await auth.createCustomToken(user.uid);

        return res.status(200).send({
            user,
            token
        });
    } catch (e) {
        console.error('Error signing up: ', e);
        res.status(400).send({
            message: e.errorInfo.message
        })
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