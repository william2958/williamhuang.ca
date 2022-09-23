const deleteGuide = ({ Guide }) => async (req, res) => {

	const {
		guideId
	} = req.body;

	if (!guideId) {
		return res.status(404).send({
			message: "Could not find that guide."
		})
	}

	try {
		const deletedGuide = await Guide.findOneAndDelete({
			_id: guideId
		});

		return res.status(200).send({
			deletedGuide
		})
	} catch (e) {

		return res.status(400).send({
			message: "Could not delete guide"
		});

	}

};

module.exports = {
	deleteGuide
};
