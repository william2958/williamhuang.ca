import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducers from '../client/src/reducers';

export default (req) => {

	const axiosInstance = axios.create({
		baseURL: process.env.NODE_ENV === 'production'
			? 'https://williamhuang.ca/api'
			: 'http://localhost:8000/api/',
		headers: { cookie: req.get('cookie') || '' }
	})

	const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

	return store;
}
