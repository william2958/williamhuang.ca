const MONTHS = [
	"",
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const createMonthlyFive = ({ MonthlyFive }) => async (req, res) => {

	const {
		title,
		contentPreview,

		month,
		year,

		content,
		isPublished,

		heroURL,
		previewImageURL
	} = req.body;

	try {
		const reviewData = {
			title,
			contentPreview,

			month,
			year,
			urlString: `${MONTHS[month]}-${year}`,

			content,
			isPublished,

			heroURL,
			previewImageURL,
			owner: req.user.id
		};

		if (isPublished) {
			reviewData.publishDate = new Date()
		}
		let setMonthlyFive = new MonthlyFive(
			reviewData
		);
		await setMonthlyFive.save();

		return res.status(200).send({
			monthlyFiveId: setMonthlyFive._id
		})
	} catch (e) {

		console.error('There was an error creating this monthlyFive: ', e);
		return res.status(400).send({
			message: "Could not create monthlyFive"
		});

	}

};

module.exports = {
	createMonthlyFive
};
