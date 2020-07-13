import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import _ from 'lodash';

import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import axios from "../../../utils/axios";
import {EditBlogImagePreview, BlogEditorWrapper} from "./styles";
import CheckboxSimple from "../../../components/UI/Checkbox/CheckboxSimple";
import InputSimple from "../../../components/UI/Inputs/TextInput/InputSimple";
import TextBoxSimple from "../../../components/UI/Inputs/TextBox/TextboxSimple";
import RichTextEditor from "../../../components/RichTextEditor";
import Button from "../../../components/UI/Button";
import FileInput from "../../../components/UI/Inputs/FileInput";
import {H4} from "../../../styles/typography/Headers";
import {toast} from "react-toastify";

const DEFAULT_FORM_VALUES = {
	_id: '',
	title: '',
	urlString: '',
	num: '000',
	contentPreview: '',

	content: EditorState.createEmpty(decoratorLink),
	isPublished: false
};

class BlogEditor extends React.Component {

	state = {
		editingBlog: DEFAULT_FORM_VALUES,
		errors: {}
	};

	handleSaveHotkey = () => {
		this.saveBlog();
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

		if (this.props.blogData !== prevProps.blogData) {

			const editingBlog = this.props.blogData
				? Object.assign({}, DEFAULT_FORM_VALUES, this.props.blogData)
				: DEFAULT_FORM_VALUES;

			this.setState({
				editingBlog
			})

		}

	}

	handleInputChange = ({ target }) => {
		const updatedValue = target.name === 'isPublished' ? target.checked : target.value;

		this.setState({
			editingBlog: {
				...this.state.editingBlog,
				[target.name]: updatedValue
			}
		})
	};

	selectCategory = (option) => {
		this.setState({
			editingBlog: {
				...this.state.editingBlog,
				category: option
			}
		})
	};

	handleEditorChange = (newEditorState) => {
		this.setState({
			editingBlog: {
				...this.state.editingBlog,
				content: newEditorState
			}
		})
	};

	selectHeroImage = async (e) => {
		const file = e.target.files[0];

		if (file) {
			try {
				const data = new FormData();
				data.append('file', file);
				data.append('path', 'blogImages/');

				const response = (await axios.post('/core/uploadImage', data)).data;

				toast.success('Image uploaded');
				this.setState({
					editingBlog: {
						...this.state.editingBlog,
						heroURL: response.imageURL
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

	selectPreviewImage = async (e) => {
		const file = e.target.files[0];

		if (file) {
			try {
				const data = new FormData();
				data.append('file', file);
				data.append('path', 'blogImages/');

				const response = (await axios.post('/core/uploadImage', data)).data;

				toast.success('Image uploaded');
				this.setState({
					editingBlog: {
						...this.state.editingBlog,
						previewImageURL: response.imageURL
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

	saveBlog = () => {
		const dataToSave = {...this.state.editingBlog};
		dataToSave.content = JSON.stringify(convertToRaw(dataToSave.content.getCurrentContent()));
		this.props.save(dataToSave);
	};

	deleteBlog = () => {
		if (window.confirm("Are you sure you want to delete this guide?"))
			this.props.delete(this.state.editingBlog);
	};

	render() {
		const {
			title,
			num,
			contentPreview,
			urlString,

			content,
			isPublished,

			heroURL,
			previewImageURL
		} = this.state.editingBlog;

		const {
			imageError
		} = this.state.errors;

		return (
			<BlogEditorWrapper className="container">
				<div className="row metadata">
					<div className="col-md-6">
						<InputSimple label="Title" name="title" value={title} onChange={this.handleInputChange} fullWidth />
						<InputSimple label="Blog Num" name="num" value={num} onChange={this.handleInputChange} fullWidth />
						<InputSimple label="URL String" name="urlString" value={urlString} onChange={this.handleInputChange} fullWidth />

						<TextBoxSimple
							label="contentPreview"
							name="contentPreview"
							type="text"
							value={contentPreview}
							onChange={this.handleInputChange}
							fullWidth
						/>

						<CheckboxSimple
							label="Published"
							name="isPublished"
							type="checkbox"
							value={isPublished}
							onChange={this.handleInputChange} />

					</div>
					<div className="col-md-3">
						<H4>Hero Image</H4>
						<EditBlogImagePreview src={heroURL} alt="" />
						<FileInput title="Select Hero Image" onChange={this.selectHeroImage} name="selectHeroImage" />
						{ imageError && <div>{imageError}</div>}
					</div>
					<div className="col-md-3">
						<H4>Preview Image</H4>
						<EditBlogImagePreview src={previewImageURL} alt="" />
						<FileInput title="Select Preview Image" onChange={this.selectPreviewImage} name="selectPreviewImage" />
						{ imageError && <div>{imageError}</div>}
					</div>
				</div>


				<div>
					<RichTextEditor editorState={content} changeEditorState={this.handleEditorChange} />
				</div>

				<div className="row">
					<Button variant={'secondary'} center onClick={this.deleteBlog}>DELETE</Button>
					<Button center onClick={this.saveBlog}>SAVE</Button>
				</div>
			</BlogEditorWrapper>
		)

	}

}

export default BlogEditor;
