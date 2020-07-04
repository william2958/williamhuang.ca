import React from 'react';
import axios from '../../../utils/axios';
import {toast} from "react-toastify";
import BookReviewPreview from "../../BookReviews/BookReviewPreview";

class AdminDrafts extends React.Component {

    state = {
        drafts: []
    };

    componentDidMount() {
        this.getDraftReviews();
    }

    getDraftReviews = async () => {
        try {

            const response = (await axios.get('/bookReview/getBookReviewAdmin?isPublished=false')).data;

            this.setState({
                drafts: response.bookReviews
            });

        } catch (e) {
            toast.error('Could not create published reviews.');
        }
    };

    render() {

        return (
            <div className="container">
                <div className="bookReviewList row">
                    {
                        this.state.drafts.map(bookReview => (
                            <BookReviewPreview bookReview={bookReview} key={bookReview._id} editable={true} />
                        ))
                    }
                </div>
            </div>
        )
    }

}

export default AdminDrafts;
