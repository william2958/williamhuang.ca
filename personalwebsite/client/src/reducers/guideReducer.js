import _ from 'lodash';
import {
	ADMIN_GUIDE_LOADED,
	GET_GUIDE_DETAILS,
	GET_EDIT_GUIDE_DETAILS,
	GET_FIRST_PAGE_GUIDES,
	NUM_RECENT_GUIDES_LOADED, NEXT_PAGE_GUIDES_LOADED
} from "../actions/types";

const INITIAL_STATE = {
	guides: [],
	anotherPage: false,
	numToSkip: 0,
	guideDetails: null,
	editGuideDetails: {},
	draftGuides: [],
	publishedGuides: [],
	recentGuides: []
};

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case GET_FIRST_PAGE_GUIDES:
			return {
				...state,
				...action.payload
			};
		case NEXT_PAGE_GUIDES_LOADED:
			return {
				...state,
				...action.payload
			}
		case GET_GUIDE_DETAILS:
			return {
				...state,
				guideDetails: _.cloneDeep(action.payload)
			};
		case GET_EDIT_GUIDE_DETAILS:
			return {
				...state,
				editGuideDetails: _.cloneDeep(action.payload)
			}
		case ADMIN_GUIDE_LOADED:
			if (action.payload.isPublished) {
				return {
					...state,
					publishedGuides: _.cloneDeep(action.payload.guides)
				}
			} else {
				return {
					...state,
					draftGuides: _.cloneDeep(action.payload.guides)
				}
			}
		case NUM_RECENT_GUIDES_LOADED:
			return {
				...state,
				recentGuides: _.cloneDeep(action.payload)
			}
		default:
			return state;

	}

};
