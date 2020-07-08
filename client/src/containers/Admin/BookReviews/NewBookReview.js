import React from 'react';
import { toast } from 'react-toastify';

import BookReviewEditor from "./BookReviewEditor";
import axios from "../../../utils/axios";

class NewBookReview extends React.Component {

    createBookReview = async (reviewData) => {
        try {
            const response = (await axios.post('/bookReview/createBookReview', reviewData)).data;
            if (response) {
                const reviewId = response.bookReviewId;
                toast.success('Successfully created review.');
                this.props.history.push('/admin/bookReview/edit/' + reviewId);
            } else {
                toast.error('Could not create book review.');
            }
        } catch (e) {
            console.error('There was an error creating the book review');
        }
    };

    cancelCreate = () => {
        toast.success('Cancelled book review.');
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <BookReviewEditor save={this.createBookReview} delete={this.cancelCreate} />
            </div>
        )
    }

}

export default {
    component: NewBookReview
};
