const { authenticate } = require('../../middleware');

const { Router: router } = require('express');

module.exports = (models, { config }) => {

	const api = new router();

	api.get(
		'/getProject',
		getProject(models)
	);

	// Get certain number of book reviews
	api.get('/getNumRecentProjects', getNumRecentProjects(models));
	// Based on num skip and category
	api.get('/getRecentProjects', getRecentProjects(models));

	// Get either published projects or drafts
	api.get('/getProjectsAdmin', authenticate, getProjectAdmin(models));


	api.post(
		'/createProject',
		authenticate,
		createProject(models)
	);

	api.put('/updateProject', authenticate, updateProject(models));

	api.delete('/deleteProject', authenticate, deleteProject(models));

	return api;

};
