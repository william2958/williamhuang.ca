import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookReviewPreview from "./BookReviewPreview";
import Dropdown from "../../components/Dropdown";
import {BOOK_REVIEW_CATEGORY_OPTIONS} from "../../constants";
import {H4, H5} from "../../styles/typography/Headers";
import {BookReviewsEmpty, BookReviewsWrapper} from "./styles";
import {GutteredRow, LoadMoreButtonContainer} from "../../styles/globalStyles";
import {getFirstPageBookReviews, getNextPageBookReviews} from "../../actions";
import {Helmet} from "react-helmet";

class BookReviews extends Component {

    state = {
        filterCategory: 'all'
    };

    componentDidMount() {
        this.props.getFirstPageBookReviews('all');
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }

    loadNextPage = () => {
        let filteredCategory = this.state.filterCategory;
        if (filteredCategory === 'all') {
            filteredCategory = '';
        }

        this.props.getNextPageBookReviews(filteredCategory);
    };

    selectFilter = (option) => {
        if (option === this.state.filterCategory) {
            return;
        } else {
            this.props.getFirstPageBookReviews(option);
        }
        this.setState({
            filterCategory: option
        });
    };

    render() {

        const { filterCategory } = this.state;
        const { anotherPage, bookReviews } = this.props;

        return (
            <BookReviewsWrapper className="container">
                <Helmet>
                    <title>{`Book Reviews | WH`}</title>
                    <meta property="og:title" content={`Book Reviews | WH`} />
                    <meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />
                    <meta property="description" content="Explore my blog, reviews, guides, and more." />
                    <meta property="og:url" content={`https://williamhuang.ca/bookReviews`} />
                </Helmet>
                <div className="bookReviewHeader row">
                    <H4>All Books</H4>
                    <div className="bookReviewFilters">
                        <Dropdown value={filterCategory} options={['all', ...BOOK_REVIEW_CATEGORY_OPTIONS]} onChange={this.selectFilter} />
                    </div>
                </div>
                <GutteredRow className="row no-gutters">
                    {
                        bookReviews.length ? bookReviews.map(bookReview => (
                            <BookReviewPreview bookReview={bookReview} key={bookReview._id} />
                        )) : (
                            <BookReviewsEmpty>
                                <H5>No reviews for this category yet. Sorry!</H5>
                            </BookReviewsEmpty>
                        )
                    }
                </GutteredRow>
                {anotherPage && (
                    <LoadMoreButtonContainer>
                        <button onClick={this.loadNextPage}>Load More</button>
                    </LoadMoreButtonContainer>
                )}
            </BookReviewsWrapper>
        )
    }

}

function mapStateToProps(state) {
    return {
        bookReviews: state.bookReviews.bookReviews,
        anotherPage: state.bookReviews.anotherPage
    }
}

function loadData(store) {
    return store.dispatch(getFirstPageBookReviews('all'))
}

export default {
    component: connect(mapStateToProps, { getFirstPageBookReviews, getNextPageBookReviews })(BookReviews),
    loadData
};
