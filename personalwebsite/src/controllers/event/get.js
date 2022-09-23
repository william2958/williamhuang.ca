const { propertiesToProject, LIMIT_PER_PAGE } = require('./constants');

const getEventAdmin = ({ Event }) => async (req, res) => {

	try {

		const { isPublished } = req.query;

		let events = await Event.aggregate([
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
			events
		})

	} catch (e) {
		return res.status(400).send({
			message: "there was an error getting the admin events."
		})
	}

};

const getEvent = ({ Event }) => async (req, res) => {

	const { eventId } = req.query;

	try {
		const event = await Event.findOne({ _id: eventId });

		if (event) {
			return res.status(200).send({
				event
			})
		} else {
			return res.status(404).send({
				message: "There is no event with that id."
			})
		}

	} catch (e) {
		return res.status(400).send({
			message: "There was an error getting the event."
		})
	}

};


const getEventFromString = ({ Event }) => async (req, res) => {

	const { urlString } = req.query;

	try {
		const event = await Event.findOne({ urlString });

		if (event) {
			return res.status(200).send({
				event
			})
		} else {
			return res.status(404).send({
				message: "There is no event with that id."
			})
		}

	} catch (e) {
		return res.status(400).send({
			message: "There was an error getting the event."
		})
	}

};

const getRecentEvents = ({ Event }) => async (req, res) => {

	const {
		numSkip
	} = req.query;

	try {
		let allEvents;
		let numToSkip;

		if (!numSkip || isNaN(numSkip)) {
			// First page, don't skip any
			allEvents = await Event.aggregate([
				{
					$match: {
						isPublished: true
					}
				},
				{
					$sort: {
						eventDate: -1
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

			allEvents = await Event.aggregate([
				{
					$match: {
						isPublished: true
					}
				},
				{
					$sort: {
						eventDate: -1
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
		if (allEvents.length > LIMIT_PER_PAGE) {
			// There is another page
			anotherPage = true;
			allEvents.pop();
		}

		res.status(200).send({
			allEvents,
			anotherPage,
			numToSkip
		})
	} catch (e) {
		console.error('Error filtering events: ', e);
		return res.status(400).send({
			message: "There was an error getting the events."
		})
	}

};

module.exports = {
	getEvent,
	getEventFromString,
	getRecentEvents,
	getEventAdmin
};
