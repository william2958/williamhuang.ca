import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import _ from 'lodash';
// import DateTimePicker from "react-datetime-picker";

import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import axios from "../../../utils/axios";
import {EditEventImagePreview, EventEditorWrapper, EventRecapToggle} from "./styles";
import CheckboxSimple from "../../../components/UI/Checkbox/CheckboxSimple";
import InputSimple from "../../../components/UI/Inputs/TextInput/InputSimple";
import TextBoxSimple from "../../../components/UI/Inputs/TextBox/TextboxSimple";
import RichTextEditor from "../../../components/RichTextEditor";
import Button from "../../../components/UI/Button";
import FileInput from "../../../components/UI/Inputs/FileInput";
import {H4} from "../../../styles/typography/Headers";
import {toast} from "react-toastify";
import SvgIcon from "../../../components/SvgIcon";

const DEFAULT_FORM_VALUES = {
	_id: '',
	title: '',

	eventDate: new Date(),
	keyInfo: [],
	urlString: '',

	contentPreview: '',

	content: EditorState.createEmpty(decoratorLink),
	recap: EditorState.createEmpty(decoratorLink),

	isPublished: false
};

class EventEditor extends React.Component {

	state = {
		editingEvent: DEFAULT_FORM_VALUES,
		errors: {},
		editingRecap: false,
		newKeyInfo: ''
	};

	handleSaveHotkey = () => {
		this.saveEvent();
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

		if (this.props.eventData !== prevProps.eventData) {

			const editingEvent = this.props.eventData
				? Object.assign({}, DEFAULT_FORM_VALUES, this.props.eventData)
				: DEFAULT_FORM_VALUES;

			this.setState({
				editingEvent
			})

		}

	}

	handleInputChange = ({ target }) => {
		const updatedValue = target.name === 'isPublished' ? target.checked : target.value;

		if (target.name === 'newKeyInfo') {
			this.setState({
				newKeyInfo: target.value
			});
			return;
		}

		this.setState({
			editingEvent: {
				...this.state.editingEvent,
				[target.name]: updatedValue
			}
		})
	};

	handleEditorChange = (newEditorState, isRecap = false) => {
		if (isRecap) {
			this.setState({
				editingEvent: {
					...this.state.editingEvent,
					recap: newEditorState
				}
			})
		} else {
			this.setState({
				editingEvent: {
					...this.state.editingEvent,
					content: newEditorState
				}
			})
		}
	};

	selectHeroImage = async (e) => {
		const file = e.target.files[0];

		if (file) {
			try {
				const data = new FormData();
				data.append('file', file);
				data.append('path', 'eventImages/');

				const response = (await axios.post('/core/uploadImage', data)).data;

				toast.success('Image uploaded');
				this.setState({
					editingEvent: {
						...this.state.editingEvent,
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

	addNewKeyInfoItem = () => {
		const newKeyInfo = [...this.state.editingEvent.keyInfo];
		newKeyInfo.push(this.state.newKeyInfo);
		this.setState({
			editingEvent: {
				...this.state.editingEvent,
				keyInfo: newKeyInfo
			},
			newKeyInfo: ''
		})
	};

	removeNewKeyInfoItem = (item) => {
		let newKeyInfo = [...this.state.editingEvent.keyInfo];
		newKeyInfo = newKeyInfo.filter(info => info !== item);
		this.setState({
			editingEvent: {
				...this.state.editingEvent,
				keyInfo: newKeyInfo
			}
		})
	};

	setEventDate = (dateTime) => {
		this.setState({
			editingEvent: {
				...this.state.editingEvent,
				eventDate: dateTime
			}
		});
	};

	saveEvent = () => {
		const dataToSave = {...this.state.editingEvent};
		dataToSave.content = JSON.stringify(convertToRaw(dataToSave.content.getCurrentContent()));
		dataToSave.recap = JSON.stringify(convertToRaw(dataToSave.recap.getCurrentContent()));
		this.props.save(dataToSave);
	};

	deleteEvent = () => {
		if (window.confirm("Are you sure you want to delete this event?"))
			this.props.delete(this.state.editingEvent);
	};

	render() {

		const {
			title,
			contentPreview,
			urlString,
			eventDate,

			content,
			recap,
			isPublished,

			heroURL,
			keyInfo
		} = this.state.editingEvent;

		const {
			imageError
		} = this.state.errors;

		const { newKeyInfo } = this.state;

		return (
			<EventEditorWrapper className="container">
				<div className="row metadata">
					<div className="col-md-5">
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

						{/*<DateTimePicker*/}
						{/*	onChange={this.setEventDate}*/}
						{/*	value={eventDate}*/}
						{/*/>*/}

						<CheckboxSimple
							label="Published"
							name="isPublished"
							type="checkbox"
							value={isPublished}
							onChange={this.handleInputChange} />

					</div>
					<div className="col-md-5">
						<H4>Key Info</H4>
						{keyInfo.map(item => (
							<div className="keyInfoItem" key={item}>
								<SvgIcon icon="Close" hover onClick={() => this.removeNewKeyInfoItem(item)} />
								<span>{item}</span>
							</div>
						))}
						<InputSimple label="New Item" name="newKeyInfo" value={newKeyInfo} onChange={this.handleInputChange} />
						<Button onClick={this.addNewKeyInfoItem}>Add</Button>

						<hr/>

						<Button onClick={() => this.props.setEventUpdated(this.state.editingEvent)} >Set Update</Button>

						<hr/>

						<Button onClick={() => this.props.setHighlight(this.state.editingEvent)}>Set as highlight</Button>
					</div>
					<div className="col-md-2">
						<H4>Hero Image</H4>
						<EditEventImagePreview src={heroURL} alt="" />
						<FileInput title="Select Preview Image" onChange={this.selectHeroImage} name="selectPreviewImage" />
						{ imageError && <div>{imageError}</div>}
					</div>
				</div>


				<EventRecapToggle>
					<H4 onClick={() => this.setState({ editingRecap: false })} className={(!this.state.editingRecap ? "active" : 'inactive')}>Content</H4>
					<H4 onClick={() => this.setState({ editingRecap: true })} className={(this.state.editingRecap ? "active" : 'inactive')}>Recap</H4>
				</EventRecapToggle>
				<div>
					<RichTextEditor editorState={this.state.editingRecap ? recap : content} changeEditorState={e => this.handleEditorChange(e, this.state.editingRecap)}/>
				</div>

				<div className="row">
					<Button variant={'secondary'} center onClick={this.deleteEvent}>DELETE</Button>
					<Button center onClick={this.saveEvent}>SAVE</Button>
				</div>
			</EventEditorWrapper>
		)

	}

}

export default EventEditor;
