const mongoose = require('mongoose');

const HIGHLIGHT_TYPES = ['event', 'project', 'monthlyFive', 'blog'];
const updateHighlight =
	({ Highlight, Event, Project, MonthlyFive, Blog }) => async (req, res) => {

	const {
		type,
		id
	} = req.body;

	if (!HIGHLIGHT_TYPES.includes(type)) {
		return res.status(400).send({
			message: 'This is not a type that is allowed to be a highlight.'
		})
	}

	try {

		// Find the entry that is being referenced by id
		let highlightObject;
		switch (type) {
			case 'event':
				highlightObject = await Event.findOne({ _id: id });
				break;
			case 'monthlyFive':
				highlightObject = await MonthlyFive.findOne({ _id: id });
				break;
			case 'project':
				highlightObject = await Project.findOne({ _id: id });
				break;
			case 'blog':
				highlightObject = await Blog.findOne({ _id: id });
				break;
		}

		if (!highlightObject) {
			return res.status(400).send({
				message: 'Could not find an object with that id.'
			})
		}

		const highlight = await Highlight.findOne();

		if (!highlight) {
			// No highlight has been created

			const newHighlight = new Highlight({
				dataType: type,
				dataRef: mongoose.Types.ObjectId(id),
				owner: req.user.id
			});

			await newHighlight.save();

			return res.status(200).send({
				highlight: newHighlight
			})

		}

		// update the current highlight
		const updatedHighlight = await Highlight.findOneAndUpdate(
			{
			},
			{
				$set: {
					dataType: type,
					dataRef: mongoose.Types.ObjectId(id)
				}
			},
			{
				new: true
			}
		);

		res.status(200).send({
			highlight: updatedHighlight
		})

	} catch (e) {
		console.error('Error updating highlight: ', e);
		return res.status(400).send({
			message: "Could not update Highlight"
		});
	}

};

module.exports = {
	updateHighlight
};
