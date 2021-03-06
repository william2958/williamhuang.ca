import React from 'react';
import {H5, H6} from "../../../styles/typography/Headers";
import {
	BlogHeroWrapper, BlogSpotlightContent, BlogSpotlightImage,
} from "./styles";

import {withRouter} from "react-router-dom";

const BlogHero = ({ blog, editable, fit, history }) => {

	const goToDetails = () => {
		if (editable) {
			history.push('/admin/blogs/edit/' + blog._id);
		} else {
			if (blog.urlString) {
				history.push('/blogs/' + blog.urlString);
			} else {
				history.push('/blogs/id/' + blog._id);
			}
		}
	};
	return (
		<BlogHeroWrapper onClick={goToDetails} fit={fit}>
			<BlogSpotlightImage bg={blog.heroURL} fit={fit}>
				<BlogSpotlightContent>
					<H5 uppercase color="highlight">{blog.title}</H5>
					<H6 color="secondary">#{blog.num}</H6>
				</BlogSpotlightContent>
			</BlogSpotlightImage>
		</BlogHeroWrapper>
	)

};

export default withRouter(BlogHero);
