import React from 'react';

import BookReviewPreview from "../../BookReviews/BookReviewPreview";
import {AdminPublishedWrapper} from "./styles";
import {getAdminBookReview} from "../../../actions";
import {connect} from "react-redux";

class BookReviewPublished extends React.Component {

    componentDidMount() {
        this.props.getAdminBookReview(true);
    }

    render() {

        return (
            <AdminPublishedWrapper className="container">
                <div className="bookReviewList row">
                    {
                        this.props.published.map(bookReview => (
                            <BookReviewPreview bookReview={bookReview} key={bookReview._id} editable={true} />
                        ))
                    }
                </div>
            </AdminPublishedWrapper>
        )
    }

}

const mapStateToProps = (state) => ({
    published: state.bookReviews.publishedBookReviews
})

export default {
    component: connect(mapStateToProps, { getAdminBookReview })(BookReviewPublished),
    loadData: ({ dispatch }) => dispatch(getAdminBookReview(true))
};
