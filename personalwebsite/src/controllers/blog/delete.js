const deleteBlog = ({ Blog }) => async (req, res) => {

	const {
		blogId
	} = req.body;

	if (!blogId) {
		return res.status(404).send({
			message: "Could not find that blog."
		})
	}

	try {
		const deletedBlog = await Blog.findOneAndDelete({
			_id: blogId
		});

		return res.status(200).send({
			deletedBlog
		})
	} catch (e) {

		return res.status(400).send({
			message: "Could not delete blog"
		});

	}

};

module.exports = {
	deleteBlog
};
