const deleteProject = ({ Project }) => async (req, res) => {

	const {
		projectId
	} = req.body;

	if (!projectId) {
		return res.status(404).send({
			message: "Could not find that project."
		})
	}

	try {
		const deletedProject = await Project.findOneAndDelete({
			_id: projectId
		});

		return res.status(200).send({
			deletedProject
		})
	} catch (e) {

		return res.status(400).send({
			message: "Could not delete project"
		});

	}

};

module.exports = {
	deleteProject
};
