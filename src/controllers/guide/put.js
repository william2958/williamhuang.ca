const updateGuide = ({ Guide }) => async (req, res) => {

	const {
		title,
		contentPreview,
		technology,

		content,
		isPublished,

		iconURL,
		previewImageURL,

		guideId
	} = req.body;

	try {

		const prevGuide = await Guide.findOne({ _id: guideId });

		const updateData = {
			...(title && { title }),
			...(contentPreview && { contentPreview }),

			...(technology && { technology }),

			...(content && { content }),
			...(typeof isPublished !== 'undefined' && { isPublished }),

			...(iconURL && { iconURL }),
			...(previewImageURL && { previewImageURL })
		};

		if (isPublished && !prevGuide.isPublished) {
			updateData.publishDate = new Date();
		}
		let setGuide = await Guide.findOneAndUpdate(
			{ _id: guideId},
			{
				$set: updateData
			},
			{
				new: true,
			}
		);

		return res.status(200).send({
			guide: setGuide
		})
	} catch (e) {

		return res.status(400).send({
			message: "Could not update guide"
		});

	}

};

module.exports = {
	updateGuide
};
