import _ from 'lodash';
import { EditorState } from 'draft-js';
import {GET_BOOK_REVIEW_DETAILS, GET_FIRST_PAGE_BOOK_REVIEWS} from "../actions/types";
import {decoratorLink} from "../components/RichTextEditor/linkDecorator";

const INITIAL_STATE = {
	bookReviews: [],
	anotherPage: false,
	numToSkip: 0,
	bookReviewDetails: EditorState.createEmpty(decoratorLink)
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
		default:
			return state;

	}

};
