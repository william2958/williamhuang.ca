const { uploadImage, multer, authenticate } = require('../../middleware');

const addImage = (req, res) => {
	res.status(200).send({
		imageURL: req.imageURL
	})
};

const { Router: router } = require('express');

module.exports = (models, { config }) => {

	const api = new router();

	api.post(
		'/uploadImage',
		authenticate,
		multer.single('file'),
		uploadImage(models, config),
		addImage
	);

	return api;

};
