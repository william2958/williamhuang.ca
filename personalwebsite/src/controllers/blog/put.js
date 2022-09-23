const updateBlog = ({ Blog }) => async (req, res) => {

	const {
		title,
		num,
		contentPreview,

		content,
		isPublished,

		heroURL,
		previewImageURL,
		urlString,

		blogId
	} = req.body;

	try {

		const prevBlog = await Blog.findOne({ _id: blogId });

		const updateData = {
			...(title && { title }),
			...(num && { num }),
			...(contentPreview && { contentPreview }),

			...(content && { content }),
			...(typeof isPublished !== 'undefined' && { isPublished }),
			...(urlString && { urlString }),

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
