const { propertiesToProject, LIMIT_PER_PAGE } = require('./constants');

const getBlogAdmin = ({ Blog }) => async (req, res) => {

	try {

		const { isPublished } = req.query;

		let blogs = await Blog.aggregate([
			{
				$match: {
					isPublished: isPublished === 'true'
				}
			},
			{
				$sort: {
					created: -1
				}
			},
			{
				$project: propertiesToProject
			}
		]);

		res.status(200).send({
			blogs
		})

	} catch (e) {
		return res.status(400).send({
			message: "there was an error getting the admin blogs."
		})
	}

};


const getBlog = ({ Blog }) => async (req, res) => {

	const { blogId } = req.query;

	try {
		const blog = await Blog.findOne({ _id: blogId });

		if (blog) {
			return res.status(200).send({
				blog
			});
		} else {
			return res.status(401).send({
				message: "There is no Blog with that id."
			})
		}

	} catch (e) {
		console.error('Error on getting Blog: ', e);
		return res.status(400).send({
			message: "There was an error getting the Blog."
		})
	}

};

const getBlogFromString = ({ Blog }) => async (req, res) => {

	const { urlString } = req.query;

	try {
		const blog = await Blog.findOne({ urlString });

		if (blog) {
			return res.status(200).send({
				blog
			});
		} else {
			return res.status(401).send({
				message: "There is no book review with that id."
			})
		}
	} catch (e) {
		return res.status(400).send({
			message: "There was an error getting the book review."
		})
	}

};

const getNumRecentBlogs = ({ Blog }) => async (req, res) => {
	const {
		numBlogs
	} = req.query;

	try {
		if (!numBlogs || isNaN(numBlogs)) {
			return res.status(400).send({
				message: "Please include how many items to return."
			})
		}

		const allBlogs = await Blog.aggregate([
			{
				$match: {
					isPublished: true
				}
			},
			{
				$sort: {
					publishDate: -1
				}
			},
			{
				$limit: parseInt(numBlogs)
			},
			{
				$project: propertiesToProject
			}
		]);

		res.status(200).send({
			allBlogs
		})
	} catch (e) {
		console.error('Error getting num recent blogs: ', e);
		return res.status(400).send({
			message: "There was an error getting the blogs."
		})
	}
};

const getRecentBlogs = ({ Blog }) => async (req, res) => {

	const {
		numSkip
	} = req.query;

	try {
		let allBlogs;
		let numToSkip;
		if (!numSkip || isNaN(numSkip)) {
			// First page, don't skip any
			allBlogs = await Blog.aggregate([
				{
					$match: {
						isPublished: true
					}
				},
				{
					$sort: {
						publishDate: -1
					}
				},
				{
					$limit: LIMIT_PER_PAGE + 1
				},
				{
					$project: propertiesToProject
				}
			]);
			numToSkip = LIMIT_PER_PAGE;
		} else {

			allBlogs = await Blog.aggregate([
				{
					$match: {
						isPublished: true
					}
				},
				{
					$sort: {
						publishDate: -1
					}
				},
				{
					$skip: parseInt(numSkip)
				},
				{
					$limit: LIMIT_PER_PAGE + 1
				},
				{
					$project: propertiesToProject
				}
			]);

			numToSkip = parseInt(numSkip) + LIMIT_PER_PAGE;

		}

		let anotherPage = false;
		if (allBlogs.length > LIMIT_PER_PAGE) {
			// There is another page
			anotherPage = true;
			allBlogs.pop();
		}

		res.status(200).send({
			allBlogs,
			anotherPage,
			numToSkip
		})
	} catch (e) {
		console.error('Error filtering blogs: ', e);
		return res.status(400).send({
			message: "There was an error getting the blogs."
		})
	}

};

module.exports = {
	getBlogAdmin,
	getBlog,
	getNumRecentBlogs,
	getRecentBlogs,
	getBlogFromString
};
