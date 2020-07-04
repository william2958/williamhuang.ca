import axios from "../utils/axios";
import {toast} from "react-toastify";
import {GET_FIRST_PAGE_BOOK_REVIEWS} from "./types";

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
