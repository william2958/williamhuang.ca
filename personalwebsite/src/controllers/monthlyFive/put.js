const updateMonthlyFive = ({ MonthlyFive }) => async (req, res) => {

	const {
		title,
		contentPreview,

		month,
		year,
		urlString,

		content,
		isPublished,

		heroURL,
		previewImageURL,

		monthlyFiveId
	} = req.body;

	try {

		const prevMonthlyFive = await MonthlyFive.findOne({ _id: monthlyFiveId });

		const updateData = {
			...(title && { title }),
			...(contentPreview && { contentPreview }),

			...(month && { month }),
			...(year && { year }),
			...(urlString && { urlString }),

			...(content && { content }),
			...(typeof isPublished !== 'undefined' && { isPublished }),

			...(heroURL && { heroURL }),
			...(previewImageURL && { previewImageURL })
		};

		if (isPublished && !prevMonthlyFive.isPublished) {
			updateData.publishDate = new Date();
		}
		let setMonthlyFive = await MonthlyFive.findOneAndUpdate(
			{ _id: monthlyFiveId},
			{
				$set: updateData
			},
			{
				new: true,
			}
		);

		return res.status(200).send({
			monthlyFive: setMonthlyFive
		})
	} catch (e) {

		return res.status(400).send({
			message: "Could not update monthlyFive"
		});

	}

};

module.exports = {
	updateMonthlyFive
};
