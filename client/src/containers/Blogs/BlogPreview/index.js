import React from 'react';
import moment from 'moment';
import {
	BlogHeaderDate,
	BlogHeaderMobileNum,
	BlogHeaderNum,
	BlogHeaderRow, BlogPreviewContent,
	BlogPreviewImage, BlogPreviewMobileTitle,
	BlogPreviewWrapper
} from "./styles";
import {H4, H5, H6} from "../../../styles/typography/Headers";
import {withRouter} from "react-router-dom";
import {LeadParagraph} from "../../../styles/typography/P";

const BlogPreview = ({ blog, editable, history }) => {

	const {
		title,
		num,
		contentPreview,

		publishDate,

		heroURL
	} = blog;

	const formattedDate = publishDate ? moment(publishDate).format('MMMM Do YYYY') : null;

	const goToDetails = () => {
		if (editable) {
			history.push('/admin/blog/edit/' + blog._id);
		} else {
			if (blog.urlString) {
				history.push('/blogs/' + blog.urlString);
			} else {
				history.push('/blogs/id/' + blog._id);
			}
		}
	}

	return (
		<BlogPreviewWrapper onClick={goToDetails}>
			<BlogPreviewImage bg={heroURL}>
				<BlogHeaderRow>
					<H4 color="highlight" className="desktopTitle">
						{title}
					</H4>
					<BlogHeaderNum>
						<H5>Will's Blog #{num}</H5>
					</BlogHeaderNum>
					<BlogHeaderDate>
						<H6 color="secondary">{formattedDate}</H6>
					</BlogHeaderDate>
				</BlogHeaderRow>
				<BlogHeaderMobileNum>
					<H5>Will's Blog #{num}</H5>
				</BlogHeaderMobileNum>
			</BlogPreviewImage>
			<BlogPreviewContent>
				<BlogPreviewMobileTitle>
					<H6 color="secondary">{formattedDate}</H6>
					<H4>
						{title}
					</H4>
				</BlogPreviewMobileTitle>
				<LeadParagraph>
					{contentPreview}
				</LeadParagraph>
			</BlogPreviewContent>
		</BlogPreviewWrapper>
	)

}

export default withRouter(BlogPreview);
