import React, {useEffect, useState} from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify'
import history from "../../../history";
import {ListBlogsWrapper} from "./styles";

const DraftBlogs = () => {

	const [draftBlogs, setDraftBlogs] = useState([]);

	useEffect(() => {
		async function getDraftBlogs() {
			try {

				const response = (await axios.get('/blog/getBlogAdmin?isPublished=false')).data;

				setDraftBlogs(response.blogs);

			} catch (e) {
				toast.error('Could not find drafts.');
			}
		}
		getDraftBlogs();
	}, []);

	return (
		<ListBlogsWrapper className="container">
			<div className="">
				{
					draftBlogs.map(blog => (
						<div key={blog._id} onClick={() => history.push('/admin/blog/edit/' + blog._id)}>
							{blog.title}
						</div>
					))
				}
			</div>
		</ListBlogsWrapper>
	)

};

export default DraftBlogs;
