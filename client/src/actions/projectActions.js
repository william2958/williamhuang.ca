import axios from "../utils/axios";
import {toast} from "react-toastify";

import {GET_FIRST_PAGE_PROJECTS} from "./types";


export const getFirstPageProjects = (option) => async (dispatch) => {
	try {

		let filteredCategory = option;
		if (filteredCategory === 'all') {
			filteredCategory = '';
		}

		const response = (await axios.get(`/project/getRecentProjects?category=${filteredCategory}`)).data;

		dispatch({
			type: GET_FIRST_PAGE_PROJECTS,
			payload: {
				projects: response.allProjects,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			}
		})

	} catch (error) {
		toast.error('There was an error getting the first page.')
	}
};
