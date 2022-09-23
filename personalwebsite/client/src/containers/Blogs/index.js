import React from 'react';
import {BlogsPageHeader, BlogsPageWrapper} from "./styles";
import {Helmet} from "react-helmet";

import {H4} from "../../styles/typography/Headers";
import {GutteredRow, LoadMoreButtonContainer} from "../../styles/globalStyles";
import {getFirstPageBlogs, getNextPageBlogs} from "../../actions";
import {connect} from "react-redux";
import BlogPreviewSmall from "./BlogPreview/BlogPreviewSmall";

class BlogsPage extends React.Component {

	componentDidMount() {
		this.props.getFirstPageBlogs();

		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	loadNextPage = () => {
		this.props.getNextPageBlogs();
	};

	render() {
		const { anotherPage, blogs } = this.props;

		return (
			<BlogsPageWrapper className="container">

				<Helmet>
					<title>{`Blogs | WH`}</title>
					<meta property="og:title" content={`Blogs | WH`} />
					<meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />
					<meta property="description" content="Explore my blog, reviews, guides, and more." />
					<meta property="og:url" content={`https://williamhuang.ca/projects`} />
				</Helmet>

				<BlogsPageHeader className="row">
					<H4>All Blogs</H4>
				</BlogsPageHeader>

				<GutteredRow className="row no-gutters">
					{
						blogs.map(blog => (
							<BlogPreviewSmall blog={blog} key={blog._id} />
						))
					}

				</GutteredRow>

				{anotherPage && (
					<LoadMoreButtonContainer>
						<button onClick={this.loadNextPage}>Load More</button>
					</LoadMoreButtonContainer>
				)}

			</BlogsPageWrapper>
		)
	}

}

function mapStateToProps(state) {
	return {
		blogs: state.blogs.blogs,
		anotherPage: state.blogs.anotherPage
	}
}

function loadData(store) {
	return store.dispatch(getFirstPageBlogs())
}

export default {
	component: connect(mapStateToProps, { getFirstPageBlogs, getNextPageBlogs })(BlogsPage),
	loadData
};
