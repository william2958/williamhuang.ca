import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import _ from 'lodash';

import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import axios from "../../../utils/axios";
import {EditGuideIconPreview, EditGuideImagePreview, GuideEditorWrapper} from "./styles";
import CheckboxSimple from "../../../components/UI/Checkbox/CheckboxSimple";
import InputSimple from "../../../components/UI/Inputs/TextInput/InputSimple";
import TextBoxSimple from "../../../components/UI/Inputs/TextBox/TextboxSimple";
import RichTextEditor from "../../../components/RichTextEditor";
import Button from "../../../components/UI/Button";
import FileInput from "../../../components/UI/Inputs/FileInput";
import {H4} from "../../../styles/typography/Headers";
import SvgIcon from "../../../components/SvgIcon";
import {toast} from "react-toastify";

const DEFAULT_FORM_VALUES = {
	_id: '',
	title: '',
	urlString: '',
	technology: [],

	contentPreview: '',

	content: EditorState.createEmpty(decoratorLink),
	isPublished: false
};

class GuideEditor extends React.Component {

	state = {
		editingGuide: DEFAULT_FORM_VALUES,
		errors: {},
		newTechnologyItem: ''
	};

	handleSaveHotkey = () => {
		this.saveGuide();
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

		if (this.props.guideData !== prevProps.guideData) {

			const editingGuide = this.props.guideData
				? Object.assign({}, DEFAULT_FORM_VALUES, this.props.guideData)
				: DEFAULT_FORM_VALUES;

			this.setState({
				editingGuide
			})

		}

	}

	handleInputChange = ({ target }) => {
		const updatedValue = target.name === 'isPublished' ? target.checked : target.value;

		if (target.name === 'newTechnologyItem') {
			this.setState({
				newTechnologyItem: target.value
			});
			return;
		}

		this.setState({
			editingGuide: {
				...this.state.editingGuide,
				[target.name]: updatedValue
			}
		})
	};

	selectCategory = (option) => {
		this.setState({
			editingGuide: {
				...this.state.editingGuide,
				category: option
			}
		})
	};

	handleEditorChange = (newEditorState) => {
		this.setState({
			editingGuide: {
				...this.state.editingGuide,
				content: newEditorState
			}
		})
	};

	addNewTechnologyItem = () => {
		const newTechnology = [...this.state.editingGuide.technology];
		newTechnology.push(this.state.newTechnologyItem);
		this.setState({
			editingGuide: {
				...this.state.editingGuide,
				technology: newTechnology
			},
			newTechnologyItem: ''
		})
	};

	removeTechnologyItem = (item) => {
		let newTechnology = [...this.state.editingGuide.technology];
		newTechnology = newTechnology.filter(tech => tech !== item);
		this.setState({
			editingGuide: {
				...this.state.editingGuide,
				technology: newTechnology
			}
		})
	};

	selectIconImage = async (e) => {
		const file = e.target.files[0];

		if (file) {
			try {
				const data = new FormData();
				data.append('file', file);
				data.append('path', 'guideImages/iconImages/');

				const response = (await axios.post('/core/uploadImage', data)).data;

				toast.success('Image uploaded');
				this.setState({
					editingGuide: {
						...this.state.editingGuide,
						iconURL: response.imageURL
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
				data.append('path', 'guideImages/');

				const response = (await axios.post('/core/uploadImage', data)).data;

				toast.success('Image uploaded');
				this.setState({
					editingGuide: {
						...this.state.editingGuide,
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

	saveGuide = () => {
		const dataToSave = {...this.state.editingGuide};
		dataToSave.content = JSON.stringify(convertToRaw(dataToSave.content.getCurrentContent()));
		this.props.save(dataToSave);
	};

	deleteGuide = () => {
		if (window.confirm("Are you sure you want to delete this guide?"))
			this.props.delete(this.state.editingGuide);
	};

	render() {
		const {
			title,
			contentPreview,
			technology,
			urlString,

			content,
			isPublished,

			iconURL,
			previewImageURL
		} = this.state.editingGuide;

		const {
			imageError
		} = this.state.errors;

		const { newTechnologyItem } = this.state;

		return (
			<GuideEditorWrapper className="container">
				<div className="row metadata">
					<div className="col-md-6">
						<InputSimple label="Title" name="title" value={title} fullWidth onChange={this.handleInputChange} />
						<InputSimple label="URL String" name="urlString" value={urlString} fullWidth onChange={this.handleInputChange} />

						<TextBoxSimple
							label="contentPreview"
							name="contentPreview"
							type="text"
							value={contentPreview}
							onChange={this.handleInputChange}
							fullWidth
						/>

						<H4>Tech Stack</H4>
						{technology.map(item => (
							<div className="technologyItem" key={item}>
								<SvgIcon icon="Close" hover onClick={() => this.removeTechnologyItem(item)} />
								<span>{item}</span>
							</div>
						))}
						<InputSimple label="New Item" name="newTechnologyItem" value={newTechnologyItem} onChange={this.handleInputChange} />
						<Button onClick={this.addNewTechnologyItem}>Add</Button>

						<CheckboxSimple
							label="Published"
							name="isPublished"
							type="checkbox"
							value={isPublished}
							onChange={this.handleInputChange} />

					</div>
					<div className="col-md-3">
						<H4>Icon Image</H4>
						<EditGuideIconPreview src={iconURL} alt="" />
						<FileInput title="Select Hero Image" onChange={this.selectIconImage} name="selectIconImage" />
						{ imageError && <div>{imageError}</div>}
					</div>
					<div className="col-md-3">
						<H4>Preview Image</H4>
						<EditGuideImagePreview src={previewImageURL} alt="" />
						<FileInput title="Select Preview Image" onChange={this.selectPreviewImage} name="selectPreviewImage" />
						{ imageError && <div>{imageError}</div>}
					</div>
				</div>


				<div>
					<RichTextEditor editorState={content} changeEditorState={this.handleEditorChange} />
				</div>

				<div className="row">
					<Button variant={'secondary'} center onClick={this.deleteGuide}>DELETE</Button>
					<Button center onClick={this.saveGuide}>SAVE</Button>
				</div>
			</GuideEditorWrapper>
		)

	}

}

export default GuideEditor;
