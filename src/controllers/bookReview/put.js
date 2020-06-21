const updateBookReview = ({ BookReview }) => async (req, res) => {

    const {
        category,
        content,
        contentPreview,
        title,
        isPublished,
        coverURL,
        rating,
        bookReviewId,
        recommended,
        urlString,
        author
    } = req.body;

    try {

        const prevBookReview = await BookReview.findOne({ _id: bookReviewId });

        const updateData = {
            ...(category && { category }),
            ...(content && { content }),
            ...(contentPreview && { contentPreview }),
            ...(title && { title }),
            ...(coverURL && { coverURL }),
            ...(rating && { rating }),
            ...(typeof isPublished !== 'undefined' && { isPublished }),
            ...(typeof recommended !== 'undefined' && { recommended }),
            ...(urlString && { urlString }),
            ...(author && { author })
        };

        if (isPublished && !prevBookReview.isPublished) {
            updateData.publishDate = new Date();
        }
        let setBookReview = await BookReview.findOneAndUpdate(
            { _id: bookReviewId},
            {
                $set: updateData
            },
            {
                new: true,
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
