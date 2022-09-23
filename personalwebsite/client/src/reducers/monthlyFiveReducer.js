import _ from 'lodash';
import {
	ADMIN_MONTHLY_FIVE_LOADED,
	GET_MONTHLY_FIVE_DETAILS,
	GET_EDIT_MONTHLY_FIVE_DETAILS,
	GET_FIRST_PAGE_MONTHLY_FIVES,
	NUM_RECENT_MONTHLY_FIVES_LOADED, NEXT_PAGE_MONTHLY_FIVES_LOADED
} from "../actions/types";

const INITIAL_STATE = {
	monthlyFives: [],
	mostRecentMonthlyFive: null,
	anotherPage: false,
	numToSkip: 0,
	monthlyFiveDetails: null,
	editMonthlyFiveDetails: {},
	draftMonthlyFives: [],
	publishedMonthlyFives: [],
	recentMonthlyFive: null
};

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case GET_FIRST_PAGE_MONTHLY_FIVES:
			return {
				...state,
				...action.payload
			};
		case NEXT_PAGE_MONTHLY_FIVES_LOADED:
			return {
				...state,
				...action.payload
			}
		case GET_MONTHLY_FIVE_DETAILS:
			return {
				...state,
				monthlyFiveDetails: _.cloneDeep(action.payload)
			};
		case GET_EDIT_MONTHLY_FIVE_DETAILS:
			return {
				...state,
				editMonthlyFiveDetails: _.cloneDeep(action.payload)
			}
		case ADMIN_MONTHLY_FIVE_LOADED:
			if (action.payload.isPublished) {
				return {
					...state,
					publishedMonthlyFives: _.cloneDeep(action.payload.monthlyFives)
				}
			} else {
				return {
					...state,
					draftMonthlyFives: _.cloneDeep(action.payload.monthlyFives)
				}
			}
		case NUM_RECENT_MONTHLY_FIVES_LOADED:
			return {
				...state,
				recentMonthlyFive: _.cloneDeep(action.payload)
			}
		default:
			return state;

	}

};
