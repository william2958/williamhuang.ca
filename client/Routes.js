import React from 'react';

import App from './App';
import BookReviews from "./src/containers/BookReviews";

export default [
	{
		...App,
		routes: [
			{
				...BookReviews,
				path: '/bookReviews'
			}
		]
	}
]
