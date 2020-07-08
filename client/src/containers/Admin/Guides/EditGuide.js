import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import axios from '../../../utils/axios';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import GuideEditor from "./GuideEditor";
import {getGuideDetails} from "../../../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class EditGuide extends React.Component {

	componentDidMount() {
		const guideId = this.props.match.params.guideId;
		if (guideId) {
			this.props.getGuideDetails(guideId, true, true);
		} else {
			this.props.history.push('/admin');
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
		let contentToFill;
		if (IsValidJSONString(this.props.guideDetails.content)) {

			const dbEditorState = convertFromRaw(JSON.parse(this.props.guideDetails.content));
			contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

		} else {
			contentToFill = EditorState.createEmpty(decoratorLink)
		}
		const guideDetails = {
			...this.props.guideDetails,
			content: contentToFill
		}
		return (
			<div>
				<GuideEditor
					save={this.saveGuide}
					delete={this.deleteGuide}
					guideData={guideDetails} />
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	guideDetails: state.guides.editGuideDetails
})

function loadData(store, match) {
	const id = match.params.guideId;
	return store.dispatch(getGuideDetails(id, true, true));
}

export default {
	component: connect(mapStateToProps, { getGuideDetails })(withRouter(EditGuide)),
	loadData
};

