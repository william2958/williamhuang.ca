const { propertiesToProject } = require('../constants');

const getBookReviewAdmin = ({ BookReview }) => async (req, res) => {

    try {

        const { isPublished } = req.query;

        let bookReviews = await BookReview.aggregate([
            {
                $match: {
                    isPublished: isPublished === 'true'
                }
            },
            {
                $sort: {
                    created: -1
                }
            },
            {
                $project: propertiesToProject
            }
        ]);

        res.status(200).send({
            bookReviews
        })
    } catch (e) {
        return res.status(400).send({
            message: "There was an error getting the book drafts."
        })
    }

};

module.exports = {
    getBookReviewAdmin
};
