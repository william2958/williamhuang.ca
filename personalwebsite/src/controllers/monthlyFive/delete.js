const deleteMonthlyFive = ({ MonthlyFive }) => async (req, res) => {

	const {
		monthlyFiveId
	} = req.body;

	if (!monthlyFiveId) {
		return res.status(404).send({
			message: "Could not find that monthlyFive."
		})
	}

	try {
		const deletedMonthlyFive = await MonthlyFive.findOneAndDelete({
			_id: monthlyFiveId
		});

		return res.status(200).send({
			deletedMonthlyFive
		})
	} catch (e) {

		return res.status(400).send({
			message: "Could not delete monthlyFive"
		});

	}

};

module.exports = {
	deleteMonthlyFive
};
