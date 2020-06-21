const { authenticate } = require('../../middleware');

const { Router: router } = require('express');

const {
	getNumRecentBlogs,
	getRecentBlogs,
	getBlogAdmin,
	getBlog,
	getBlogFromString
} = require('./get');

const { createBlog } = require('./post');

const { updateBlog } = require('./put');

const { deleteBlog } = require('./delete');

module.exports = (models, { config }) => {

	const api = new router();

	api.get(
		'/getBlog',
		getBlog(models)
	);

	api.get(
		'/getBlogFromString',
		getBlogFromString(models)
	);

	// Get certain number of book reviews
	api.get('/getNumRecentBlogs', getNumRecentBlogs(models));
	// Based on num skip and category
	api.get('/getRecentBlogs', getRecentBlogs(models));

	// Get either published projects or drafts
	api.get('/getBlogAdmin', authenticate, getBlogAdmin(models));


	api.post(
		'/createBlog',
		authenticate,
		createBlog(models)
	);

	api.put('/updateBlog', authenticate, updateBlog(models));

	api.delete('/deleteBlog', authenticate, deleteBlog(models));

	return api;

};
