const { propertiesToProject, LIMIT_PER_PAGE } = require('./constants');

const getProjectAdmin = ({ Project }) => async (req, res) => {

	try {

		const { isPublished } = req.query;

		let projects = await Project.aggregate([
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
			projects
		})

	} catch (e) {
		return res.status(400).send({
			message: "there was an error getting the admin projects."
		})
	}

};


const getProject = ({ Project }) => async (req, res) => {

	const { projectId } = req.query;

	try {
		const project = await Project.findOne({ _id: projectId });

		if (project) {
			return res.status(200).send({
				project
			});
		} else {
			return res.status(401).send({
				message: "There is no Project with that id."
			})
		}

	} catch (e) {
		console.error('Error on getting Project: ', e);
		return res.status(400).send({
			message: "There was an error getting the Project."
		})
	}

};

const getProjectFromString = ({ Project }) => async (req, res) => {

	const { urlString } = req.query;

	try {
		const project = await Project.findOne({ urlString });

		if (project) {
			return res.status(200).send({
				project
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

const getNumRecentProjects = ({ Project }) => async (req, res) => {
	const {
		numProjects
	} = req.query;

	try {
		if (!numProjects || isNaN(numProjects)) {
			return res.status(400).send({
				message: "Please include how many items to return."
			})
		}

		const allProjects = await Project.aggregate([
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
				$limit: parseInt(numProjects)
			},
			{
				$project: propertiesToProject
			}
		]);

		res.status(200).send({
			allProjects
		})
	} catch (e) {
		console.error('Error getting num recent projects: ', e);
		return res.status(400).send({
			message: "There was an error getting the projects."
		})
	}
};

const getRecentProjects = ({ Project }) => async (req, res) => {

	const {
		numSkip,
		category
	} = req.query;

	try {
		let allProjects;
		let numToSkip;
		if (!numSkip || isNaN(numSkip)) {
			// First page, don't skip any
			allProjects = await Project.aggregate([
				{
					$match: {
						isPublished: true,
						...(category && { category })
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

			allProjects = await Project.aggregate([
				{
					$match: {
						isPublished: true,
						...(category && { category })
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
		if (allProjects.length > LIMIT_PER_PAGE) {
			// There is another page
			anotherPage = true;
			allProjects.pop();
		}

		res.status(200).send({
			allProjects,
			anotherPage,
			numToSkip
		})
	} catch (e) {
		console.error('Error filtering projects: ', e);
		return res.status(400).send({
			message: "There was an error getting the projects."
		})
	}

};

const getFilteredProjects = ({ Project }) => async (req, res) => {

	const {
		category
	} = req.query;

	if (!category) {
		return res.status(400).send({
			message: "Please specify the category"
		})
	}

	try {
		const allProjects = await Project.aggregate([
			{
				$match: {
					isPublished: true,
					category
				}
			},
			{
				$sort: {
					publishDate: -1
				}
			},
			{
				$project: propertiesToProject
			},
		]);
		res.status(200).send({
			allProjects
		})
	} catch (e) {
		console.error('Error filtering projects: ', e);
		return res.status(400).send({
			message: "There was an error getting the projects."
		})
	}

};

const getSpotlightProject = ({ Project }) => async (req, res) => {

	try {

		let mostRecentSpotlight = await Project.aggregate([
			{
				$match: {
					isPublished: true,
					spotlight: true
				}
			},
			{
				$sort: {
					publishDate: -1
				}
			},
			{
				$limit: 1
			},
			{
				$project: propertiesToProject
			}
		]);

		res.status(200).send({
			spotlightProject: mostRecentSpotlight.length ? mostRecentSpotlight[0] : null
		})

	} catch (e) {
		console.error('Error getting the spotlight: ', e);
		return res.status(400).send({
			message: "There was an error getting the project spotlight."
		})
	}

};

module.exports = {
	getProjectAdmin,
	getProject,
	getNumRecentProjects,
	getRecentProjects,
	getFilteredProjects,
	getSpotlightProject,
	getProjectFromString
};
