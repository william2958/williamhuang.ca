// Startup point for the client side application
import '../public/favicon-16x16.png';
import '../public/favicon-32x32.png';
import '../public/apple-touch-icon.png';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './src/reducers';
import axiosInstance from './src/utils/axios';
const store = createStore(
	reducers,
	window.INITIAL_STATE,
	applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

console.log('hydrating...');

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<div>{renderRoutes(Routes)}</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root"));
