const createGuide = ({ Guide }) => async (req, res) => {

	const {
		title,
		contentPreview,
		technology,

		content,
		isPublished,
		urlString,

		iconURL,
		previewImageURL
	} = req.body;

	try {
		const reviewData = {
			title,
			contentPreview,
			technology,

			content,
			isPublished,
			urlString: urlString || title.replace(/ /g, '-'),

			iconURL,
			previewImageURL,
			owner: req.user.id
		};

		if (isPublished) {
			reviewData.publishDate = new Date()
		}
		let setGuide = new Guide(
			reviewData
		);
		await setGuide.save();

		return res.status(200).send({
			guideId: setGuide._id
		})
	} catch (e) {

		console.error('There was an error creating this guide: ', e);
		return res.status(400).send({
			message: "Could not create guide"
		});

	}

};

module.exports = {
	createGuide
};
