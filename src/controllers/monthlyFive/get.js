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
					publishDate: -1
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
		numSkip
	} = req.query;

	try {
		let allMonthlyFives;
		let numToSkip;
		if (!numSkip || isNaN(numSkip)) {
			// First page, don't skip any
			allMonthlyFives = await MonthlyFive.aggregate([
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

			allMonthlyFives = await MonthlyFive.aggregate([
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
		if (allMonthlyFives.length > LIMIT_PER_PAGE) {
			// There is another page
			anotherPage = true;
			allMonthlyFives.pop();
		}

		res.status(200).send({
			allMonthlyFives,
			anotherPage,
			numToSkip
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
	getRecentMonthlyFives
};
