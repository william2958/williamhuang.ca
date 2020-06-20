const { authenticate } = require('../../middleware');

const { Router: router } = require('express');

const { getNumRecentGuides, getRecentGuides, getGuideAdmin, getGuide } = require('./get');

const { createGuide } = require('./post');

const { updateGuide } = require('./put');

const { deleteGuide } = require('./delete');

module.exports = (models, { config }) => {

	const api = new router();

	api.get(
		'/getGuide',
		getGuide(models)
	);

	// Get certain number of book reviews
	api.get('/getNumRecentGuides', getNumRecentGuides(models));
	// Based on num skip and category
	api.get('/getRecentGuides', getRecentGuides(models));

	// Get either published projects or drafts
	api.get('/getGuideAdmin', authenticate, getGuideAdmin(models));


	api.post(
		'/createGuide',
		authenticate,
		createGuide(models)
	);

	api.put('/updateGuide', authenticate, updateGuide(models));

	api.delete('/deleteGuide', authenticate, deleteGuide(models));

	return api;

};
