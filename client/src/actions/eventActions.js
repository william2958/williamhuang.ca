import axios from "../utils/axios";
import {toast} from "react-toastify";

import {
	GET_FIRST_PAGE_EVENTS,
	GET_EVENT_DETAILS,
	GET_EDIT_EVENT_DETAILS,
	ADMIN_EVENT_LOADED,
	NUM_RECENT_EVENTS_LOADED
} from "./types";
import moment from "moment";

export const getFirstPageEvents = (option) => async (dispatch) => {

	try {

		const response = (await axios.get(`/event/getRecentEvents`)).data;

		const currentEvents = [];
		const pastEvents = [];

		const todayDate = new Date();
		for (let event of response.allEvents) {
			const parsedDate = new Date(event.eventDate);
			if (parsedDate > todayDate) {
				currentEvents.push(event)
			} else {
				pastEvents.push(event)
			}
		}

		dispatch({
			type: GET_FIRST_PAGE_EVENTS,
			payload: {
				currentEvents,
				pastEvents,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			}
		})

	} catch (error) {
		toast.error('There was an error getting the first page.')
	}

};

export const getEventDetails = (id, isId, isEdit = false) => async (dispatch) => {
	try {
		const urlString = isId
			? `/event/getEvent?eventId=${id}`
			: `/event/getEventFromString?urlString=${id}`;
		const response = (await axios.get(urlString)).data;
		const event = response.event;

		const formattedDate = event.publishDate ? moment(event.publishDate).format('MMMM Do YYYY') : null;

		const eventDetail = {
			...event,
			publishDate: formattedDate
		};

		if (isEdit) {
			dispatch({
				type: GET_EDIT_EVENT_DETAILS,
				payload: eventDetail
			})
		} else {
			dispatch({
				type: GET_EVENT_DETAILS,
				payload: eventDetail
			})
		}

	} catch (err) {
		console.error('There was an error fetching that book detail: ', err);
	}
};

export const getAdminEvent = (isPublished) => async (dispatch) => {
	try {

		const response = (await axios.get(`/event/getEventAdmin?isPublished=${isPublished}`)).data;

		dispatch({
			type: ADMIN_EVENT_LOADED,
			payload: {
				isPublished,
				events: response.events
			}
		})

	} catch (e) {
		toast.error('Could not create published events.');
	}
}

export const getNumRecentEvents = (numRecent) => async (dispatch) => {
	try {
		const response = (await axios.get(`/event/getNumRecentEvents?numEvents=${numRecent}`)).data;
		dispatch({
			type: NUM_RECENT_EVENTS_LOADED,
			payload: response.allEvents
		})

	} catch (error) {
		toast.error('Error loading data.')
	}
}
