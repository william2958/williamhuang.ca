import { combineReducers } from 'redux';
import bookReviewReducer from "./bookReviewReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";

export default combineReducers({
	bookReviews: bookReviewReducer,
	projects: projectReducer,
	auth: authReducer
})
