const { authenticate } = require('../../middleware');

const { Router: router } = require('express');

const {
	getHighlight
} = require('./get');

const {
	updateHighlight
} = require('./put');

module.exports = (models, { config }) => {

	const api = new router();

	api.get(
		'/getHighlight',
		getHighlight(models)
	);

	api.put('/updateHighlight', authenticate, updateHighlight(models));

	return api;

};
