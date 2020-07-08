import { combineReducers } from 'redux';
import bookReviewReducer from "./bookReviewReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import guideReducer from "./guideReducer";
import homeReducer from "./homeReducer";
import monthlyFiveReducer from "./monthlyFiveReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
	bookReviews: bookReviewReducer,
	projects: projectReducer,
	auth: authReducer,
	guides: guideReducer,
	home: homeReducer,
	monthlyFives: monthlyFiveReducer,
	events: eventReducer
})
