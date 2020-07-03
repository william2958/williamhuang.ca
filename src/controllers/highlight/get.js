const { propertiesToProject: eventPropertiesToProject } = require('../event/constants');
const { propertiesToProject: monthlyFivePropertiesToProject } = require('../monthlyFive/constants');
const { propertiesToProject: projectPropertiesToProject } = require('../projects/constants');


const getHighlight = ({ Highlight, Event, MonthlyFive, Project }) => async (req, res) => {

	try {

		const highlight = await Highlight.findOne();

		if (highlight) {
			// process what type of highlight it is and fill in the data
			let highlightObject;
			switch (highlight.dataType) {
				case 'event':
					highlightObject = await Event.aggregate([
						{
							$match: {_id: highlight.dataRef}
						},
						{
							$project: eventPropertiesToProject
						}
					]);
					break;
				case 'monthlyFive':
					highlightObject = await MonthlyFive.aggregate([
						{
							$match: {_id: highlight.dataRef}
						},
						{
							$project: monthlyFivePropertiesToProject
						}
					]);
					break;
				case 'project':
					highlightObject = await Project.aggregate([
						{
							$match: {_id: highlight.dataRef}
						},
						{
							$project: projectPropertiesToProject
						}
					]);
					break;
			}
			if (highlightObject && highlightObject.length)
				highlightObject = highlightObject[0];
			return res.status(200).send({
				highlight,
				highlightObject
			})
		} else {
			return res.status(400).send({
				message: 'Highlight not set.'
			})
		}

	} catch (e) {
		console.error('error: ', e);
		return res.status(400).send({
			message: "There was an error getting the highlight."
		})
	}

};

module.exports = {
	getHighlight
};
