import React from 'react';
import { toast } from 'react-toastify';

import axios from '../../../utils/axios';
import BlogEditor from "./BlogEditor";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import {convertFromRaw, EditorState} from "draft-js";
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {getBlogDetails} from "../../../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class EditBlog extends React.Component {

	componentDidMount() {
		const blogId = this.props.match.params.blogId;
		if (blogId) {
			this.props.getBlogDetails(blogId, true, true);
		} else {
			history.push('/admin');
		}
	}

	saveBlog = async (blogData) => {
		const dataToUpdate = {
			...blogData,
			blogId: blogData._id
		};
		try {
			await axios.put('/blog/updateBlog', dataToUpdate);
			toast.success('Successfully saved blog!');
		} catch (e) {
			toast.error('Could not save the blog.');
			console.error('There was an error creating this blog');
		}
	};

	deleteBlog = async (blogData) => {
		const toDeleteId = blogData._id;

		try {
			await axios.delete('/blog/deleteBlog', { data: { blogId: toDeleteId} });
			toast.success('Deleted blog.');
			this.props.history.goBack();
		} catch (e) {
			toast.error('Could not delete blog.');
			console.error('Error deleting blog: ', e);
		}
	};

	setHighlight = async (blogData) => {
		try {
			await axios.put('/highlight/updateHighlight', { type: 'blog', id: blogData._id });
			toast.success('Updated highlight.');
		} catch (e) {
			toast.error('Could not update the highlight');
		}
	};

	render() {
		let contentToFill;
		if (IsValidJSONString(this.props.blogDetails.content)) {

			const dbEditorState = convertFromRaw(JSON.parse(this.props.blogDetails.content));
			contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

		} else {
			contentToFill = EditorState.createEmpty(decoratorLink)
		}
		const blogDetails = {
			...this.props.blogDetails,
			content: contentToFill
		}
		return (
			<div>
				<BlogEditor
					save={this.saveBlog}
					delete={this.deleteBlog}
					blogData={blogDetails}
					setHighlight={this.setHighlight}/>
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	blogDetails: state.blogs.editBlogDetails
})

function loadData(store, match) {
	const id = match.params.blogId;
	return store.dispatch(getBlogDetails(id, true, true));
}

export default {
	component: connect(mapStateToProps, { getBlogDetails })(withRouter(EditBlog)),
	loadData
};
