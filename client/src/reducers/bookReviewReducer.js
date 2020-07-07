import _ from 'lodash';
import {
	ADMIN_BOOK_REVIEW_LOADED,
	GET_BOOK_REVIEW_DETAILS,
	GET_EDIT_BOOK_REVIEW_DETAILS,
	GET_FIRST_PAGE_BOOK_REVIEWS, NUM_RECENT_BOOK_REVIEWS_LOADED
} from "../actions/types";

const INITIAL_STATE = {
	bookReviews: [],
	anotherPage: false,
	numToSkip: 0,
	bookReviewDetails: null,
	editBookReviewDetails: {},
	draftBookReviews: [],
	publishedBookReviews: [],
	recentBookReviews: []
};

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case GET_FIRST_PAGE_BOOK_REVIEWS:
			return {
				...state,
				...action.payload
			};
		case GET_BOOK_REVIEW_DETAILS:
			return {
				...state,
				bookReviewDetails: _.cloneDeep(action.payload)
			};
		case GET_EDIT_BOOK_REVIEW_DETAILS:
			return {
				...state,
				editBookReviewDetails: _.cloneDeep(action.payload)
			}
		case ADMIN_BOOK_REVIEW_LOADED:
			if (action.payload.isPublished) {
				return {
					...state,
					publishedBookReviews: _.cloneDeep(action.payload.bookReviews)
				}
			} else {
				return {
					...state,
					draftBookReviews: _.cloneDeep(action.payload.bookReviews)
				}
			}
		case NUM_RECENT_BOOK_REVIEWS_LOADED:
			return {
				...state,
				recentBookReviews: _.cloneDeep(action.payload)
			}
		default:
			return state;

	}

};
