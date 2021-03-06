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
import {getImageUrl} from "../../../utils/getImageUrl";

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
            return <BookReviewDetailWrapper>Loading...</BookReviewDetailWrapper>;
        }

        const {
            title,
            author,
            publishDate,
            coverURL,
            recommended,
            category,
            contentPreview,
            content,
            urlString,
            rating
        } = this.props.bookReviewDetails;

        let contentToFill;
        if (IsValidJSONString(content)) {

            const dbEditorState = convertFromRaw(JSON.parse(content));
            contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

        } else {
            contentToFill = EditorState.createEmpty(decoratorLink)
        }

        return (
            <BookReviewDetailWrapper>
                <Helmet>
                    <title>{`${title} | WH Books`}</title>
                    <meta property="og:title" content={title} />
                    <meta property="og:image" content={getImageUrl(coverURL, 'small')} />
                    <meta property="description" content={contentPreview} />
                    <meta property="og:url" content={`https://williamhuang.ca/bookReviews/${urlString}`} />
                </Helmet>
                <div className="container">
                    <BackArrow onClick={this.goBack}>
                        <SvgIcon icon="BackCaret" />
                        <h6>Books</h6>
                    </BackArrow>
                </div>
                <BookReviewDetailContentWrapper className="container">
                    <BookReviewDetailImage bg={coverURL} />
                    <BookReviewDetailContent>
                        <H2>{title}</H2>
                        <H5 uppercase color="secondary">{author} - {publishDate}</H5>
                        <div className="bookReviewMetadata">
                            <TypeLabel type={category} />
                            <BookReviewRatingWrapper className="ratingWrapper">
                                {recommended && (<SvgIcon icon='Star' title="Recommended" size={16}/>)}
                                <H5 uppercase>{rating} / 5</H5>
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
