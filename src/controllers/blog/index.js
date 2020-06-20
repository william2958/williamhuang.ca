const { authenticate } = require('../../middleware');

const { Router: router } = require('express');

module.exports = (models, { config }) => {

	const api = new router();

	api.get(
		'/getBlog',
		getBlog(models)
	);

	// Get certain number of book reviews
	api.get('/getNumRecentBlogs', getNumRecentBlogs(models));
	// Based on num skip and category
	api.get('/getRecentBlogs', getRecentBlogs(models));

	// Get either published projects or drafts
	api.get('/getBlogsAdmin', authenticate, getBlogAdmin(models));


	api.post(
		'/createBlog',
		authenticate,
		createBlog(models)
	);

	api.put('/updateBlog', authenticate, updateBlog(models));

	api.delete('/deleteBlog', authenticate, deleteBlog(models));

	return api;

};
