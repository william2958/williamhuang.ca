import axios from "../utils/axios";
import {toast} from "react-toastify";

import {
	GET_FIRST_PAGE_MONTHLY_FIVES,
	GET_MONTHLY_FIVE_DETAILS,
	GET_EDIT_MONTHLY_FIVE_DETAILS,
	ADMIN_MONTHLY_FIVE_LOADED,
	NUM_RECENT_MONTHLY_FIVES_LOADED
} from "./types";
import moment from "moment";

export const getYear = (year) => async (dispatch) => {
	try {

		const response = (await axios.get(`/monthlyFive/getRecentMonthlyFives?year=${year}`)).data;

		let mostRecentMonthlyFive = null;
		let monthlyFives = response.allMonthlyFives;
		// if (response.allMonthlyFives.length) {
		// 	mostRecentMonthlyFive = monthlyFives.shift();
		// }

		dispatch({
			type: GET_FIRST_PAGE_MONTHLY_FIVES,
			payload: {
				monthlyFives,
				mostRecentMonthlyFive
			}
		})

	} catch (error) {
		toast.error('There was an error getting the first page.')
	}

};

export const getMonthlyFiveDetails = (id, isId, isEdit = false) => async (dispatch) => {
	try {
		const urlString = isId
			? `/monthlyFive/getMonthlyFive?monthlyFiveId=${id}`
			: `/monthlyFive/getMonthlyFiveFromString?urlString=${id}`;
		const response = (await axios.get(urlString)).data;
		const monthlyFive = response.monthlyFive;

		const formattedDate = monthlyFive.publishDate ? moment(monthlyFive.publishDate).format('MMMM Do YYYY') : null;

		const monthlyFiveDetail = {
			...monthlyFive,
			publishDate: formattedDate
		};

		if (isEdit) {
			dispatch({
				type: GET_EDIT_MONTHLY_FIVE_DETAILS,
				payload: monthlyFiveDetail
			})
		} else {
			dispatch({
				type: GET_MONTHLY_FIVE_DETAILS,
				payload: monthlyFiveDetail
			})
		}

	} catch (err) {
		console.error('There was an error fetching that book detail: ', err);
	}
};

export const getAdminMonthlyFive = (isPublished) => async (dispatch) => {
	try {

		const response = (await axios.get(`/monthlyFive/getMonthlyFiveAdmin?isPublished=${isPublished}`)).data;

		dispatch({
			type: ADMIN_MONTHLY_FIVE_LOADED,
			payload: {
				isPublished,
				monthlyFives: response.monthlyFives
			}
		})

	} catch (e) {
		toast.error('Could not create published monthlyFives.');
	}
}

export const getNumRecentMonthlyFives = (numRecent) => async (dispatch) => {
	try {
		const response = (await axios.get(`/monthlyFive/getNumRecentMonthlyFives?numMonthlyFives=${numRecent}`)).data;

		if (response.allMonthlyFives.length) {
			dispatch({
				type: NUM_RECENT_MONTHLY_FIVES_LOADED,
				payload: response.allMonthlyFives
			})
		} else {
			dispatch({
				type: NUM_RECENT_MONTHLY_FIVES_LOADED,
				payload: null
			})
		}

	} catch (error) {
		toast.error('Error loading data.')
	}
}
