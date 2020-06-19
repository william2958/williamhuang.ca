const createBookReview = ({ BookReview }) => async (req, res) => {

    const {
        category,
        content,
        contentPreview,
        title,
        isPublished,
        coverURL,
        rating,
        recommended,
        author
    } = req.body;

    try {
        const reviewData = {
            category,
            content,
            contentPreview,
            title,
            coverURL,
            rating,
            isPublished,
            recommended,
            author,
            owner: req.user.id
        };

        if (isPublished) {
            reviewData.publishDate = new Date()
        }
        let setBookReview = new BookReview(
            reviewData
        );
        await setBookReview.save();

        return res.status(200).send({
            bookReviewId: setBookReview._id
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
        coverURL: req.imageURL
    })
};

module.exports = {
    createBookReview,
    addBookImage
};
