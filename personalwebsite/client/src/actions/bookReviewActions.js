import axios from "../utils/axios";
import {toast} from "react-toastify";

import {
	GET_FIRST_PAGE_BOOK_REVIEWS,
	GET_BOOK_REVIEW_DETAILS,
	GET_EDIT_BOOK_REVIEW_DETAILS,
	ADMIN_BOOK_REVIEW_LOADED,
	NUM_RECENT_BOOK_REVIEWS_LOADED,
	NEXT_PAGE_BOOK_REVIEWS_LOADED,
} from "./types";
import moment from "moment";

export const getFirstPageBookReviews = (option) => async (dispatch) => {

	try {

		let filteredCategory = option;
		if (filteredCategory === 'all') {
			filteredCategory = '';
		}

		const response = (await axios.get(`/bookReview/getRecentBookReviews?category=${filteredCategory}`)).data;

		dispatch({
			type: GET_FIRST_PAGE_BOOK_REVIEWS,
			payload: {
				bookReviews: response.allReviews,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			}
		})
	} catch (error) {
		toast.error('There was an error getting the first page.')
	}

};

export const getNextPageBookReviews = (option = '') => async (dispatch, getState) => {
	try {

		let filteredCategory = option;
		if (filteredCategory === 'all') {
			filteredCategory = '';
		}

		const state = getState().bookReviews;
		const currBookReviews = state.bookReviews;
		const numToSkip = state.numToSkip;

		const newBookReviews = [...currBookReviews];
		const response = (await axios.get(`/bookReview/getRecentBookReviews?numSkip=${numToSkip}&category=${filteredCategory}`)).data;
		newBookReviews.push(...response.allReviews);

		dispatch({
			type: NEXT_PAGE_BOOK_REVIEWS_LOADED,
			payload: {
				bookReviews: newBookReviews,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			}
		})
	} catch (error) {
		toast.error('There was an error getting the next page.')
	}
}

export const getBookReviewDetails = (id, isId, isEdit = false) => async (dispatch) => {
	try {
		const urlString = isId
			? `/bookReview/getBookReview?bookReviewId=${id}`
			: `/bookReview/getBookReviewFromString?urlString=${id}`;
		const response = (await axios.get(urlString)).data;
		const bookReview = response.bookReview;

		const formattedDate = bookReview.publishDate ? moment(bookReview.publishDate).format('MMMM Do YYYY') : null;

		// let contentToFill;
		// if (IsValidJSONString(bookReview.content)) {
		//
		// 	const dbEditorState = convertFromRaw(JSON.parse(bookReview.content));
		// 	contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);
		//
		// } else {
		// 	contentToFill = EditorState.createEmpty(decoratorLink)
		// }

		const bookReviewDetail = {
			...bookReview,
			publishDate: formattedDate
		};

		if (isEdit) {
			dispatch({
				type: GET_EDIT_BOOK_REVIEW_DETAILS,
				payload: bookReviewDetail
			})
		} else {
			dispatch({
				type: GET_BOOK_REVIEW_DETAILS,
				payload: bookReviewDetail
			})
		}

	} catch (err) {
		console.error('There was an error fetching that book detail: ', err);
	}
};

export const getAdminBookReview = (isPublished) => async (dispatch) => {
	try {

		const response = (await axios.get(`/bookReview/getBookReviewAdmin?isPublished=${isPublished}`)).data;

		dispatch({
			type: ADMIN_BOOK_REVIEW_LOADED,
			payload: {
				isPublished,
				bookReviews: response.bookReviews
			}
		})

	} catch (e) {
		toast.error('Could not create published reviews.');
	}
}

export const getNumRecentBookReviews = (numRecent) => async (dispatch) => {
	try {
		const response = (await axios.get(`/bookReview/getNumRecentBookReviews?numReviews=${numRecent}`)).data;

		dispatch({
			type: NUM_RECENT_BOOK_REVIEWS_LOADED,
			payload: response.allReviews
		})

	} catch (error) {
		toast.error('Error loading data.')
	}
}
