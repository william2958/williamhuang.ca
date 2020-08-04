import React from 'react';
import { convertFromRaw, EditorState } from "draft-js";
import RichTextEditor from "../../../components/RichTextEditor";

import SvgIcon from "../../../components/SvgIcon";
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import {BlogDetailContent, BlogDetailContentWrapper, BlogDetailWrapper} from "./styles";
import {H2, H5} from "../../../styles/typography/Headers";
import {BackArrow} from "../../../styles/globalStyles";
import Button from "../../../components/UI/Button";
import {BlogSpotlightImage} from "../BlogHero/styles";
import {getBlogDetails} from "../../../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Helmet} from "react-helmet";
import {getImageUrl} from "../../../utils/getImageUrl";
import {LeadParagraph} from "../../../styles/typography/P";
import {BlogDetailsRow} from "../BlogPreview/styles";

class BlogDetail extends React.Component {

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.props.getBlogDetails(searchableId, !!id);
		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	goBack = () => {
		this.props.history.push('/blog');
	};

	render() {

		if (!this.props.blogDetails)
			return <BlogDetailWrapper>Loading...</BlogDetailWrapper>;

		const {
			title,
			contentPreview,
			num,

			content,
			publishDate,

			heroURL,
			urlString
		} = this.props.blogDetails;

		let contentToFill;
		if (IsValidJSONString(content)) {

			const dbEditorState = convertFromRaw(JSON.parse(content));
			contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

		} else {
			contentToFill = EditorState.createEmpty(decoratorLink)
		}

		return (
			<BlogDetailWrapper>

				<Helmet>
					<title>{`${title} | WH Blogs`}</title>
					<meta property="og:title" content={title} />
					<meta property="og:image" content={getImageUrl(heroURL, 'small')} />
					<meta property="description" content={contentPreview} />
					<meta property="og:url" content={`https://williamhuang.ca/blog/${urlString}`} />
				</Helmet>

				<div className="container">
					<BackArrow onClick={this.goBack}>
						<SvgIcon icon="BackCaret" />
						<h6>All Blogs</h6>
					</BackArrow>
				</div>
				<BlogDetailContentWrapper className="container">

					<BlogSpotlightImage bg={heroURL} rounded />

					<BlogDetailsRow>
						<H5 color="secondary">{publishDate}</H5>
						<H5 color="secondary">{`WILL'S BLOG #${num}`}</H5>
					</BlogDetailsRow>

					<BlogDetailContent>
						<H2>{title}</H2>
						<LeadParagraph>{contentPreview}</LeadParagraph>
					</BlogDetailContent>
				</BlogDetailContentWrapper>
				<RichTextEditor editorState={contentToFill} readOnly={true} />

				<Button
					center
					variant="secondary"
					onClick={() => window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth'
					})}
					style={{ marginTop: '35px' }}
				>Back To Top</Button>
			</BlogDetailWrapper>
		)
	}

};

function mapStateToProps(state) {
	return {
		blogDetails: state.blogs.blogDetails
	}
}

function loadData(store, match) {
	const id = match.params.id;
	const searchableId = id || match.params.urlString;
	return store.dispatch(getBlogDetails(searchableId, !!id));
}

export default {
	component: connect(mapStateToProps, { getBlogDetails })(withRouter(BlogDetail)),
	loadData
};
