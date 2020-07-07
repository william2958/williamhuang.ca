import _ from 'lodash';
import {
	ADMIN_PROJECT_LOADED,
	GET_EDIT_PROJECT_DETAILS,
	GET_FIRST_PAGE_PROJECTS,
	GET_PROJECT_DETAILS,
	NUM_RECENT_PROJECTS_LOADED,
	PROJECT_SPOTLIGHT_LOADED
} from "../actions/types";

const INITIAL_STATE = {
	projects: [],
	anotherPage: false,
	numToSkip: 0,
	projectDetails: {},

	editProjectDetails: {},
	draftProjects: [],
	publishedProjects: [],

	recentProjects: [],
	spotlight: null
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
		case GET_EDIT_PROJECT_DETAILS:
			return {
				...state,
				editProjectDetails: _.cloneDeep(action.payload)
			}
		case PROJECT_SPOTLIGHT_LOADED:
			return {
				...state,
				spotlight: _.cloneDeep(action.payload)
			}
		case ADMIN_PROJECT_LOADED:
			if (action.payload.isPublished) {
				return {
					...state,
					publishedProjects: _.cloneDeep(action.payload.projects)
				}
			} else {
				return {
					...state,
					draftProjects: _.cloneDeep(action.payload.projects)
				}
			}
		case NUM_RECENT_PROJECTS_LOADED:
			return {
				...state,
				recentProjects: _.cloneDeep(action.payload)
			}
		default:
			return state;

	}

};
