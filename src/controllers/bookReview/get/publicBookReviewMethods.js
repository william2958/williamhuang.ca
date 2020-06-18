const { LIMIT_PER_PAGE } = require("../constants");

const getBookReview = ({ BookReviews }) => async (req, res) => {

    const { bookReviewId } = req.query;

    try {
        const bookReviewRef = BookReviews.doc(bookReviewId);
        let bookReview = await bookReviewRef.get();

        if (bookReview.exists) {
            bookReview = bookReview.data();
            bookReview.id = bookReviewRef.id;
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

const getNumRecentBookReviews = ({ BookReviews }) => async (req, res) => {
    const {
        numReviews
    } = req.query;

    try {
        if (!numReviews || isNaN(numReviews)) {
            return res.status(400).send({
                message: "Please include how many items to return."
            })
        }
        let bookReviewsSnapshot;
        bookReviewsSnapshot = await BookReviews
            .where('isPublished', '==', true)
            .orderBy('publishDate', 'desc')
            .limit(parseInt(numReviews))
            .get();

        const allReviews = [];
        bookReviewsSnapshot.forEach((doc) => {
            allReviews.push({
                ...doc.data(),
                content: null,
                id: doc.id
            });
        });

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

const getRecentBookReviews = ({ BookReviews }) => async (req, res) => {

    const {
        mostRecentBookId
    } = req.query;

    try {
        let bookReviewsSnapshot;
        if (!mostRecentBookId) {
            bookReviewsSnapshot = await BookReviews
                .where('isPublished', '==', true)
                .orderBy('publishDate', 'desc')
                // + 1 to determine if there's another page
                .limit(LIMIT_PER_PAGE + 1)
                .get();
        } else {

            const mostRecentBook = await BookReviews.doc(mostRecentBookId).get();
            if (!mostRecentBook.exists) {
                return res.status(404).send({
                    message: "This book review does not exist"
                })
            }

            bookReviewsSnapshot = await BookReviews
                .where('isPublished', '==', true)
                .orderBy('publishDate', 'desc')
                .startAfter(mostRecentBook)
                // + 1 to determine if there's another page
                .limit(LIMIT_PER_PAGE + 1)
                .get();

        }
        const allReviews = [];
        bookReviewsSnapshot.forEach((doc) => {
            allReviews.push({
                ...doc.data(),
                content: null,
                id: doc.id
            });
        });

        let anotherPage = false;
        if (allReviews.length > LIMIT_PER_PAGE) {
            // There is another page
            anotherPage = true;
            allReviews.pop();
        }

        res.status(200).send({
            allReviews,
            anotherPage
        })
    } catch (e) {
        console.error('Error filtering book reviews: ', e);
        return res.status(400).send({
            message: "There was an error getting the book reviews."
        })
    }

};

const getFilteredBookReviews = ({ BookReviews }) => async (req, res) => {

    const {
        category
    } = req.query;

    if (!category) {
        return res.status(400).send({
            message: "Please specify the category"
        })
    }

    try {
        let bookReviewsSnapshot = await BookReviews
            .where('category', '==', category)
            .where('isPublished', '==', true)
            .orderBy('publishDate', 'desc')
            .get();
        const allReviews = [];
        bookReviewsSnapshot.forEach((doc) => {
            allReviews.push({
                ...doc.data(),
                content: null,
                id: doc.id
            });
        });
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
