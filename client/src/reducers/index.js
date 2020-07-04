import { combineReducers } from 'redux';
import bookReviewReducer from "./bookReviewReducer";

export default combineReducers({
	bookReviews: bookReviewReducer
})
