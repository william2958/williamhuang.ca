const { propertiesToProject, LIMIT_PER_PAGE } = require('./constants');

const getGuideAdmin = ({ Guide }) => async (req, res) => {

	try {

		const { isPublished } = req.query;

		let guides = await Guide.aggregate([
			{
				$match: {
					isPublished: isPublished === 'true'
				}
			},
			{
				$sort: {
					created: -1
				}
			},
			{
				$project: propertiesToProject
			}
		]);

		res.status(200).send({
			guides
		})

	} catch (e) {
		return res.status(400).send({
			message: "there was an error getting the admin guides."
		})
	}

};


const getGuide = ({ Guide }) => async (req, res) => {

	const { guideId } = req.query;

	try {
		const guide = await Guide.findOne({ _id: guideId });

		if (guide) {
			return res.status(200).send({
				guide
			});
		} else {
			return res.status(401).send({
				message: "There is no Guide with that id."
			})
		}

	} catch (e) {
		console.error('Error on getting Guide: ', e);
		return res.status(400).send({
			message: "There was an error getting the Guide."
		})
	}

};

const getNumRecentGuides = ({ Guide }) => async (req, res) => {
	const {
		numGuides
	} = req.query;

	try {
		if (!numGuides || isNaN(numGuides)) {
			return res.status(400).send({
				message: "Please include how many items to return."
			})
		}

		const allGuides = await Guide.aggregate([
			{
				$match: {
					isPublished: true
				}
			},
			{
				$sort: {
					publishDate: -1
				}
			},
			{
				$limit: parseInt(numGuides)
			},
			{
				$project: propertiesToProject
			}
		]);

		res.status(200).send({
			allGuides
		})
	} catch (e) {
		console.error('Error getting num recent guides: ', e);
		return res.status(400).send({
			message: "There was an error getting the guides."
		})
	}
};

const getRecentGuides = ({ Guide }) => async (req, res) => {

	const {
		numSkip
	} = req.query;

	try {
		let allGuides;
		let numToSkip;
		if (!numSkip || isNaN(numSkip)) {
			// First page, don't skip any
			allGuides = await Guide.aggregate([
				{
					$match: {
						isPublished: true
					}
				},
				{
					$sort: {
						publishDate: -1
					}
				},
				{
					$limit: LIMIT_PER_PAGE + 1
				},
				{
					$project: propertiesToProject
				}
			]);
			numToSkip = LIMIT_PER_PAGE;
		} else {

			allGuides = await Guide.aggregate([
				{
					$match: {
						isPublished: true
					}
				},
				{
					$sort: {
						publishDate: -1
					}
				},
				{
					$skip: parseInt(numSkip)
				},
				{
					$limit: LIMIT_PER_PAGE + 1
				},
				{
					$project: propertiesToProject
				}
			]);

			numToSkip = parseInt(numSkip) + LIMIT_PER_PAGE;

		}

		let anotherPage = false;
		if (allGuides.length > LIMIT_PER_PAGE) {
			// There is another page
			anotherPage = true;
			allGuides.pop();
		}

		res.status(200).send({
			allGuides,
			anotherPage,
			numToSkip
		})
	} catch (e) {
		console.error('Error filtering guides: ', e);
		return res.status(400).send({
			message: "There was an error getting the guides."
		})
	}

};

module.exports = {
	getGuideAdmin,
	getGuide,
	getNumRecentGuides,
	getRecentGuides
};
