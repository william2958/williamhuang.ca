const createEvent = ({ Event }) => async (req, res) => {

	const {
		title,
		contentPreview,
		eventDate,

		heroURL,
		content,
		recap,

		urlString,
		isPublished
	} = req.body;

	try {
		const eventData = {
			title,
			contentPreview,
			eventDate,

			content,
			recap,
			isPublished,
			urlString: urlString || title.replace(/ /g, '-').toLowerCase(),

			heroURL,
			owner: req.user.id
		};

		if (isPublished) {
			eventData.publishDate = new Date();
		}
		let setEvent = new Event(
			eventData
		);

		await setEvent.save();

		return res.status(200).send({
			eventId: setEvent._id
		})

	} catch (e) {

		return res.status(400).send({
			message: "Could not create event"
		});

	}

};

module.exports = {
	createEvent
};
