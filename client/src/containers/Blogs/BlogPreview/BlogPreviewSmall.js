import React from 'react';
import moment from 'moment';

import { withRouter } from 'react-router-dom';
import {BlogDetailsRow, BlogPreviewImage, BlogPreviewWrapper} from "./styles";
import {H3, H4, H6} from "../../../styles/typography/Headers";
import {BodyParagraph} from "../../../styles/typography/P";

const BlogPreviewSmall = ({ blog, editable, history }) => {

	const {
		title,
		num,
		contentPreview,
		publishDate,
		heroURL
	} = blog;

	const formattedDate = publishDate ? moment(publishDate).format('MMM Do YYYY') : null;

	const goToDetails = () => {
		if (editable) {
			history.push('/admin/blog/edit/' + blog._id);
		} else {
			if (blog.urlString) {
				history.push('/blog/' + blog.urlString);
			} else {
				history.push('/blog/id/' + blog._id);
			}
		}
	}

	return (
		<div className="col-md-4">
			<BlogPreviewWrapper>
				<BlogPreviewImage bg={heroURL} onClick={goToDetails} />
				<BlogDetailsRow>
					<H6 color="secondary">{formattedDate}</H6>
					<H6 color="secondary">{`WILL'S BLOG #${num}`}</H6>
				</BlogDetailsRow>
				<H3>{title}</H3>
				<BodyParagraph>{contentPreview}</BodyParagraph>
			</BlogPreviewWrapper>
		</div>
	)

}

export default withRouter(BlogPreviewSmall);
