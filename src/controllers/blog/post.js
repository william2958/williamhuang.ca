const createBlog = ({ Blog }) => async (req, res) => {

	const {
		title,
		contentPreview,

		content,
		isPublished,
		urlString,

		heroURL,
		previewImageURL
	} = req.body;

	try {
		const reviewData = {
			title,
			contentPreview,

			content,
			isPublished,
			urlString: urlString || title.replace(/ /g, '-'),

			heroURL,
			previewImageURL,
			owner: req.user.id
		};

		if (isPublished) {
			reviewData.publishDate = new Date()
		}
		let setBlog = new Blog(
			reviewData
		);
		await setBlog.save();

		return res.status(200).send({
			blogId: setBlog._id
		})
	} catch (e) {

		console.error('There was an error creating this blog: ', e);
		return res.status(400).send({
			message: "Could not create blog"
		});

	}

};

module.exports = {
	createBlog
};
