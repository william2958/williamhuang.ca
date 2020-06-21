const { propertiesToProject, LIMIT_PER_PAGE } = require('./constants');

const getMonthlyFiveAdmin = ({ MonthlyFive }) => async (req, res) => {

	try {

		const { isPublished } = req.query;

		let monthlyFives = await MonthlyFive.aggregate([
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
			monthlyFives
		})

	} catch (e) {
		return res.status(400).send({
			message: "there was an error getting the admin monthlyFives."
		})
	}

};


const getMonthlyFive = ({ MonthlyFive }) => async (req, res) => {

	const { monthlyFiveId } = req.query;

	try {
		const monthlyFive = await MonthlyFive.findOne({ _id: monthlyFiveId });

		if (monthlyFive) {
			return res.status(200).send({
				monthlyFive
			});
		} else {
			return res.status(401).send({
				message: "There is no MonthlyFive with that id."
			})
		}

	} catch (e) {
		console.error('Error on getting MonthlyFive: ', e);
		return res.status(400).send({
			message: "There was an error getting the MonthlyFive."
		})
	}

};

const getMonthlyFiveFromString = ({ MonthlyFive }) => async (req, res) => {

	const { urlString } = req.query;

	try {
		const monthlyFive = await MonthlyFive.findOne({ urlString });

		if (monthlyFive) {
			return res.status(200).send({
				monthlyFive
			});
		} else {
			return res.status(401).send({
				message: "There is no book review with that id."
			})
		}
	} catch (e) {
		return res.status(400).send({
			message: "There was an error getting the book review."
		})
	}

};

const getNumRecentMonthlyFives = ({ MonthlyFive }) => async (req, res) => {
	const {
		numMonthlyFives
	} = req.query;

	try {
		if (!numMonthlyFives || isNaN(numMonthlyFives)) {
			return res.status(400).send({
				message: "Please include how many items to return."
			})
		}

		const allMonthlyFives = await MonthlyFive.aggregate([
			{
				$match: {
					isPublished: true
				}
			},
			{
				$sort: {
					year: -1,
					month: -1
				}
			},
			{
				$limit: parseInt(numMonthlyFives)
			},
			{
				$project: propertiesToProject
			}
		]);

		res.status(200).send({
			allMonthlyFives
		})
	} catch (e) {
		console.error('Error getting num recent monthlyFives: ', e);
		return res.status(400).send({
			message: "There was an error getting the monthlyFives."
		})
	}
};

const getRecentMonthlyFives = ({ MonthlyFive }) => async (req, res) => {

	const {
		year
	} = req.query;

	try {
		let allMonthlyFives;
		if (!year || isNaN(year)) {
			// Invalid input
			return res.status(400).send({
				message: 'Incorrectly formatted year.'
			})
		} else {

			allMonthlyFives = await MonthlyFive.aggregate([
				{
					$match: {
						isPublished: true,
						year: parseInt(year)
					}
				},
				{
					$sort: {
						month: -1
					}
				},
				{
					$project: propertiesToProject
				}
			]);

		}

		res.status(200).send({
			allMonthlyFives
		})
	} catch (e) {
		console.error('Error filtering monthlyFives: ', e);
		return res.status(400).send({
			message: "There was an error getting the monthlyFives."
		})
	}

};

module.exports = {
	getMonthlyFiveAdmin,
	getMonthlyFive,
	getNumRecentMonthlyFives,
	getRecentMonthlyFives,
	getMonthlyFiveFromString
};
