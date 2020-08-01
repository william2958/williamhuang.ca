import { connect } from 'react-redux';
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
import {getFirstPageProjects, getNextPageProjects, getSpotlightProject} from "../../actions";
import {Helmet} from "react-helmet";

class ProjectsPage extends React.Component {

	state = {
		filterCategory: 'all'
	};

	componentDidMount() {
		this.props.getFirstPageProjects('all');
		this.props.getSpotlightProject();
		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	loadNextPage = () => {
		let filteredCategory = this.state.filterCategory;
		if (filteredCategory === 'all') {
			filteredCategory = '';
		}
		this.props.getNextPageProjects(filteredCategory);
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
				<Helmet>
					<title>{`Projects | WH`}</title>
					<meta property="og:title" content={`Projects | WH`} />
					<meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />
					<meta property="description" content="Explore my blog, reviews, guides, and more." />
					<meta property="og:url" content={`https://williamhuang.ca/projects`} />
				</Helmet>

				{spotlightProject ? (
					<div className="row">
						{/*<H4 className="spotlightTitle">Spotlight</H4>*/}
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
	component: connect(mapStateToProps, {getFirstPageProjects, getSpotlightProject, getNextPageProjects})(ProjectsPage),
	loadData
};
