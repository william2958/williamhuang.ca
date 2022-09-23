import { SET_USER } from './types';
import axios from "../utils/axios";

export const fetchCurrentUser = () => async (dispatch, getState, api) => {

	try {
		const res = (await api.get('/auth/getAdmin')).data;

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

