import _ from 'lodash';
import {
	ADMIN_EVENT_LOADED,
	GET_EVENT_DETAILS,
	GET_EDIT_EVENT_DETAILS,
	GET_FIRST_PAGE_EVENTS,
	NUM_RECENT_EVENTS_LOADED, NEXT_PAGE_EVENTS_LOADED
} from "../actions/types";

const INITIAL_STATE = {
	currentEvents: [],
	pastEvents: [],

	anotherPage: false,
	numToSkip: 0,
	eventDetails: null,
	editEventDetails: {},
	draftEvents: [],
	publishedEvents: [],
	recentEvents: []
};

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case GET_FIRST_PAGE_EVENTS:
			return {
				...state,
				...action.payload
			};
		case NEXT_PAGE_EVENTS_LOADED:
			return {
				...state,
				...action.payload
			}
		case GET_EVENT_DETAILS:
			return {
				...state,
				eventDetails: _.cloneDeep(action.payload)
			};
		case GET_EDIT_EVENT_DETAILS:
			return {
				...state,
				editEventDetails: _.cloneDeep(action.payload)
			}
		case ADMIN_EVENT_LOADED:
			if (action.payload.isPublished) {
				return {
					...state,
					publishedEvents: _.cloneDeep(action.payload.events)
				}
			} else {
				return {
					...state,
					draftEvents: _.cloneDeep(action.payload.events)
				}
			}
		case NUM_RECENT_EVENTS_LOADED:
			return {
				...state,
				recentEvents: _.cloneDeep(action.payload)
			}
		default:
			return state;

	}

};
