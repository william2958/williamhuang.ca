import React from 'react';
import { connect } from 'react-redux';
import { EditorState, convertFromRaw } from "draft-js";
import RichTextEditor from "../../../components/RichTextEditor";

import TypeLabel from "../../../components/TypeLabel";
import SvgIcon from "../../../components/SvgIcon";
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";

import {
    BookReviewDetailContent,
    BookReviewDetailContentWrapper,
    BookReviewDetailImage,
    BookReviewDetailWrapper
} from "./styles";
import {H2, H5} from "../../../styles/typography/Headers";
import {BookReviewRatingWrapper} from "../styles";
import {BackArrow} from "../../../styles/globalStyles";
import Button from "../../../components/UI/Button";
import {Helmet} from "react-helmet";
import {getBookReviewDetails} from "../../../actions";
import {withRouter} from "react-router-dom";
import {IsValidJSONString} from "../../../utils/isValidJSON";

class BookReviewDetail extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        const searchableId = id || this.props.match.params.urlString;
        this.props.getBookReviewDetails(searchableId, !!id);
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }

    goBack = () => {
        this.props.history.push('/bookReviews')
    };

    render() {

        if (!this.props.bookReviewDetails) {
            return null;
        }

        const {
            title,
            author,
            publishDate,
            coverURL,
            recommended,
            category,
            contentPreview
        } = this.props.bookReviewDetails;

        let contentToFill;
        if (IsValidJSONString(this.props.bookReviewDetails.content)) {

            const dbEditorState = convertFromRaw(JSON.parse(this.props.bookReviewDetails.content));
            contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

        } else {
            contentToFill = EditorState.createEmpty(decoratorLink)
        }

        return (
            <BookReviewDetailWrapper>
                <Helmet>
                    <title>{title + ' | WH'}</title>
                    <meta property="og:title" content={title} />
                    <meta property="og:image" content={coverURL} />
                    <meta property="description" content={contentPreview} />
                    {/*<meta property="description" content="Explore my blog, reviews, guides, and more." />*/}
                    {/*<meta property="og:url" content={window.location.href} />*/}
                </Helmet>
                <div className="container">
                    <BackArrow onClick={this.goBack}>
                        <SvgIcon icon="BackCaret" />
                        <h6>All Reviews</h6>
                    </BackArrow>
                </div>
                <BookReviewDetailContentWrapper className="container">
                    <BookReviewDetailImage bg={coverURL} />
                    <BookReviewDetailContent>
                        <H2>{title}</H2>
                        <H5 color="secondary">{author} - {publishDate}</H5>
                        <div className="bookReviewMetadata">
                            <TypeLabel type={category} />
                            <BookReviewRatingWrapper className="ratingWrapper">
                                {recommended && (<SvgIcon icon='Star' title="Recommended" size={16}/>)}
                                {/*<H5>{rating} / 5</H5>*/}
                            </BookReviewRatingWrapper>
                        </div>
                    </BookReviewDetailContent>
                </BookReviewDetailContentWrapper>
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
            </BookReviewDetailWrapper>
        )
    }

};

function mapStateToProps(state) {
    return {
        bookReviewDetails: state.bookReviews.bookReviewDetails
    }
}

function loadData(store, match) {
    const id = match.params.id;
    const searchableId = id || match.params.urlString;
    return store.dispatch(getBookReviewDetails(searchableId, !!id));
}

export default {
    component: connect(mapStateToProps, { getBookReviewDetails })(withRouter(BookReviewDetail)),
    loadData
};
