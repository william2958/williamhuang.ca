import axios from "../utils/axios";
import {toast} from "react-toastify";

import {
	GET_FIRST_PAGE_BLOGS,
	GET_BLOG_DETAILS,
	GET_EDIT_BLOG_DETAILS,
	ADMIN_BLOG_LOADED,
	NUM_RECENT_BLOGS_LOADED, NEXT_PAGE_BLOGS_LOADED
} from "./types";
import moment from "moment";

export const getFirstPageBlogs = (option) => async (dispatch) => {

	try {

		let filteredCategory = option;
		if (filteredCategory === 'all') {
			filteredCategory = '';
		}

		const response = (await axios.get(`/blog/getRecentBlogs?category=${filteredCategory}`)).data;

		dispatch({
			type: GET_FIRST_PAGE_BLOGS,
			payload: {
				blogs: response.allBlogs,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			}
		})
	} catch (error) {
		toast.error('There was an error getting the first page.')
	}

};

export const getNextPageBlogs = (option = '') => async (dispatch, getState) => {
	try {

		let filteredCategory = option;
		if (filteredCategory === 'all') {
			filteredCategory = '';
		}

		const state = getState().blogs;
		const currBlogs = state.blogs;
		const numToSkip = state.numToSkip;

		const newBlogs = [...currBlogs];
		const response = (await axios.get(`/blog/getRecentBlogs?numSkip=${numToSkip}&category=${filteredCategory}`)).data;
		newBlogs.push(...response.allBlogs);

		dispatch({
			type: NEXT_PAGE_BLOGS_LOADED,
			payload: {
				blogs: newBlogs,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			}
		})
	} catch (error) {
		toast.error('There was an error getting the next page.')
	}
}

export const getBlogDetails = (id, isId, isEdit = false) => async (dispatch) => {
	try {
		const urlString = isId
			? `/blog/getBlog?blogId=${id}`
			: `/blog/getBlogFromString?urlString=${id}`;
		const response = (await axios.get(urlString)).data;
		const blog = response.blog;

		const formattedDate = blog.publishDate ? moment(blog.publishDate).format('MMMM Do YYYY') : null;

		const blogDetail = {
			...blog,
			publishDate: formattedDate
		};

		if (isEdit) {
			dispatch({
				type: GET_EDIT_BLOG_DETAILS,
				payload: blogDetail
			})
		} else {
			dispatch({
				type: GET_BLOG_DETAILS,
				payload: blogDetail
			})
		}

	} catch (err) {
		console.error('There was an error fetching that book detail: ', err);
	}
};

export const getAdminBlog = (isPublished) => async (dispatch) => {
	try {

		const response = (await axios.get(`/blog/getBlogAdmin?isPublished=${isPublished}`)).data;

		dispatch({
			type: ADMIN_BLOG_LOADED,
			payload: {
				isPublished,
				blogs: response.blogs
			}
		})

	} catch (e) {
		toast.error('Could not create published blogs.');
	}
}

export const getNumRecentBlogs = (numRecent) => async (dispatch) => {
	try {
		const response = (await axios.get(`/blog/getNumRecentBlogs?numBlogs=${numRecent}`)).data;
		dispatch({
			type: NUM_RECENT_BLOGS_LOADED,
			payload: response.allBlogs
		})

	} catch (error) {
		toast.error('Error loading data.')
	}
}
