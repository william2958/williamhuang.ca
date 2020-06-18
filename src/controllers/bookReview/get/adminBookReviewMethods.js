
const getBookReviewAdmin = ({ BookReviews }) => async (req, res) => {

    try {

        const { isPublished } = req.query;

        let bookReviewsSnapshot = await BookReviews
            .where('isPublished', '==', isPublished === 'true')
            .get();
        const bookReviews = [];
        bookReviewsSnapshot.forEach((doc) => {
            bookReviews.push({
                ...doc.data(),
                id: doc.id
            });
        });
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
