import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import BookReviewEditor from "./BookReviewEditor";

import axios from '../../../utils/axios';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import {getBookReviewDetails} from "../../../actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class EditBookReview extends React.Component {

    componentDidMount() {
        const reviewId = this.props.match.params.reviewId;
        if (reviewId) {
            this.props.getBookReviewDetails(reviewId, true, true);
        } else {
            this.props.history.push('/admin');
        }
    }

    saveBookReview = async (reviewData) => {
        const dataToUpdate = {
            ...reviewData,
            bookReviewId: reviewData._id
        };
        try {
            await axios.put('/bookReview/updateBookReview', dataToUpdate);
            toast.success('Successfully saved book review!');
        } catch (e) {
            toast.error('Could not save the book review.');
            console.error('There was an error creating this book review');
        }
    };

    deleteBookReview = async (reviewData) => {
        const toDeleteId = reviewData._id;

        try {
            await axios.delete('/bookReview/deleteBookReview', { data: { bookReviewId: toDeleteId} });
            toast.success('Deleted book review.');
            this.props.history.goBack();
        } catch (e) {
            toast.error('Could not delete review.');
            console.error('Error deleting review: ', e);
        }
    };

    render() {

        let contentToFill;
        if (IsValidJSONString(this.props.bookReviewDetails.content)) {

            const dbEditorState = convertFromRaw(JSON.parse(this.props.bookReviewDetails.content));
            contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

        } else {
            contentToFill = EditorState.createEmpty(decoratorLink)
        }

        const bookReviewDetails = {
            ...this.props.bookReviewDetails,
            content: contentToFill
        }
        return (
            <div>
                <BookReviewEditor save={this.saveBookReview} delete={this.deleteBookReview} bookReviewData={bookReviewDetails} />
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    bookReviewDetails: state.bookReviews.editBookReviewDetails
})

function loadData(store, match) {
    const id = match.params.reviewId;
    return store.dispatch(getBookReviewDetails(id, true, true));
}

export default {
    component: connect(mapStateToProps, { getBookReviewDetails })(withRouter(EditBookReview)),
    loadData
};
