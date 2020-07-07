import React from 'react';
import { convertFromRaw, EditorState } from "draft-js";
import RichTextEditor from "../../../components/RichTextEditor";

import SvgIcon from "../../../components/SvgIcon";
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import {MonthlyFiveDetailContent, MonthlyFiveDetailContentWrapper, MonthlyFiveDetailWrapper} from "./styles";
import {H2, H5} from "../../../styles/typography/Headers";
import {parseMonthAndYear} from "../helpers";
import {BackArrow} from "../../../styles/globalStyles";
import Button from "../../../components/UI/Button";
import {MonthlyFiveSpotlightImage} from "../MonthlyFiveHero/styles";
import {getMonthlyFiveDetails} from "../../../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class MonthlyFiveDetail extends React.Component {

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.props.getMonthlyFiveDetails(searchableId, !!id);
		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	goBack = () => {
		this.props.history.push('/monthlyFives');
	};

	render() {

		if (!this.props.monthlyFiveDetails)
			return <MonthlyFiveDetailWrapper>Loading...</MonthlyFiveDetailWrapper>;

		const {
			title,
			contentPreview,

			year,
			month,

			content,

			heroURL
		} = this.props.monthlyFiveDetails;

		let contentToFill;
		if (IsValidJSONString(content)) {

			const dbEditorState = convertFromRaw(JSON.parse(content));
			contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

		} else {
			contentToFill = EditorState.createEmpty(decoratorLink)
		}

		return (
			<MonthlyFiveDetailWrapper>
				<div className="container">
					<BackArrow onClick={this.goBack}>
						<SvgIcon icon="BackCaret" />
						<h6>All MonthlyFives</h6>
					</BackArrow>
				</div>
				<MonthlyFiveDetailContentWrapper className="container">

					<MonthlyFiveSpotlightImage bg={heroURL} />

					<MonthlyFiveDetailContent>
						<H2>{parseMonthAndYear(month, year)} - {title}</H2>
						<H5 color="secondary">{contentPreview}</H5>
					</MonthlyFiveDetailContent>
				</MonthlyFiveDetailContentWrapper>
				<RichTextEditor editorState={contentToFill} readOnly={true} />

				<Button
					center
					variant="secondary"
					onClick={() => window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth'
					})}
					style={{ marginTop: '35px' }}
				>Back To Top</Button>
			</MonthlyFiveDetailWrapper>
		)
	}

};

function mapStateToProps(state) {
	return {
		monthlyFiveDetails: state.monthlyFives.monthlyFiveDetails
	}
}

function loadData(store, match) {
	const id = match.params.id;
	const searchableId = id || match.params.urlString;
	return store.dispatch(getMonthlyFiveDetails(searchableId, !!id));
}

export default {
	component: connect(mapStateToProps, { getMonthlyFiveDetails })(withRouter(MonthlyFiveDetail)),
	loadData
};
