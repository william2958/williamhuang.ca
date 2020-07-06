import React from 'react';

import App from './App';

import BookReviews from "./src/containers/BookReviews";
import BookReviewDetail from './src/containers/BookReviews/BookReviewDetail';

import Projects from './src/containers/Projects';

import PublicWrapper from './src/containers/PublicWrapper';

export default [
	{
		...App,
		routes: [
			{
				...PublicWrapper,
				routes: [
					{
						...BookReviewDetail,
						path: '/bookReviews/id/:id'
					},
					{
						...BookReviewDetail,
						path: '/bookReviews/:urlString'
					},
					{
						...BookReviews,
						path: '/bookReviews'
					},

					{
						...Projects,
						path: '/projects'
					}
				]
			}
		]
	}
]
