import React, {useEffect} from 'react';
import {HomePageSection, HomePageSectionHeader, HomePageWrapper} from "../../styles";
import {H4, H5} from "../../../../styles/typography/Headers";
import BlogPreview from "../../../Blogs/BlogPreview";
import {LoadMoreButtonContainer} from "../../../../styles/globalStyles";
import {connect} from "react-redux";
import {getFirstPageBlogs, getNextPageBlogs} from "../../../../actions";
import {withRouter} from "react-router-dom";
import RecentProjects from "../RecentProjects";
import RecentBookReviews from "../RecentBookReviews";

const RecentBlogs = ({ history, blogs, anotherPage, getFirstPageBlogs, getNextPageBlogs}) => {

	useEffect(() => {

		getFirstPageBlogs()

	}, []);

	const firstSection = () => {

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
						<BlogPreview blog={blogs[0]} key={blogs[0]._id} />
					</div>
				</div>
			</HomePageSection>
		)
	}

	const secondSection = () => {
		if (blogs.length <= 1) {
			return null;
		}
		return (
			<HomePageSection>
				<div className="container">
					<div className="blogList">
						{
							blogs.slice(1, 3).map(blog => (
								<BlogPreview blog={blog} key={blog._id} />
							))
						}
					</div>
				</div>
			</HomePageSection>
		)
	}

	const thirdSection = () => {
		if (blogs.length <= 3) {
			return null;
		}
		return (
			<HomePageSection>
				<div className="container">
					<div className="blogList">
						{
							blogs.slice(3, 6).map(blog => (
								<BlogPreview blog={blog} key={blog._id} />
							))
						}
					</div>
				</div>
			</HomePageSection>
		)
	}

	return (
		<div>
			{firstSection()}
			<RecentProjects />
			{secondSection()}
			<RecentBookReviews />
			{thirdSection()}
			{anotherPage && (
				<LoadMoreButtonContainer>
					<button onClick={getNextPageBlogs}>Load More</button>
				</LoadMoreButtonContainer>
			)}
		</div>
	)

}

function mapStateToProps(state) {
	return {
		blogs: state.blogs.blogs,
		anotherPage: state.blogs.anotherPage
	}
}

export default connect(mapStateToProps, { getFirstPageBlogs, getNextPageBlogs})(withRouter(RecentBlogs))
