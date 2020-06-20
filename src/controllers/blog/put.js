const updateBlog = ({ Blog }) => async (req, res) => {

	const {
		title,
		contentPreview,

		content,
		isPublished,

		heroURL,
		previewImageURL,

		blogId
	} = req.body;

	try {

		const prevBlog = await Blog.findOne({ _id: blogId });

		const updateData = {
			...(title && { title }),
			...(contentPreview && { contentPreview }),

			...(content && { content }),
			...(isPublished && { isPublished }),

			...(heroURL && { heroURL }),
			...(previewImageURL && { previewImageURL })
		};

		if (isPublished && !prevBlog.isPublished) {
			updateData.publishDate = new Date();
		}
		let setBlog = await Blog.findOneAndUpdate(
			{ _id: blogId},
			{
				$set: updateData
			},
			{
				new: true,
			}
		);

		return res.status(200).send({
			blog: setBlog
		})
	} catch (e) {

		return res.status(400).send({
			message: "Could not update blog"
		});

	}

};

module.exports = {
	updateBlog
};
