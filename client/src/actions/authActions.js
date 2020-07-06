import { SET_USER } from './types';
import axios from "../utils/axios";

export const fetchCurrentUser = () => async (dispatch) => {

	try {
		const res = await axios.get('/auth/getAdmin');

		console.log('response: ', res);

		dispatch({
			type: SET_USER,
			payload: res.user
		})
	} catch (e) {
		dispatch({
			type: SET_USER,
			payload: false
		})
	}

}

export const setUser = (user) => async (dispatch) => {
	dispatch({
		type: SET_USER,
		payload: user
	})
}

