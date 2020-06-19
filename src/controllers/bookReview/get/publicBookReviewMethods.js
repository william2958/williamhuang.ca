const { LIMIT_PER_PAGE, propertiesToProject } = require("../constants");

const getBookReview = ({ BookReview }) => async (req, res) => {

    const { bookReviewId } = req.query;

    try {
        const bookReview = await BookReview.findOne({ _id: bookReviewId });

        if (bookReview) {
            return res.status(200).send({
                bookReview
            });
        } else {
            return res.status(401).send({
                message: "There is no book review with that id."
            })
        }

    } catch (e) {
        console.error('Error on getting book reviews: ', e);
        return res.status(400).send({
            message: "There was an error getting the book review."
        })
    }

};

const getNumRecentBookReviews = ({ BookReview }) => async (req, res) => {
    const {
        numReviews
    } = req.query;

    try {
        if (!numReviews || isNaN(numReviews)) {
            return res.status(400).send({
                message: "Please include how many items to return."
            })
        }

        const allReviews = await BookReview.aggregate([
            {
                $match: {
                    isPublished: true
                }
            },
            {
                $sort: {
                    publishDate: -1
                }
            },
            {
                $limit: parseInt(numReviews)
            },
            {
                $project: propertiesToProject
            }
        ]);

        res.status(200).send({
            allReviews
        })
    } catch (e) {
        console.error('Error getting num recent book reviews: ', e);
        return res.status(400).send({
            message: "There was an error getting the book reviews."
        })
    }
};

const getRecentBookReviews = ({ BookReview }) => async (req, res) => {

    const {
        numSkip,
        category
    } = req.query;

    try {
        let allReviews;
        let numToSkip;
        if (!numSkip || isNaN(numSkip)) {
            // First page, don't skip any
            allReviews = await BookReview.aggregate([
                {
                    $match: {
                        isPublished: true,
                        ...(category && { category })
                    }
                },
                {
                    $sort: {
                        publishDate: -1
                    }
                },
                {
                    $limit: LIMIT_PER_PAGE + 1
                },
                {
                    $project: propertiesToProject
                }
            ]);
            numToSkip = LIMIT_PER_PAGE;
        } else {

            allReviews = await BookReview.aggregate([
                {
                    $match: {
                        isPublished: true,
                        ...(category && { category })
                    }
                },
                {
                    $sort: {
                        publishDate: -1
                    }
                },
                {
                    $skip: parseInt(numSkip)
                },
                {
                    $limit: LIMIT_PER_PAGE + 1
                },
                {
                    $project: propertiesToProject
                }
            ]);

            numToSkip = parseInt(numSkip) + LIMIT_PER_PAGE;

        }

        let anotherPage = false;
        if (allReviews.length > LIMIT_PER_PAGE) {
            // There is another page
            anotherPage = true;
            allReviews.pop();
        }

        res.status(200).send({
            allReviews,
            anotherPage,
            numToSkip
        })
    } catch (e) {
        console.error('Error filtering book reviews: ', e);
        return res.status(400).send({
            message: "There was an error getting the book reviews."
        })
    }

};

const getFilteredBookReviews = ({ BookReview }) => async (req, res) => {

    const {
        category
    } = req.query;

    if (!category) {
        return res.status(400).send({
            message: "Please specify the category"
        })
    }

    try {
        const allReviews = await BookReview.aggregate([
            {
                $match: {
                    isPublished: true,
                    category
                }
            },
            {
                $sort: {
                    publishDate: -1
                }
            },
            {
                $project: propertiesToProject
            },
        ]);
        res.status(200).send({
            allReviews
        })
    } catch (e) {
        console.error('Error filtering book reviews: ', e);
        return res.status(400).send({
            message: "There was an error getting the book reviews."
        })
    }

};

module.exports = {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews,
    getNumRecentBookReviews
};
