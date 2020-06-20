const { authenticate } = require('../../middleware');

const { Router: router } = require('express');

const { getNumRecentMonthlyFives, getRecentMonthlyFives, getMonthlyFiveAdmin, getMonthlyFive } = require('./get');

const { createMonthlyFive } = require('./post');

const { updateMonthlyFive } = require('./put');

const { deleteMonthlyFive } = require('./delete');

module.exports = (models, { config }) => {

	const api = new router();

	api.get(
		'/getMonthlyFive',
		getMonthlyFive(models)
	);

	// Get certain number of book reviews
	api.get('/getNumRecentMonthlyFives', getNumRecentMonthlyFives(models));
	// Based on num skip and category
	api.get('/getRecentMonthlyFives', getRecentMonthlyFives(models));

	// Get either published projects or drafts
	api.get('/getMonthlyFivesAdmin', authenticate, getMonthlyFiveAdmin(models));


	api.post(
		'/createMonthlyFive',
		authenticate,
		createMonthlyFive(models)
	);

	api.put('/updateMonthlyFive', authenticate, updateMonthlyFive(models));

	api.delete('/deleteMonthlyFive', authenticate, deleteMonthlyFive(models));

	return api;

};
