
const getBookReviewDrafts = ({ BookReviews }) => async (req, res) => {

    try {
        let bookReviewsSnapshot = await BookReviews
            .where('isPublished', '==', false)
            .get();
        const allDrafts = [];
        bookReviewsSnapshot.forEach((doc) => {
            allDrafts.push({
                ...doc.data(),
                id: doc.id
            });
        });
        res.status(200).send({
            allDrafts
        })
    } catch (e) {
        return res.status(400).send({
            message: "There was an error getting the book drafts."
        })
    }


};

module.exports = {
    getBookReviewDrafts
};