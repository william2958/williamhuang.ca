import React from 'react';
import { renderRoutes } from 'react-router-config';
import {ToastContainer, Zoom} from "react-toastify";
import theme from "./src/styles/mainTheme";
import {ThemeProvider} from "styled-components";

const App = ({ route }) => {
	return (
		<ThemeProvider theme={theme}>
			{/*<Header />*/}
			<h1>App</h1>
			{renderRoutes(route.routes)}
			<ToastContainer
				pauseOnFocusLoss={false}
				autoClose={1000}
				transition={Zoom}
			/>
		</ThemeProvider>
	)
};

export default {
	component: App,
	// loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
