import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookReviewPreview from "./BookReviewPreview";
import Dropdown from "../../components/Dropdown";
import {BOOK_REVIEW_CATEGORY_OPTIONS} from "../../constants";
import {H4} from "../../styles/typography/Headers";
import {BookReviewsWrapper} from "./styles";
import {GutteredRow, LoadMoreButtonContainer} from "../../styles/globalStyles";
import {getFirstPageBookReviews} from "../../actions";

class BookReviews extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookReviews: [],
            anotherPage: false,
            numToSkip: 0,
            filterCategory: 'all'
        };

    }

    componentDidMount() {
        this.props.getFirstPageBookReviews('all');
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }

    loadNextPage = () => {
        // try {
        //     const { bookReviews, numToSkip } = this.state;
        //
        //     let filteredCategory = this.state.filterCategory;
        //     if (filteredCategory === 'all') {
        //         filteredCategory = '';
        //     }
        //
        //     const newBookReviews = [...bookReviews];
        //     const response = (await axios.get(`/bookReview/getRecentBookReviews?numSkip=${numToSkip}&category=${filteredCategory}`)).data;
        //     newBookReviews.push(...response.allReviews);
        //
        //     this.setState({
        //         bookReviews: newBookReviews,
        //         anotherPage: response.anotherPage,
        //         numToSkip: response.numToSkip
        //     });
        //
        // } catch (error) {
        //     toast.error('There was an error getting the first page.')
        // }
    };

    selectFilter(option) {
        // if (option === this.state.filterCategory) {
        //     return;
        // } else {
        //     this.props.getFirstPageBookReviews('all');
        // }
        // this.setState({
        //     filterCategory: option
        // });
    };

    render() {

        const { filterCategory } = this.state;
        const { anotherPage, bookReviews } = this.props;

        return (
            <BookReviewsWrapper className="container">
                <div className="bookReviewHeader row">
                    <H4>All Books</H4>
                    <div className="bookReviewFilters">
                        <Dropdown value={filterCategory} options={['all', ...BOOK_REVIEW_CATEGORY_OPTIONS]} onChange={this.selectFilter} />
                    </div>
                </div>
                <GutteredRow className="row no-gutters">
                    {
                        bookReviews.map(bookReview => (
                            <BookReviewPreview bookReview={bookReview} key={bookReview._id} />
                        ))
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
    component: connect(mapStateToProps, { getFirstPageBookReviews })(BookReviews),
    loadData
};
