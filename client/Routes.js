import React from 'react';

import App from './App';
import BookReviews from "./src/containers/BookReviews";
import PublicWrapper from './src/containers/PublicWrapper';

export default [
	{
		...App,
		routes: [
			{
				...PublicWrapper,
				routes: [
					{
						...BookReviews,
						path: '/bookReviews'
					}
				]
			}
		]
	}
]
