import React from 'react';
import { toast } from 'react-toastify';
import axios from '../../../utils/axios';
import BlogEditor from "./BlogEditor";

const NewBlog = ({ history }) => {

	const createBlog = async (blogData) => {

		try {
			const response = (await axios.post('/blog/createBlog', blogData)).data;
			if (response) {
				const blogId = response.blogId;
				toast.success('Created blog');
				history.push('/admin/blog/edit/' + blogId);
			} else {
				toast.error('Could not create blog.');
			}
		} catch (e) {
			console.error('There was an error creating the blog: ');
		}

	};

	const cancelCreate = () => {
		toast.success('Cancelled blog creation.');
		history.goBack();
	};

	return (
		<div>
			<BlogEditor save={createBlog} delete={cancelCreate} />
		</div>
	)

};

export default {
	component: NewBlog
};
