import axios from "../../utils/axios";
import {toast} from "react-toastify";
import {H4} from "../../styles/typography/Headers";
import Dropdown from "../../components/Dropdown";
import {PROJECT_CATEGORY_OPTIONS} from "../../constants";
import React from "react";
import {
	ProjectHeroWrapper,
	ProjectsPageHeader,
	ProjectsPageWrapper,
	ProjectSpotlightPlaceholder
} from "./styles";
import ProjectPreview from "./ProjectPreview";
import {GutteredRow, LoadMoreButtonContainer} from "../../styles/globalStyles";
import ProjectHero from "./ProjectHero";

class ProjectsPage extends React.Component {

	state = {
		projects: [],
		anotherPage: false,
		numToSkip: 0,
		filterCategory: 'all',
		spotlightProject: null
	};

	componentDidMount() {
		this.getFirstPage();
		this.getSpotlightProject();
		window.scrollTo(0, 0);
	}

	getSpotlightProject = async () => {
		try {

			const response = (await axios.get('/project/getSpotlightProject')).data;

			this.setState({
				spotlightProject: response.spotlightProject
			});

		} catch (error) {
			console.error('Could not get the spotlight project.');
		}
	};

	getFirstPage = async (option) => {
		try {

			let filteredCategory = option || this.state.filterCategory;
			if (filteredCategory === 'all') {
				filteredCategory = '';
			}

			const response = (await axios.get(`/project/getRecentProjects?category=${filteredCategory}`)).data;

			this.setState({
				projects: response.allProjects,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			})

		} catch (error) {
			toast.error('There was an error getting the first page.')
		}
	};

	loadNextPage = async () => {
		try {
			const {projects, numToSkip} = this.state;

			let filteredCategory = this.state.filterCategory;
			if (filteredCategory === 'all') {
				filteredCategory = '';
			}

			const newProjects = [...projects];
			const response = (await axios.get(`/project/getRecentProjects?numSkip=${numToSkip}&category=${filteredCategory}`)).data;
			newProjects.push(...response.allProjects);

			this.setState({
				projects: newProjects,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			});

		} catch (error) {
			toast.error('There was an error getting the first page.')
		}
	};

	selectFilter = async (option) => {
		if (option === this.state.filterCategory) {
			return;
		} else {
			this.getFirstPage(option);
		}
		this.setState({
			filterCategory: option
		});
	};

	render() {

		const {filterCategory, anotherPage, spotlightProject} = this.state;

		return (
			<ProjectsPageWrapper className="container">

				{spotlightProject ? (
					<div className="row">
						<H4 className="spotlightTitle">Spotlight</H4>
						<ProjectHeroWrapper>
							<ProjectHero project={spotlightProject} fit />
						</ProjectHeroWrapper>
					</div>
				) : (
					<>
						<H4> </H4>
						<ProjectSpotlightPlaceholder/>
					</>
				)}

				<ProjectsPageHeader className="row">
					<H4>All Projects</H4>
					<Dropdown value={filterCategory} options={['all', ...PROJECT_CATEGORY_OPTIONS]}
					          onChange={this.selectFilter}/>
				</ProjectsPageHeader>
				<GutteredRow className="row no-gutters">
					{
						this.state.projects.map(project => (
							<ProjectPreview project={project} key={project._id}/>
						))
					}
				</GutteredRow>
				{anotherPage && (
					<LoadMoreButtonContainer>
						<button onClick={this.loadNextPage}>Load More</button>
					</LoadMoreButtonContainer>
				)}
			</ProjectsPageWrapper>
		)
	}

}

export default ProjectsPage;
