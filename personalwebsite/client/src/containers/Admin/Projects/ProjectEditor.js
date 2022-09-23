import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import _ from 'lodash';

import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import axios from "../../../utils/axios";
import {EditProjectImagePreview, ProjectEditorWrapper} from "./styles";
import CheckboxSimple from "../../../components/UI/Checkbox/CheckboxSimple";
import InputSimple from "../../../components/UI/Inputs/TextInput/InputSimple";
import Dropdown from "../../../components/Dropdown";
import {PROJECT_CATEGORY_OPTIONS} from "../../../constants";
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
	techStack: [],
	liveLink: '',
	contentPreview: '',
	category: 'web',
	content: EditorState.createEmpty(decoratorLink),
	isPublished: false
};

class ProjectEditor extends React.Component {

	state = {
		editingProject: DEFAULT_FORM_VALUES,
		newTechStackItem: '',
		errors: {}
	};

	handleSaveHotkey = () => {
		this.saveProject();
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

		if (this.props.projectData !== prevProps.projectData) {

			const editingProject = this.props.projectData
				? Object.assign({}, DEFAULT_FORM_VALUES, this.props.projectData)
				: DEFAULT_FORM_VALUES;

			this.setState({
				editingProject
			})

		}

	}

	handleInputChange = ({ target }) => {
		const updatedValue = (target.name === 'isPublished' || target.name === 'spotlight') ? target.checked : target.value;

		if (target.name === 'newTechStackItem') {
			this.setState({
				newTechStackItem: target.value
			});
			return;
		}

		this.setState({
			editingProject: {
				...this.state.editingProject,
				[target.name]: updatedValue
			}
		})
	};

	selectCategory = (option) => {
		this.setState({
			editingProject: {
				...this.state.editingProject,
				category: option
			}
		})
	};

	handleEditorChange = (newEditorState) => {
		this.setState({
			editingProject: {
				...this.state.editingProject,
				content: newEditorState
			}
		})
	};

	addNewTechStackItem = () => {
		const newTechStack = [...this.state.editingProject.techStack];
		newTechStack.push(this.state.newTechStackItem);
		this.setState({
			editingProject: {
				...this.state.editingProject,
				techStack: newTechStack
			},
			newTechStackItem: ''
		})
	};

	removeTechStackItem = (item) => {
		let newTechStack = [...this.state.editingProject.techStack];
		newTechStack = newTechStack.filter(tech => tech !== item);
		this.setState({
			editingProject: {
				...this.state.editingProject,
				techStack: newTechStack
			}
		})
	};

	selectHeroImage = async (e) => {
		const file = e.target.files[0];

		if (file) {
			try {
				const data = new FormData();
				data.append('file', file);
				data.append('path', 'projectImages/');

				const response = (await axios.post('/core/uploadImage', data)).data;

				toast.success('Image uploaded');
				this.setState({
					editingProject: {
						...this.state.editingProject,
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
				data.append('path', 'projectImages/');

				const response = (await axios.post('/core/uploadImage', data)).data;

				toast.success('Image uploaded');
				this.setState({
					editingProject: {
						...this.state.editingProject,
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

	saveProject = () => {
		const dataToSave = {...this.state.editingProject};
		dataToSave.content = JSON.stringify(convertToRaw(dataToSave.content.getCurrentContent()));
		this.props.save(dataToSave);
	};

	deleteProject = () => {
		if (window.confirm("Are you sure you want to delete this guide?"))
			this.props.delete(this.state.editingProject);
	};

	render() {
		const {
			title,
			techStack,
			liveLink,
			contentPreview,
			category,
			urlString,
			content,
			isPublished,
			spotlight,
			heroURL,
			previewImageURL,
		} = this.state.editingProject;

		const {
			newTechStackItem
		} = this.state;

		const {
			imageError
		} = this.state.errors;

		return (
			<ProjectEditorWrapper className="container">
				<div className="row metadata">
					<div className="col-md-6">
						<InputSimple label="Title" name="title" value={title} fullWidth onChange={this.handleInputChange} />
						<InputSimple label="URL String" name="urlString" value={urlString} fullWidth onChange={this.handleInputChange} />
						<InputSimple
							label="Live Link"
							name="liveLink"
							value={liveLink}
							onChange={this.handleInputChange}
							fullWidth
						/>

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

						<CheckboxSimple
							label="Spotlight"
							name="spotlight"
							type="checkbox"
							value={spotlight}
							onChange={this.handleInputChange} />

						<div className="row extraInfo">
							<div className="col-xs-6">
								<H4>Tech Stack</H4>
								{techStack.map(item => (
									<div className="techStackItem" key={item}>
										<SvgIcon icon="Close" hover onClick={() => this.removeTechStackItem(item)} />
										<span>{item}</span>
									</div>
								))}
								<InputSimple label="New Item" name="newTechStackItem" value={newTechStackItem} onChange={this.handleInputChange} />
								<Button onClick={this.addNewTechStackItem}>Add</Button>
							</div>
							<div className="col-xs-6">
								<H4>Category</H4>
								<Dropdown value={category} name={'category'} options={PROJECT_CATEGORY_OPTIONS} onChange={this.selectCategory} />
							</div>
						</div>

					</div>
					<div className="col-md-3">
						<H4>Hero Image</H4>
						<EditProjectImagePreview src={heroURL} alt="" />
						<FileInput title="Select Hero Image" onChange={this.selectHeroImage} name="selectHeroImage" />
						{ imageError && <div>{imageError}</div>}

						<hr/>

						<Button onClick={() => this.props.setHighlight(this.state.editingProject)}>Set as highlight</Button>

					</div>
					<div className="col-md-3">
						<H4>Preview Image</H4>
						<EditProjectImagePreview src={previewImageURL} alt="" />
						<FileInput title="Select Preview Image" onChange={this.selectPreviewImage} name="selectPreviewImage" />
						{ imageError && <div>{imageError}</div>}
					</div>
				</div>


				<div>
					<RichTextEditor editorState={content} changeEditorState={this.handleEditorChange} />
				</div>

				<div className="row">
					<Button variant={'secondary'} center onClick={this.deleteProject}>DELETE</Button>
					<Button center onClick={this.saveProject}>SAVE</Button>
				</div>
			</ProjectEditorWrapper>
		)

	}

}

export default ProjectEditor;
