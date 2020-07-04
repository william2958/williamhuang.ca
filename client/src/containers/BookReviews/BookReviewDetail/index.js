import React from 'react';
import moment from 'moment';
import { convertFromRaw, EditorState } from "draft-js";
import axios from '../../../utils/axios';
import RichTextEditor from "../../../components/RichTextEditor";

import TypeLabel from "../../../components/TypeLabel";
import SvgIcon from "../../../components/SvgIcon";
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
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

class BookReviewDetail extends React.Component {

    state = {
        title: '',
        content: EditorState.createEmpty(decoratorLink)
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        const searchableId = id || this.props.match.params.urlString;
        this.getBookDetails(searchableId, !!id);

        window.scrollTo(0, 0);
    }

    getBookDetails = async (id, isId) => {
        try {
            const urlString = isId
                ? `/bookReview/getBookReview?bookReviewId=${id}`
                : `/bookReview/getBookReviewFromString?urlString=${id}`;
            const response = (await axios.get(urlString)).data;
            const bookReview = response.bookReview;

            const {
                title,
                author,
                category,
                coverURL,
                rating,
                publishDate,
                recommended
            } = bookReview;

            const formattedDate = publishDate ? moment(publishDate).format('MMMM Do YYYY') : null;

            let contentToFill;
            if (IsValidJSONString(bookReview.content)) {

                const dbEditorState = convertFromRaw(JSON.parse(bookReview.content));
                contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

            } else {
                contentToFill = EditorState.createEmpty(decoratorLink)
            }

            this.setState({
                title,
                author,
                category,
                coverURL,
                rating,
                publishDate: formattedDate,
                content: contentToFill,
                recommended
            });

        } catch (err) {
            console.error('There was an error fetching that book detail: ', err);
        }
    };

    goBack = () => {
        this.props.history.push('/bookReviews')
    };

    render() {
        const {
            title,
            author,
            publishDate,
            coverURL,
            recommended,
            category,
            content
        } = this.state;

        if (!title) {
            return (
                <div style={{minHeight: '100vh'}}>Loading...</div>
            )
        }

        return (
            <BookReviewDetailWrapper>
                {/* TODO: This wont work without server side rendering */}
                <Helmet>
                    <meta property="og:title" content={title} />
                    <meta property="og:image" content={coverURL} />
                    {/*<meta property="description" content="Explore my blog, reviews, guides, and more." />*/}
                    <meta property="og:url" content={window.location.href} />
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
                <RichTextEditor editorState={content} readOnly={true} />

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

export default BookReviewDetail;
