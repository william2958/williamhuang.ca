const updateProject = ({ Project }) => async (req, res) => {

	const {
		projectId,
		category,
		content,
		contentPreview,
		title,
		isPublished,
		techStack,
		liveLink,
		spotlight,
		heroURL,
		previewImageURL,
		urlString,
		author
	} = req.body;

	try {

		const prevProject = await Project.findOne({ _id: projectId });

		const updateData = {
			...(category && { category }),
			...(content && { content }),
			...(contentPreview && { contentPreview }),
			...(title && { title }),
			...(techStack && { techStack }),
			...(liveLink && { liveLink }),
			...(typeof spotlight !== 'undefined' && { spotlight }),
			...(heroURL && { heroURL }),
			...(previewImageURL && { previewImageURL }),
			...(urlString && { urlString }),
			...(typeof isPublished !== 'undefined' && { isPublished }),
			...(author && { author })
		};

		if (isPublished && !prevProject.isPublished) {
			updateData.publishDate = new Date();
		}
		let setProject = await Project.findOneAndUpdate(
			{ _id: projectId},
			{
				$set: updateData
			},
			{
				new: true,
			}
		);

		return res.status(200).send({
			project: setProject
		})
	} catch (e) {

		return res.status(400).send({
			message: "Could not update project"
		});

	}

};

module.exports = {
	updateProject
};
