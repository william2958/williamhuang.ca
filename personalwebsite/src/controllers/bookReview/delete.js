const deleteBookReview = ({ BookReview }) => async (req, res) => {

    const {
        bookReviewId
    } = req.body;

    if (!bookReviewId) {
        return res.status(404).send({
            message: "Could not find that book review."
        })
    }

    try {
        const deletedReview = await BookReview.findOneAndDelete({
            _id: bookReviewId
        });

        return res.status(200).send({
            deletedReview
        })
    } catch (e) {

        return res.status(400).send({
            message: "Could not delete book review"
        });

    }

};

module.exports = {
    deleteBookReview
};
