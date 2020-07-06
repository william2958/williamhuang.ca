import React from 'react';

import App from './App';

import BookReviews from "./src/containers/BookReviews";
import BookReviewDetail from './src/containers/BookReviews/BookReviewDetail';

import Projects from './src/containers/Projects';

import Error404Page from './src/containers/Error404Page';

import PublicWrapper from './src/containers/PublicWrapper';
import AdminLogin from "./src/containers/Admin/AdminLogin";
import Admin from "./src/containers/Admin/Admin";
import AdminHome from "./src/containers/Admin/AdminHome";

export default [
	{
		...App,
		routes: [
			{
				...Admin,
				path: '/admin',
				routes: [
					{
						...AdminHome,
						path: '/admin',
						exact: true
					}
				]
			},
			{
				...PublicWrapper,
				routes: [
					{
						...BookReviews,
						path: '/',
						exact: true
					},
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
					},

					{
						...AdminLogin,
						path: '/adminLogin'
					},

					{
						...Error404Page
					}
				]
			}
		]
	}
]
