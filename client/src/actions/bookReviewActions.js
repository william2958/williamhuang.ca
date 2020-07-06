import axios from "../utils/axios";
import {toast} from "react-toastify";

import {
	GET_FIRST_PAGE_BOOK_REVIEWS,
	GET_BOOK_REVIEW_DETAILS
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

export const getBookReviewDetails = (id, isId) => async (dispatch) => {
	try {
		const urlString = isId
			? `/bookReview/getBookReview?bookReviewId=${id}`
			: `/bookReview/getBookReviewFromString?urlString=${id}`;
		const response = (await axios.get(urlString)).data;
		const bookReview = response.bookReview;

		const {
			title,
			author,
			category,
			coverURL,
			rating,
			publishDate,
			recommended,
			content
		} = bookReview;

		const formattedDate = publishDate ? moment(publishDate).format('MMMM Do YYYY') : null;

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
			title,
			author,
			category,
			coverURL,
			rating,
			publishDate: formattedDate,
			content,
			recommended
		};

		dispatch({
			type: GET_BOOK_REVIEW_DETAILS,
			payload: bookReviewDetail
		})

	} catch (err) {
		console.error('There was an error fetching that book detail: ', err);
	}
};
