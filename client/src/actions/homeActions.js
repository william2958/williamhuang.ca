import axios from "../utils/axios";
import {toast} from "react-toastify";
import {HOME_HIGHLIGHT_LOADED} from "./types";


export const getHomeHighlight = () => async (dispatch) => {
	try {
		const response = (await axios.get('/highlight/getHighlight')).data;
		if (response && response.highlightObject) {
			dispatch({
				type: HOME_HIGHLIGHT_LOADED,
				payload: {
					type: response.highlight.dataType,
					highlight: response.highlightObject
				},
			})
		}
	} catch (error) {
		toast.error('Error loading highlight data.')
	}
}
