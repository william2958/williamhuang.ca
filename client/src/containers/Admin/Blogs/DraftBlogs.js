import React, {useEffect} from 'react';
import {ListBlogsWrapper} from "./styles";
import {getAdminBlog} from "../../../actions";
import {connect} from "react-redux";
import BlogPreview from "../../Blogs/BlogPreview";

const DraftBlogs = ({ draft, getAdminBlog }) => {

	useEffect(() => {
		getAdminBlog(false)
	}, []);

	return (
		<ListBlogsWrapper className="container">
			<div className="">
				{
					draft.map(blog => (
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
	draft: state.blogs.draftBlogs
})

export default {
	component: connect(mapStateToProps, { getAdminBlog })(DraftBlogs),
	loadData: ({ dispatch }) => dispatch(getAdminBlog(false))
}
