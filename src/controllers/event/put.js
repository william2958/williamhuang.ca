const updateEvent = ({ Event }) => async (req, res) => {

	const {
		title,
		contentPreview,
		eventDate,

		content,
		recap,
		isPublished,
		urlString,

		heroURL,

		eventId
	} = req.body;

	try {

		const prevEvent = await Event.findOne({ _id: eventId });

		const updateData = {
			...(title && { title }),
			...(contentPreview && { contentPreview }),
			...(eventDate && { eventDate }),

			...(content && { content }),
			...(recap && { recap }),
			...(typeof isPublished !== 'undefined' && { isPublished }),
			...(urlString && { urlString }),

			...(heroURL && { heroURL })
		};

		if (isPublished && !prevEvent.isPublished) {
			updateData.publishDate = new Date();
		}
		let setEvent = await Event.findOneAndUpdate(
			{ _id: eventId},
			{
				$set: updateData
			},
			{
				new: true,
			}
		);

		return res.status(200).send({
			event: setEvent
		})
	} catch (e) {

		return res.status(400).send({
			message: "Could not update event"
		});

	}

};

module.exports = {
	updateEvent
};
