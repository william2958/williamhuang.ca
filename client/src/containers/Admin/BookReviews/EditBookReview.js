import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import BookReviewEditor from "./BookReviewEditor";

import axios from '../../../utils/axios';
import history from '../../../history';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";

class EditBookReview extends React.Component {

    state = {
        bookReviewData: null,
        editorState: EditorState.createEmpty(decoratorLink)
    };

    componentDidMount() {
        const reviewId = this.props.match.params.reviewId;
        if (reviewId) {
            axios.get(`/bookReview/getBookReview?bookReviewId=${reviewId}`)
                .then(({data}) => {
                    const bookReview = data.bookReview;
                    let contentToFill;
                    if (IsValidJSONString(bookReview.content)) {

                        const dbEditorState = convertFromRaw(JSON.parse(bookReview.content));
                        contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

                    } else {
                        contentToFill = EditorState.createEmpty(decoratorLink)
                    }
                    bookReview.content = contentToFill;
                    this.setState({
                        bookReviewData: bookReview,
                    });
                })
                .catch(e => {
                    console.error('Error getting book review: ', e)
                })
        } else {
            history.push('/admin');
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
        return (
            <div>
                <BookReviewEditor save={this.saveBookReview} delete={this.deleteBookReview} bookReviewData={this.state.bookReviewData} />
            </div>
        )
    }

}

export default EditBookReview;
