const getAdmin = ({ User }) => async (req, res) => {

    if (!req.user) {
        res.status(404).send({
            message: 'Could not find user',
        });
    }
    try {
        const user = await User.findById(req.user._id);

        res.status(200).send({
            user,
        });
    } catch (e) {
        res.status(401).send({
            message: 'User not found',
        });
    }
};

module.exports = {
    getAdmin
};
