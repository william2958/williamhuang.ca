import React from 'react';
import { convertFromRaw, EditorState } from "draft-js";
import axios from '../../../utils/axios';
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

class MonthlyFiveDetail extends React.Component {

	state = {
		title: '',
		content: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.getMonthlyFiveDetails(searchableId, !!id);

		window.scrollTo(0, 0);
	}

	getMonthlyFiveDetails = async (id, isId) => {
		try {
			const urlString = isId
				? `/monthlyFive/getMonthlyFive?monthlyFiveId=${id}`
				: `/monthlyFive/getMonthlyFiveFromString?urlString=${id}`;
			const response = (await axios.get(urlString)).data;
			const {monthlyFive} = response;

			const {
				title,
				year,
				month,
				contentPreview,

				heroURL,
				previewImageURL,

			} = monthlyFive;

			let contentToFill;
			if (IsValidJSONString(monthlyFive.content)) {

				const dbEditorState = convertFromRaw(JSON.parse(monthlyFive.content));
				contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

			} else {
				contentToFill = EditorState.createEmpty(decoratorLink)
			}

			this.setState({
				title,
				contentPreview,

				year,
				month,

				content: contentToFill,

				heroURL,
				previewImageURL
			});

		} catch (err) {
			console.error('There was an error fetching that book detail: ', err);
		}
	};

	goBack = () => {
		this.props.history.push('/monthlyFives');
	};

	render() {
		const {
			title,
			contentPreview,

			year,
			month,

			content: contentToFill,

			heroURL
		} = this.state;

		if (!title) {
			return (
				<div style={{minHeight: '100vh'}}>Loading...</div>
			)
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

export default MonthlyFiveDetail;
