import React from 'react';

import App from './App';
import HomePage from './src/containers/HomePage';

import BookReviews from "./src/containers/BookReviews";
import BookReviewDetail from './src/containers/BookReviews/BookReviewDetail';

import Projects from './src/containers/Projects';

import Error404Page from './src/containers/Error404Page';

import PublicWrapper from './src/containers/PublicWrapper';
import AdminLogin from "./src/containers/Admin/AdminLogin";
import Admin from "./src/containers/Admin/Admin";
import AdminHome from "./src/containers/Admin/AdminHome";
import BookReviewPublished from "./src/containers/Admin/BookReviews/BookReviewPublished";
import BookReviewDrafts from "./src/containers/Admin/BookReviews/BookReviewDrafts";
import NewBookReview from "./src/containers/Admin/BookReviews/NewBookReview";
import EditBookReview from "./src/containers/Admin/BookReviews/EditBookReview";

import GuidesPage from './src/containers/Guides';
import GuideDetail from './src/containers/Guides/GuideDetail';
import PublishedGuides from "./src/containers/Admin/Guides/PublishedGuides";
import DraftGuides from "./src/containers/Admin/Guides/DraftGuides";
import NewGuide from "./src/containers/Admin/Guides/NewGuide";
import EditGuide from "./src/containers/Admin/Guides/EditGuide";
import EditProject from "./src/containers/Admin/Projects/EditProject";
import NewProject from "./src/containers/Admin/Projects/NewProject";
import DraftProjects from "./src/containers/Admin/Projects/DraftProjects";
import PublishedProjects from "./src/containers/Admin/Projects/PublishedProjects";
import ProjectDetail from './src/containers/Projects/ProjectDetail';

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
					},
					{
						...BookReviewPublished,
						path: '/admin/bookReview/published'
					},
					{
						...BookReviewDrafts,
						path: '/admin/bookReview/drafts'
					},
					{
						...NewBookReview,
						path: '/admin/bookReview/new'
					},
					{
						...EditBookReview,
						path: '/admin/bookReview/edit/:reviewId'
					},

					{
						...PublishedGuides,
						path: '/admin/guide/published'
					},
					{
						...DraftGuides,
						path: '/admin/guide/drafts'
					},
					{
						...NewGuide,
						path: '/admin/guide/new'
					},
					{
						...EditGuide,
						path: '/admin/guide/edit/:guideId'
					},

					{
						...PublishedProjects,
						path: '/admin/project/published'
					},
					{
						...DraftProjects,
						path: '/admin/project/drafts'
					},
					{
						...NewProject,
						path: '/admin/project/new'
					},
					{
						...EditProject,
						path: '/admin/project/edit/:projectId'
					}
				]
			},
			{
				...PublicWrapper,
				routes: [
					{
						...HomePage,
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
						...ProjectDetail,
						path: '/projects/id/:id'
					},
					{
						...ProjectDetail,
						path: '/projects/:urlString'
					},
					{
						...Projects,
						path: '/projects'
					},


					{
						...GuideDetail,
						path: '/guides/id/:id'
					},
					{
						...GuideDetail,
						path: '/guides/:urlString'
					},
					{
						...GuidesPage,
						path: '/guides'
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
