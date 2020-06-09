const updateBookReview = ({ BookReviews, admin }) => async (req, res) => {

    const {
        category,
        content,
        contentPreview,
        title,
        isPublished,
        coverURL,
        rating,
        bookReviewId,
        recommended
    } = req.body;

    try {
        const updateData = {
            ...(category && { category }),
            ...(content && { content }),
            ...(contentPreview && { contentPreview }),
            ...(title && { title }),
            ...(coverURL && { coverURL }),
            ...(rating && { rating }),
            ...(isPublished && { isPublished }),
            ...(recommended && { recommended })
        };

        if (isPublished) {
            updateData.publishDate = admin.firestore.Timestamp.now();
        }
        let setBookReview = await BookReviews.doc(bookReviewId).set(
            updateData,
            {
                merge: true
            }
        );

        return res.status(200).send({
            bookReview: setBookReview
        })
    } catch (e) {

        return res.status(400).send({
            message: "Could not update book review"
        });

    }

};

module.exports = {
    updateBookReview
};