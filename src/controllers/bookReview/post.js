const createBookReview = ({ db }) => async (req, res) => {

    console.log('authenticated and creating book', req.body);

    return res.status(200).send({
        user: req.user
    });

};

module.exports = {
    createBookReview
};