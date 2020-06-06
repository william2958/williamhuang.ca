const createBookReview = ({ BookReviews, admin }) => async (req, res) => {

    const {
        category,
        content,
        contentPreview,
        title,
        isPublished,
        coverURL,
        rating,
        recommended
    } = req.body;

    try {
        const reviewData = {
            category,
            content,
            contentPreview,
            title,
            coverURL,
            rating,
            isPublished: isPublished === 'true',
            recommended: recommended === 'true'
        };

        if (isPublished === 'true') {
            reviewData.publishDate = admin.firestore.Timestamp.now();
        }
        let setBookReview = await BookReviews.add(
            reviewData
        );

        return res.status(200).send({
            bookReviewId: setBookReview.id
        })
    } catch (e) {

        console.error('There was an error creating this book review: ', e);
        return res.status(400).send({
            message: "Could not create book review"
        });

    }

};

const addBookImage = (req, res) => {
    res.status(200).send({
        imageURL: req.imageURL
    })
};

module.exports = {
    createBookReview,
    addBookImage
};