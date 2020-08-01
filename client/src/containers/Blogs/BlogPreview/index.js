import React from 'react';
import moment from 'moment';
import {
	BlogDetailsRow, BlogPreviewContent,
	BlogPreviewImage, BlogPreviewImageLarge,
	BlogPreviewWrapper
} from "./styles";
import {H3, H6} from "../../../styles/typography/Headers";
import {withRouter} from "react-router-dom";
import {BodyParagraph} from "../../../styles/typography/P";

const BlogPreview = ({ blog, editable, history }) => {

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
		<BlogPreviewWrapper className="col-sm-12">
			<div className="row no-gutters">
				<BlogPreviewImageLarge bg={heroURL} onClick={goToDetails} className="col-md-6" />
				<div className="col-md-6 content">
					<BlogDetailsRow>
						<H6 color="secondary">{formattedDate}</H6>
						<H6 color="secondary">{`WILL'S BLOG #${num}`}</H6>
					</BlogDetailsRow>
					<BlogPreviewContent>
						<H3>{title}</H3>
						<BodyParagraph>{contentPreview}</BodyParagraph>
					</BlogPreviewContent>
				</div>
			</div>
		</BlogPreviewWrapper>
	)

}

export default withRouter(BlogPreview);
