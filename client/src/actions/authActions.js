import { SET_USER } from './types';
import axios from "../utils/axios";

export const fetchCurrentUser = () => async (dispatch, getState, api) => {

	try {
		const res = (await api.get('/auth/getAdmin')).data;

		console.log('response: ', res);

		dispatch({
			type: SET_USER,
			payload: res.user
		})
	} catch (e) {
		console.error('error getting current user: ', e);
		dispatch({
			type: SET_USER,
			payload: false
		})
	}

}

export const setUser = (user) => async (dispatch) => {
	console.log('setting use: ', user);
	dispatch({
		type: SET_USER,
		payload: user
	})
}

