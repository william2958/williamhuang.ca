import axios from "../utils/axios";
import {toast} from "react-toastify";

import {
	ADMIN_PROJECT_LOADED,
	GET_EDIT_PROJECT_DETAILS,
	GET_FIRST_PAGE_PROJECTS,
	GET_PROJECT_DETAILS, NEXT_PAGE_PROJECTS_LOADED,
	NUM_RECENT_PROJECTS_LOADED, PROJECT_SPOTLIGHT_LOADED
} from "./types";
import moment from "moment";


export const getFirstPageProjects = (option) => async (dispatch) => {
	try {

		let filteredCategory = option;
		if (filteredCategory === 'all') {
			filteredCategory = '';
		}

		const response = (await axios.get(`/project/getRecentProjects?category=${filteredCategory}`)).data;

		dispatch({
			type: GET_FIRST_PAGE_PROJECTS,
			payload: {
				projects: response.allProjects,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			}
		})

	} catch (error) {
		toast.error('There was an error getting the first page.')
	}
};

export const getNextPageProjects = (option) => async (dispatch, getState) => {
	try {
		const state = getState().projects;
		const currProjects = state.projects;
		const numToSkip = state.numToSkip;

		const newProjects = [...currProjects];
		const response = (await axios.get(`/project/getRecentProjects?numSkip=${numToSkip}&category=${option}`)).data;
		newProjects.push(...response.allProjects);

		dispatch({
			type: NEXT_PAGE_PROJECTS_LOADED,
			payload: {
				projects: newProjects,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			}
		})
	} catch (error) {
		toast.error('There was an error getting the next page.')
	}
}

export const getProjectDetails = (id, isId, isEdit = false) => async (dispatch) => {
	try {
		const urlString = isId
			? `/project/getProject?projectId=${id}`
			: `/project/getProjectFromString?urlString=${id}`;
		const response = (await axios.get(urlString)).data;
		const project = response.project;

		const formattedDate = project.publishDate ? moment(project.publishDate).format('MMMM Do YYYY') : null;

		const projectDetail = {
			...project,
			publishDate: formattedDate
		};

		if (isEdit) {
			dispatch({
				type: GET_EDIT_PROJECT_DETAILS,
				payload: projectDetail
			})
		} else {
			dispatch({
				type: GET_PROJECT_DETAILS,
				payload: projectDetail
			})
		}

	} catch (err) {
		console.error('There was an error fetching that book detail: ', err);
	}
};

export const getSpotlightProject = () => async (dispatch) => {
	try {

		const response = (await axios.get('/project/getSpotlightProject')).data;

		dispatch({
			type: PROJECT_SPOTLIGHT_LOADED,
			payload: response.spotlightProject
		});

	} catch (error) {
		console.error('Could not get the spotlight project.');
	}
}

export const getAdminProject = (isPublished) => async (dispatch) => {
	try {

		const response = (await axios.get(`/project/getProjectAdmin?isPublished=${isPublished}`)).data;

		dispatch({
			type: ADMIN_PROJECT_LOADED,
			payload: {
				isPublished,
				projects: response.projects
			}
		})

	} catch (e) {
		toast.error('Could not create published projects.');
	}
}

export const getNumRecentProjects = (numRecent) => async (dispatch) => {
	try {
		const response = (await axios.get(`/project/getNumRecentProjects?numProjects=${numRecent}`)).data;
		dispatch({
			type: NUM_RECENT_PROJECTS_LOADED,
			payload: response.allProjects
		})

	} catch (error) {
		toast.error('Error loading data.')
	}
}
