import axios from "../../utils/axios";
import { connect } from 'react-redux';
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
import {getFirstPageProjects, getSpotlightProject} from "../../actions";
import {NEXT_PAGE_PROJECTS_LOADED} from "../../actions/types";

class ProjectsPage extends React.Component {

	state = {
		filterCategory: 'all',
		spotlightProject: null
	};

	componentDidMount() {
		this.props.getFirstPageProjects('all');
		this.getSpotlightProject();
		window.scrollTo(0, 0);
	}

	getSpotlightProject = async () => {

	};

	loadNextPage = async () => {
		try {
			const {projects, numToSkip} = this.props;

			let filteredCategory = this.state.filterCategory;
			if (filteredCategory === 'all') {
				filteredCategory = '';
			}

			const newProjects = [...projects];
			const response = (await axios.get(`/project/getRecentProjects?numSkip=${numToSkip}&category=${filteredCategory}`)).data;
			newProjects.push(...response.allProjects);

			this.props.dispatch({
				type: NEXT_PAGE_PROJECTS_LOADED,
				payload: {
					projects: newProjects,
					anotherPage: response.anotherPage,
					numToSkip: response.numToSkip
				}
			});

		} catch (error) {
			toast.error('There was an error getting the first page.')
		}
	};

	selectFilter = async (option) => {
		if (option === this.state.filterCategory) {
			return;
		} else {
			this.props.getFirstPageProjects(option);
		}
		this.setState({
			filterCategory: option
		});
	};

	render() {

		const {filterCategory} = this.state;

		const { anotherPage, projects, spotlightProject } = this.props;

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
						projects.map(project => (
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

function mapStateToProps(state) {
	return {
		projects: state.projects.projects,
		anotherPage: state.projects.anotherPage,
		spotlightProject: state.projects.spotlight
	}
}

function loadData(store) {
	return Promise.all([
		store.dispatch(getFirstPageProjects('all')),
		store.dispatch(getSpotlightProject())
	])
}

export default {
	component: connect(mapStateToProps, {getFirstPageProjects, getSpotlightProject})(ProjectsPage),
	loadData
};
