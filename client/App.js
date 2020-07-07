import React from 'react';
import { renderRoutes } from 'react-router-config';
import {ToastContainer, Zoom} from "react-toastify";
import theme from "./src/styles/mainTheme";
import {ThemeProvider} from "styled-components";

import './react-toast.css';
import './App.css';
import {fetchCurrentUser} from "./src/actions/authActions";
import {Helmet} from "react-helmet";

const App = ({ route }) => {
	return (
		<ThemeProvider theme={theme}>

			<Helmet>
				<title>{'William Huang'}</title>
				<meta property="og:title" content="Home | William Huang" />
				<meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />
				<meta property="description" content="Explore my blog, reviews, guides, and more." />
				<meta property="og:url" content="https://www.williamhuang.ca" />
			</Helmet>
			<div>
				{/*<Header />*/}
				{renderRoutes(route.routes)}
				<ToastContainer
					pauseOnFocusLoss={false}
					autoClose={1000}
					transition={Zoom}
				/>
			</div>
		</ThemeProvider>
	)
};

export default {
	component: App,
	loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
