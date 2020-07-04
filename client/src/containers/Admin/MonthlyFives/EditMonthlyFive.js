import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import axios from '../../../utils/axios';
import history from '../../../history';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import MonthlyFiveEditor from "./MonthlyFiveEditor";

class EditMonthlyFive extends React.Component {

	state = {
		monthlyFiveData: null,
		editorState: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const monthlyFiveId = this.props.match.params.monthlyFiveId;
		if (monthlyFiveId) {
			axios.get(`/monthlyFive/getMonthlyFive?monthlyFiveId=${monthlyFiveId}`)
				.then(({data}) => {
					const monthlyFive = data.monthlyFive;
					let contentToFill;
					if (IsValidJSONString(monthlyFive.content)) {

						const dbEditorState = convertFromRaw(JSON.parse(monthlyFive.content));
						contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

					} else {
						contentToFill = EditorState.createEmpty(decoratorLink)
					}
					monthlyFive.content = contentToFill;
					this.setState({
						monthlyFiveData: monthlyFive,
					});
				})
				.catch(e => {
					console.error('Error getting monthlyFive: ', e)
				})
		} else {
			history.push('/admin');
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
		return (
			<div>
				<MonthlyFiveEditor
					setHighlight={this.setHighlight}
					save={this.saveMonthlyFive}
					delete={this.deleteMonthlyFive}
					monthlyFiveData={this.state.monthlyFiveData} />
			</div>
		)
	}

}

export default EditMonthlyFive;
