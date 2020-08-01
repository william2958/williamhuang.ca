import React, {useEffect} from 'react';
import {HomePageSection, HomePageSectionHeader} from "../../styles";
import {H4, H5} from "../../../../styles/typography/Headers";
import BlogPreview from "../../../Blogs/BlogPreview";
import {LoadMoreButtonContainer} from "../../../../styles/globalStyles";
import {connect} from "react-redux";
import {getFirstPageBlogs, getNextPageBlogs} from "../../../../actions";
import {withRouter} from "react-router-dom";

const RecentBlogs = ({ history, blogs, anotherPage, getFirstPageBlogs, getNextPageBlogs}) => {

	useEffect(() => {

		getFirstPageBlogs()

	}, []);

	if (!blogs.length) {
		return null;
	}

	return (
		<HomePageSection>
			<div className="container">
				<HomePageSectionHeader>
					<H4 underline>Blog</H4>
					<H5
						className="seeAllLink"
						onClick={() => history.push('/blog')}
					>See All</H5>
				</HomePageSectionHeader>
				<div className="blogList">
					{
						blogs.map(blog => (
							<BlogPreview blog={blog} key={blog._id} />
						))
					}
				</div>

				{anotherPage && (
					<LoadMoreButtonContainer>
						<button onClick={getNextPageBlogs}>Load More</button>
					</LoadMoreButtonContainer>
				)}
			</div>
		</HomePageSection>
	)

}

function mapStateToProps(state) {
	return {
		blogs: state.blogs.blogs,
		anotherPage: state.blogs.anotherPage
	}
}

export default connect(mapStateToProps, { getFirstPageBlogs, getNextPageBlogs})(withRouter(RecentBlogs))
