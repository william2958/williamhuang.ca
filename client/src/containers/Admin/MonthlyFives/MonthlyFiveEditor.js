import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import _ from 'lodash';

import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import axios from "../../../utils/axios";
import {EditMonthlyFiveImagePreview, MonthlyFiveEditorWrapper} from "./styles";
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
	contentPreview: '',

	month: 0,
	year: 2020,

	content: EditorState.createEmpty(decoratorLink),
	isPublished: false
};

class MonthlyFiveEditor extends React.Component {

	state = {
		editingMonthlyFive: DEFAULT_FORM_VALUES,
		errors: {}
	};

	handleSaveHotkey = () => {
		this.saveMonthlyFive();
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

		if (this.props.monthlyFiveData !== prevProps.monthlyFiveData) {

			const editingMonthlyFive = this.props.monthlyFiveData
				? Object.assign({}, DEFAULT_FORM_VALUES, this.props.monthlyFiveData)
				: DEFAULT_FORM_VALUES;

			this.setState({
				editingMonthlyFive
			})

		}

	}

	handleInputChange = ({ target }) => {
		const updatedValue = target.name === 'isPublished' ? target.checked : target.value;

		this.setState({
			editingMonthlyFive: {
				...this.state.editingMonthlyFive,
				[target.name]: updatedValue
			}
		})
	};

	handleEditorChange = (newEditorState) => {
		this.setState({
			editingMonthlyFive: {
				...this.state.editingMonthlyFive,
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
				data.append('path', 'monthlyFiveImages/');

				const response = (await axios.post('/core/uploadImage', data)).data;

				toast.success('Image uploaded');
				this.setState({
					editingMonthlyFive: {
						...this.state.editingMonthlyFive,
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
				data.append('path', 'monthlyFiveImages/');

				const response = (await axios.post('/core/uploadImage', data)).data;

				toast.success('Image uploaded');
				this.setState({
					editingMonthlyFive: {
						...this.state.editingMonthlyFive,
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

	saveMonthlyFive = () => {
		const dataToSave = {...this.state.editingMonthlyFive};
		dataToSave.content = JSON.stringify(convertToRaw(dataToSave.content.getCurrentContent()));
		this.props.save(dataToSave);
	};

	deleteMonthlyFive = () => {
		if (window.confirm("Are you sure you want to delete this guide?"))
			this.props.delete(this.state.editingMonthlyFive);
	};

	render() {
		const {
			title,
			contentPreview,
			urlString,
			month,
			year,

			content,
			isPublished,

			heroURL,
			previewImageURL
		} = this.state.editingMonthlyFive;

		const {
			imageError
		} = this.state.errors;

		return (
			<MonthlyFiveEditorWrapper className="container">
				<div className="row metadata">
					<div className="col-md-6">
						<InputSimple label="Title" name="title" value={title} fullWidth onChange={this.handleInputChange} />
						<InputSimple label="Month" name="month" value={month} type="number" fullWidth onChange={this.handleInputChange} />
						<InputSimple label="Year" name="year" value={year} type="number" fullWidth onChange={this.handleInputChange} />
						<InputSimple label="URL String" name="urlString" value={urlString} fullWidth onChange={this.handleInputChange} />

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
						<EditMonthlyFiveImagePreview src={heroURL} alt="" />
						<FileInput title="Select Hero Image" onChange={this.selectHeroImage} name="selectHeroImage" />
						{ imageError && <div>{imageError}</div>}

						<hr/>

						<Button onClick={() => this.props.setHighlight(this.state.editingMonthlyFive)}>Set as highlight</Button>
					</div>
					<div className="col-md-3">
						<H4>Preview Image</H4>
						<EditMonthlyFiveImagePreview src={previewImageURL} alt="" />
						<FileInput title="Select Preview Image" onChange={this.selectPreviewImage} name="selectPreviewImage" />
						{ imageError && <div>{imageError}</div>}
					</div>
				</div>


				<div>
					<RichTextEditor editorState={content} changeEditorState={this.handleEditorChange} />
				</div>

				<div className="row">
					<Button variant={'secondary'} center onClick={this.deleteMonthlyFive}>DELETE</Button>
					<Button center onClick={this.saveMonthlyFive}>SAVE</Button>
				</div>
			</MonthlyFiveEditorWrapper>
		)

	}

}

export default MonthlyFiveEditor;
