import {GET_FIRST_PAGE_BOOK_REVIEWS} from "../actions/types";

const INITIAL_STATE = {
	bookReviews: [],
	anotherPage: false,
	numToSkip: 0
};

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case GET_FIRST_PAGE_BOOK_REVIEWS:
			return {
				...state,
				...action.payload
			};
		default:
			return state;

	}

};
