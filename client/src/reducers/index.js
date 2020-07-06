import { combineReducers } from 'redux';
import bookReviewReducer from "./bookReviewReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
	bookReviews: bookReviewReducer,
	projects: projectReducer
})
