const createBookReview = ({ BookReviews, admin }) => async (req, res) => {

    try {
        let setBookReview = await BookReviews.doc().set(
            {
                ...req.body,
                publishDate: admin.firestore.Timestamp.now(),
                isPublished: req.body.isPublished === 'true'
            },
            {
                merge: true
            }
        );

        return res.status(200).send({
            bookReview: setBookReview
        })
    } catch (e) {

        return res.status(400).send({
            message: "Could not create book review"
        });

    }

};

module.exports = {
    createBookReview
};