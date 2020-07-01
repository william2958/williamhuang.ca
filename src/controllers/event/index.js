const { authenticate } = require('../../middleware');

const { Router: router } = require('express');

const {
	getEvent,
	getEventFromString,
	getEventAdmin,
	getRecentEvents
} = require('./get');

const { createEvent } = require('./post');

const { updateEvent } = require('./put');

module.exports = (models, { config }) => {

	const api = new router();

	api.get(
		'/getEvent',
		getEvent(models)
	);

	api.get(
		'/getEventFromString',
		getEventFromString(models)
	);

	// Based on num skip and category
	api.get('/getRecentEvents', getRecentEvents(models));

	// Get either published projects or drafts
	api.get('/getEventAdmin', authenticate, getEventAdmin(models));

	api.post(
		'/createEvent',
		authenticate,
		createEvent(models)
	);

	api.put('/updateEvent', authenticate, updateEvent(models));

	return api;

};
