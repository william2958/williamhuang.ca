import React, {useEffect, useState} from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify'
import history from "../../../history";
import {ListBlogsWrapper} from "./styles";

const PublishedBlogs = () => {

	const [publishedBlogs, setPublishedBlogs] = useState([]);

	useEffect(() => {
		async function getPublishedBlogs() {
			try {

				const response = (await axios.get('/blog/getBlogAdmin?isPublished=true')).data;

				setPublishedBlogs(response.blogs);

			} catch (e) {
				toast.error('Could not find published blogs.');
			}
		}
		getPublishedBlogs();
	}, []);

	return (
		<ListBlogsWrapper className="container">
			<div className="">
				{
					publishedBlogs.map(blog => (
						<div key={blog._id} onClick={() => history.push('/admin/blog/edit/' + blog._id)}>
							{blog.title}
						</div>
					))
				}
			</div>
		</ListBlogsWrapper>
	)

};

export default PublishedBlogs;
