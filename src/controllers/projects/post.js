const createProject = ({ Project }) => async (req, res) => {

	const {
		category,
		content,
		contentPreview,
		title,
		isPublished,
		techStack,
		liveLink,
		spotlight,
		heroURL,
		urlString,
		previewImageURL
	} = req.body;

	try {
		const reviewData = {
			category,
			content,
			contentPreview,
			title,
			techStack,
			liveLink,
			heroURL,
			spotlight,
			urlString: urlString || title.replace(/ /g, '-'),
			previewImageURL,
			isPublished,
			owner: req.user.id
		};

		if (isPublished) {
			reviewData.publishDate = new Date()
		}
		let setProject = new Project(
			reviewData
		);
		await setProject.save();

		return res.status(200).send({
			projectId: setProject._id
		})
	} catch (e) {

		console.error('There was an error creating this project: ', e);
		return res.status(400).send({
			message: "Could not create project"
		});

	}

};

module.exports = {
	createProject
};
