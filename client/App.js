import React from 'react';
import { renderRoutes } from 'react-router-config';
import {ToastContainer, Zoom} from "react-toastify";
import theme from "./src/styles/mainTheme";
import {ThemeProvider} from "styled-components";

import './react-toast.css';
import './App.css';
import {fetchCurrentUser} from "./src/actions/authActions";
import {BootStrapBasicStyles} from "./BootStrapBasicStyles";

const App = ({ route }) => {
	return (
		<ThemeProvider theme={theme}>
			<BootStrapBasicStyles>
				{/*<Header />*/}
				{renderRoutes(route.routes)}
				<ToastContainer
					pauseOnFocusLoss={false}
					autoClose={1000}
					transition={Zoom}
				/>
			</BootStrapBasicStyles>
		</ThemeProvider>
	)
};

export default {
	component: App,
	loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
