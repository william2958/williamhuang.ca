import React, {useEffect} from 'react';
import {ListBlogsWrapper} from "./styles";
import {getAdminBlog} from "../../../actions";
import {connect} from "react-redux";
import BlogPreview from "../../Blogs/BlogPreview";

const PublishedBlogs = ({ published, getAdminBlog }) => {

	useEffect(() => {
		getAdminBlog(true)
	}, []);

	return (
		<ListBlogsWrapper className="container">
			<div className="">
				{
					published.map(blog => (
						<div className="col-md-12" key={blog._id}>
							<BlogPreview blog={blog} editable />
						</div>
					))
				}
			</div>
		</ListBlogsWrapper>
	)

};

const mapStateToProps = (state) => ({
	published: state.blogs.publishedBlogs
})

export default {
	component: connect(mapStateToProps, { getAdminBlog })(PublishedBlogs),
	loadData: ({ dispatch }) => dispatch(getAdminBlog(true))
};
