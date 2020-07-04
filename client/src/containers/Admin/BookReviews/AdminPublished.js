import React from 'react';
import axios from '../../../utils/axios';
import {toast} from "react-toastify";
import BookReviewPreview from "../../BookReviews/BookReviewPreview";
import {AdminPublishedWrapper} from "./styles";

class AdminPublished extends React.Component {

    state = {
        published: []
    };

    componentDidMount() {
        this.getPublishedBooks();
    }

    getPublishedBooks = async () => {
        try {

            const response = (await axios.get('/bookReview/getBookReviewAdmin?isPublished=true')).data;

            this.setState({
                published: response.bookReviews
            });

        } catch (e) {
            toast.error('Could not create published reviews.');
        }
    };

    render() {

        return (
            <AdminPublishedWrapper className="container">
                <div className="bookReviewList row">
                    {
                        this.state.published.map(bookReview => (
                            <BookReviewPreview bookReview={bookReview} key={bookReview._id} editable={true} />
                        ))
                    }
                </div>
            </AdminPublishedWrapper>
        )
    }

}

export default AdminPublished;
