import React from 'react';
import _ from 'lodash';

import axios from '../../../utils/axios';
import { EditorState, convertToRaw } from 'draft-js';
import RichTextEditor from "../../../components/RichTextEditor";
import Dropdown from "../../../components/Dropdown";
import {BOOK_REVIEW_CATEGORY_OPTIONS} from "../../../constants";

import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import InputSimple from "../../../components/UI/Inputs/TextInput/InputSimple";
import CheckboxSimple from "../../../components/UI/Checkbox/CheckboxSimple";
import TextBoxSimple from "../../../components/UI/Inputs/TextBox/TextboxSimple";
import Button from "../../../components/UI/Button";
import {toast} from "react-toastify";
import {BookReviewEditorWrapper, EditBookReviewImagePreview} from "./styles";
import {H4} from "../../../styles/typography/Headers";
import FileInput from "../../../components/UI/Inputs/FileInput";

const DEFAULT_FORM_VALUES = {
    _id: '',
    title: '',
    author: '',
    rating: 0,
    contentPreview: '',
    urlString: '',
    category: 'fantasy',
    content: EditorState.createEmpty(decoratorLink),
    isPublished: false,
    recommended: false
};

class BookReviewEditor extends React.Component {

    state = {
        editingReview: DEFAULT_FORM_VALUES,
        errors: {}
    };

    handleSaveHotkey = () => {
        this.saveBookReview();
    };

    throttledSaveHotkey = _.throttle(this.handleSaveHotkey, 2000, { 'trailing': false });

    keyDownListener = (e) => {
        if (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            e.preventDefault();
            this.throttledSaveHotkey();
        }
    };

    componentDidMount() {
        document.addEventListener("keydown", this.keyDownListener, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDownListener);
    }

    componentDidUpdate(prevProps) {

        if (this.props.bookReviewData !== prevProps.bookReviewData) {

            const editingReview = this.props.bookReviewData
                ? Object.assign({}, DEFAULT_FORM_VALUES, this.props.bookReviewData)
                : DEFAULT_FORM_VALUES;

            this.setState({
                editingReview
            })

        }
    }

    handleInputChange = ({target}) => {
        const updatedValue =
            target.name === 'isPublished' || target.name === 'recommended'
                ? target.checked
                : target.value;

        this.setState({
            editingReview: {
                ...this.state.editingReview,
                [target.name]: updatedValue
            }
        });
    };

    selectCategory = (option) => {
        this.setState({
            editingReview: {
                ...this.state.editingReview,
                category: option
            }
        })
    };

    handleEditorChange = (newEditorState) => {
        this.setState({
            editingReview: {
                ...this.state.editingReview,
                content: newEditorState
            }
        })
    };

    selectImage = async (e) => {
        const file = e.target.files[0];

        if (file) {
            try {
                const data = new FormData();
                data.append('file', file);
                data.append('path', 'bookReviewImages/');

                const response = (await axios.post('/bookReview/uploadBookImage', data)).data;

                toast.success('Image uploaded');
                this.setState({
                    editingReview: {
                        ...this.state.editingReview,
                        coverURL: response.coverURL
                    }
                });
            } catch (error) {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        imageError: 'Could not upload image. Please try again.'
                    }
                })
            }
        } else {
            toast.error('There was no file provided');
        }

    };

    saveBookReview = () => {
        const dataToSave = {...this.state.editingReview};
        dataToSave.content = JSON.stringify(convertToRaw(dataToSave.content.getCurrentContent()));
        this.props.save(dataToSave);
    };

    deleteBookReview = () => {
        this.props.delete(this.state.editingReview);
    };

    render() {

        const {
            title,
            contentPreview,
            rating,
            category,
            coverURL,
            content,
            isPublished,
            author,
            urlString,
            recommended
        } = this.state.editingReview;

        const {
            imageError
        } = this.state.errors;

        return (
            <BookReviewEditorWrapper className="container">
                <div className="row metadata">
                    <div className="col-md-6">
                        <InputSimple label="Title" name="title" type="text" value={title} fullWidth onChange={this.handleInputChange}/>
                        <InputSimple label="URL String" name="urlString" type="text" value={urlString} fullWidth onChange={this.handleInputChange}/>
                        <InputSimple label="Author" name="author" type="text" value={author} fullWidth onChange={this.handleInputChange}/>
                        <InputSimple label="Rating" name="rating" type="number" min='1' max='5' value={rating} fullWidth onChange={this.handleInputChange}/>
                        <TextBoxSimple label="contentPreview" name="contentPreview" type="text" value={contentPreview} fullWidth onChange={this.handleInputChange}/>

                    </div>
                    <div className="col-md-3">
                        <CheckboxSimple
                            label="Published"
                            name="isPublished"
                            type="checkbox"
                            value={isPublished}
                            onChange={this.handleInputChange} />
                        <CheckboxSimple
                            label="Recommended"
                            name="recommended"
                            type="checkbox"
                            value={recommended}
                            onChange={this.handleInputChange} />
                        <Dropdown value={category} name={'category'} options={BOOK_REVIEW_CATEGORY_OPTIONS} onChange={this.selectCategory} />
                    </div>
                    <div className="col-md-3">
                        <H4>Book Cover</H4>
                        <EditBookReviewImagePreview src={coverURL} />
                        <FileInput title="Select Cover Image" onChange={this.selectImage} name="selectCoverImage" />
                        { imageError && <div>{imageError}</div>}
                    </div>
                </div>

                <div>
                    <RichTextEditor editorState={content} changeEditorState={this.handleEditorChange} />
                </div>
                <div className="row">
                    <Button variant={'secondary'} center onClick={this.deleteBookReview}>DELETE</Button>
                    <Button primary center onClick={this.saveBookReview}>SAVE</Button>
                </div>
            </BookReviewEditorWrapper>
        )
    }

}

export default BookReviewEditor;
