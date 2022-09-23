import _ from 'lodash';
import {
	ADMIN_BLOG_LOADED,
	GET_BLOG_DETAILS,
	GET_EDIT_BLOG_DETAILS,
	GET_FIRST_PAGE_BLOGS,
	NUM_RECENT_BLOGS_LOADED, NEXT_PAGE_BLOGS_LOADED
} from "../actions/types";

const INITIAL_STATE = {
	blogs: [],
	anotherPage: false,
	numToSkip: 0,

	blogDetails: null,

	editBlogDetails: {},
	draftBlogs: [],
	publishedBlogs: [],
	recentBlogs: []
};

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case GET_FIRST_PAGE_BLOGS:
			return {
				...state,
				...action.payload
			};
		case NEXT_PAGE_BLOGS_LOADED:
			return {
				...state,
				...action.payload
			}
		case GET_BLOG_DETAILS:
			return {
				...state,
				blogDetails: _.cloneDeep(action.payload)
			};
		case GET_EDIT_BLOG_DETAILS:
			return {
				...state,
				editBlogDetails: _.cloneDeep(action.payload)
			}
		case ADMIN_BLOG_LOADED:
			if (action.payload.isPublished) {
				return {
					...state,
					publishedBlogs: _.cloneDeep(action.payload.blogs)
				}
			} else {
				return {
					...state,
					draftBlogs: _.cloneDeep(action.payload.blogs)
				}
			}
		case NUM_RECENT_BLOGS_LOADED:
			return {
				...state,
				recentBlogs: _.cloneDeep(action.payload)
			}
		default:
			return state;

	}

};
