import axios from "../utils/axios";
import {toast} from "react-toastify";

import {
	GET_FIRST_PAGE_GUIDES,
	GET_GUIDE_DETAILS,
	GET_EDIT_GUIDE_DETAILS,
	ADMIN_GUIDE_LOADED,
	NUM_RECENT_GUIDES_LOADED, NEXT_PAGE_GUIDES_LOADED
} from "./types";
import moment from "moment";

export const getFirstPageGuides = (option) => async (dispatch) => {

	try {

		let filteredCategory = option;
		if (filteredCategory === 'all') {
			filteredCategory = '';
		}

		const response = (await axios.get(`/guide/getRecentGuides?category=${filteredCategory}`)).data;

		dispatch({
			type: GET_FIRST_PAGE_GUIDES,
			payload: {
				guides: response.allGuides,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			}
		})
	} catch (error) {
		toast.error('There was an error getting the first page.')
	}

};

export const getNextPageGuides = (option = '') => async (dispatch, getState) => {
	try {

		let filteredCategory = option;
		if (filteredCategory === 'all') {
			filteredCategory = '';
		}

		const state = getState().guides;
		const currGuides = state.guides;
		const numToSkip = state.numToSkip;

		const newGuides = [...currGuides];
		const response = (await axios.get(`/guide/getRecentGuides?numSkip=${numToSkip}&category=${filteredCategory}`)).data;
		newGuides.push(...response.allGuides);

		dispatch({
			type: NEXT_PAGE_GUIDES_LOADED,
			payload: {
				guides: newGuides,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			}
		})
	} catch (error) {
		toast.error('There was an error getting the next page.')
	}
}

export const getGuideDetails = (id, isId, isEdit = false) => async (dispatch) => {
	try {
		const urlString = isId
			? `/guide/getGuide?guideId=${id}`
			: `/guide/getGuideFromString?urlString=${id}`;
		const response = (await axios.get(urlString)).data;
		const guide = response.guide;

		const formattedDate = guide.publishDate ? moment(guide.publishDate).format('MMMM Do YYYY') : null;

		const guideDetail = {
			...guide,
			publishDate: formattedDate
		};

		if (isEdit) {
			dispatch({
				type: GET_EDIT_GUIDE_DETAILS,
				payload: guideDetail
			})
		} else {
			dispatch({
				type: GET_GUIDE_DETAILS,
				payload: guideDetail
			})
		}

	} catch (err) {
		console.error('There was an error fetching that book detail: ', err);
	}
};

export const getAdminGuide = (isPublished) => async (dispatch) => {
	try {

		const response = (await axios.get(`/guide/getGuideAdmin?isPublished=${isPublished}`)).data;

		dispatch({
			type: ADMIN_GUIDE_LOADED,
			payload: {
				isPublished,
				guides: response.guides
			}
		})

	} catch (e) {
		toast.error('Could not create published guides.');
	}
}

export const getNumRecentGuides = (numRecent) => async (dispatch) => {
	try {
		const response = (await axios.get(`/guide/getNumRecentGuides?numGuides=${numRecent}`)).data;
		dispatch({
			type: NUM_RECENT_GUIDES_LOADED,
			payload: response.allGuides
		})

	} catch (error) {
		toast.error('Error loading data.')
	}
}
