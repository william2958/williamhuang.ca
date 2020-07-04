import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import axios from '../../../utils/axios';
import history from '../../../history';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import GuideEditor from "./GuideEditor";

class EditGuide extends React.Component {

	state = {
		guideData: null,
		editorState: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const guideId = this.props.match.params.guideId;
		if (guideId) {
			axios.get(`/guide/getGuide?guideId=${guideId}`)
				.then(({data}) => {
					const guide = data.guide;
					let contentToFill;
					if (IsValidJSONString(guide.content)) {

						const dbEditorState = convertFromRaw(JSON.parse(guide.content));
						contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

					} else {
						contentToFill = EditorState.createEmpty(decoratorLink)
					}
					guide.content = contentToFill;
					this.setState({
						guideData: guide,
					});
				})
				.catch(e => {
					console.error('Error getting guide: ', e)
				})
		} else {
			history.push('/admin');
		}
	}

	saveGuide = async (guideData) => {
		const dataToUpdate = {
			...guideData,
			guideId: guideData._id
		};
		try {
			await axios.put('/guide/updateGuide', dataToUpdate);
			toast.success('Successfully saved guide!');
		} catch (e) {
			toast.error('Could not save the guide.');
			console.error('There was an error creating this guide');
		}
	};

	deleteGuide = async (guideData) => {
		const toDeleteId = guideData._id;

		try {
			await axios.delete('/guide/deleteGuide', { data: { guideId: toDeleteId} });
			toast.success('Deleted guide.');
			this.props.history.goBack();
		} catch (e) {
			toast.error('Could not delete guide.');
			console.error('Error deleting guide: ', e);
		}
	};

	render() {
		return (
			<div>
				<GuideEditor save={this.saveGuide} delete={this.deleteGuide} guideData={this.state.guideData} />
			</div>
		)
	}

}

export default EditGuide;
