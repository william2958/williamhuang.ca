import _ from 'lodash';
import {
	GET_FIRST_PAGE_PROJECTS,
	GET_PROJECT_DETAILS
} from "../actions/types";

const INITIAL_STATE = {
	projects: [],
	anotherPage: false,
	numToSkip: 0,
	projectDetails: {}
};

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case GET_FIRST_PAGE_PROJECTS:
			return {
				...state,
				...action.payload
			};
		case GET_PROJECT_DETAILS:
			return {
				...state,
				projectDetails: _.cloneDeep(action.payload)
			};
		default:
			return state;

	}

};
