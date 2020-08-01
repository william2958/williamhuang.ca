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
import PublishedEvents from "./src/containers/Admin/Events/PublishedEvents";
import DraftEvents from "./src/containers/Admin/Events/DraftEvents";
import NewEvent from "./src/containers/Admin/Events/NewEvent";
import EditEvent from "./src/containers/Admin/Events/EditEvent";
import PublishedMonthlyFives from "./src/containers/Admin/MonthlyFives/PublishedMonthlyFives";
import DraftMonthlyFives from "./src/containers/Admin/MonthlyFives/DraftMonthlyFives";
import NewMonthlyFive from "./src/containers/Admin/MonthlyFives/NewMonthlyFive";
import EditMonthlyFive from "./src/containers/Admin/MonthlyFives/EditMonthlyFive";
import EventDetail from './src/containers/Events/EventDetail';
import EventsPage from './src/containers/Events';
import MonthlyFiveDetail from './src/containers/MonthlyFives/MonthlyFiveDetail';
import MonthlyFivesPage from './src/containers/MonthlyFives';
import PublishedBlogs from "./src/containers/Admin/Blogs/PublishedBlogs";
import DraftBlogs from "./src/containers/Admin/Blogs/DraftBlogs";
import NewBlog from "./src/containers/Admin/Blogs/NewBlog";
import EditBlog from "./src/containers/Admin/Blogs/EditBlog";
import BlogsPage from './src/containers/Blogs';
import BlogDetail from './src/containers/Blogs/BlogDetail';

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
					},

					{
						...PublishedEvents,
						path: '/admin/event/published'
					},
					{
						...DraftEvents,
						path: '/admin/event/drafts'
					},
					{
						...NewEvent,
						path: '/admin/event/new'
					},
					{
						...EditEvent,
						path: '/admin/event/edit/:eventId'
					},

					{
						...PublishedMonthlyFives,
						path: '/admin/monthlyFive/published'
					},
					{
						...DraftMonthlyFives,
						path: '/admin/monthlyFive/drafts'
					},
					{
						...NewMonthlyFive,
						path: '/admin/monthlyFive/new'
					},
					{
						...EditMonthlyFive,
						path: '/admin/monthlyFive/edit/:monthlyFiveId'
					},

					{
						...PublishedBlogs,
						path: '/admin/blog/published'
					},
					{
						...DraftBlogs,
						path: '/admin/blog/drafts'
					},
					{
						...NewBlog,
						path: '/admin/blog/new'
					},
					{
						...EditBlog,
						path: '/admin/blog/edit/:blogId'
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
						...EventDetail,
						path: '/events/id/:id'
					},
					{
						...EventDetail,
						path: '/events/:urlString'
					},
					{
						...EventsPage,
						path: '/events'
					},

					{
						...BlogDetail,
						path: '/blog/id/:id'
					},
					{
						...BlogDetail,
						path: '/blog/:urlString'
					},
					{
						...BlogsPage,
						path: '/blog'
					},


					{
						...MonthlyFiveDetail,
						path: '/monthlyFives/id/:id'
					},
					{
						...MonthlyFiveDetail,
						path: '/monthlyFives/:urlString'
					},
					{
						...MonthlyFivesPage,
						path: '/monthlyFives'
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
