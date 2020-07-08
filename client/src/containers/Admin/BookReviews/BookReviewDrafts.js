import React from 'react';

import BookReviewPreview from "../../BookReviews/BookReviewPreview";
import {getAdminBookReview} from "../../../actions";
import {connect} from "react-redux";

class BookReviewDrafts extends React.Component {

    componentDidMount() {
        this.props.getAdminBookReview(false);
    }

    render() {

        return (
            <div className="container">
                <div className="bookReviewList row">
                    {
                        this.props.drafts.map(bookReview => (
                            <BookReviewPreview bookReview={bookReview} key={bookReview._id} editable={true} />
                        ))
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    drafts: state.bookReviews.draftBookReviews
})

export default {
    component: connect(mapStateToProps, { getAdminBookReview })(BookReviewDrafts),
    loadData: ({ dispatch }) => dispatch(getAdminBookReview(false))
};
