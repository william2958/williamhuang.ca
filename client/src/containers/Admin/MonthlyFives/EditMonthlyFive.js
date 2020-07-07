import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import axios from '../../../utils/axios';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import MonthlyFiveEditor from "./MonthlyFiveEditor";
import {getMonthlyFiveDetails} from "../../../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class EditMonthlyFive extends React.Component {

	componentDidMount() {
		const monthlyFiveId = this.props.match.params.monthlyFiveId;
		if (monthlyFiveId) {
			this.props.getMonthlyFiveDetails(monthlyFiveId, true, true);
		} else {
			this.props.history.push('/admin');
		}
	}

	saveMonthlyFive = async (monthlyFiveData) => {
		const dataToUpdate = {
			...monthlyFiveData,
			monthlyFiveId: monthlyFiveData._id
		};
		try {
			await axios.put('/monthlyFive/updateMonthlyFive', dataToUpdate);
			toast.success('Successfully saved monthlyFive!');
		} catch (e) {
			toast.error('Could not save the monthlyFive.');
			console.error('There was an error creating this monthlyFive');
		}
	};

	deleteMonthlyFive = async (monthlyFiveData) => {
		const toDeleteId = monthlyFiveData._id;

		try {
			await axios.delete('/monthlyFive/deleteMonthlyFive', { data: { monthlyFiveId: toDeleteId} });
			toast.success('Deleted monthlyFive.');
			this.props.history.goBack();
		} catch (e) {
			toast.error('Could not delete monthlyFive.');
			console.error('Error deleting monthlyFive: ', e);
		}
	};

	setHighlight = async (monthlyFiveData) => {
		try {
			await axios.put('/highlight/updateHighlight', { type: 'monthlyFive', id: monthlyFiveData._id });
			toast.success('Updated highlight.');
		} catch (e) {
			toast.error('Could not update the highlight');
		}
	};

	render() {
		let contentToFill;
		if (IsValidJSONString(this.props.monthlyFiveDetails.content)) {

			const dbEditorState = convertFromRaw(JSON.parse(this.props.monthlyFiveDetails.content));
			contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

		} else {
			contentToFill = EditorState.createEmpty(decoratorLink)
		}
		const monthlyFiveDetails = {
			...this.props.monthlyFiveDetails,
			content: contentToFill
		}
		return (
			<div>
				<MonthlyFiveEditor
					setHighlight={this.setHighlight}
					save={this.saveMonthlyFive}
					delete={this.deleteMonthlyFive}
					monthlyFiveData={monthlyFiveDetails} />
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	monthlyFiveDetails: state.monthlyFives.editMonthlyFiveDetails
})

function loadData(store, match) {
	const id = match.params.monthlyFiveId;
	return store.dispatch(getMonthlyFiveDetails(id, true, true));
}

export default {
	component: connect(mapStateToProps, { getMonthlyFiveDetails })(withRouter(EditMonthlyFive)),
	loadData
};
