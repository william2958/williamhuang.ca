import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import axios from '../../../utils/axios';
import history from '../../../history';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import BlogEditor from "./BlogEditor";

class EditBlog extends React.Component {

	state = {
		blogData: null,
		editorState: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const blogId = this.props.match.params.blogId;
		if (blogId) {
			axios.get(`/blog/getBlog?blogId=${blogId}`)
				.then(({data}) => {
					const blog = data.blog;
					let contentToFill;
					if (IsValidJSONString(blog.content)) {

						const dbEditorState = convertFromRaw(JSON.parse(blog.content));
						contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

					} else {
						contentToFill = EditorState.createEmpty(decoratorLink)
					}
					blog.content = contentToFill;
					this.setState({
						blogData: blog,
					});
				})
				.catch(e => {
					console.error('Error getting blog: ', e)
				})
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

	render() {
		return (
			<div>
				<BlogEditor save={this.saveBlog} delete={this.deleteBlog} blogData={this.state.blogData} />
			</div>
		)
	}

}

export default EditBlog;
