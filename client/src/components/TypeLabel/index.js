import React from 'react';

import './TypeLabel.css';
import {H6} from "../../styles/typography/Headers";

const TypeLabel = ({ type, author }) => {

	// let backgroundColor;
	// let iconBackgroundColor;
	// let icon;
	let text;

	switch (type) {
		case 'fantasy':
			text = 'Fantasy';
			// backgroundColor = '#F68FE8';
			// iconBackgroundColor = '#9D59B8';
			// icon = 'Dragon';
			break;
		case 'sci-fi':
			text = 'Sci-Fi';
			// backgroundColor = '#6DD8C0';
			// iconBackgroundColor = '#41B79D';
			// icon = 'Atom';
			break;
		case 'memoir':
			text = 'Memoir';
			// backgroundColor = '#6ABBD7';
			// iconBackgroundColor = '#008ABA';
			// icon = 'Fingerprint';
			break;
		case 'self-help':
			text = 'Self Help';
			// backgroundColor = '#FECA57';
			// iconBackgroundColor = '#FF9F43';
			// icon = 'SelfHelp';
			break;
		default:
			text = type;
			// backgroundColor = '#6DD8C0';
			// iconBackgroundColor = '#41B79D';
			// icon = 'Atom';
	}

	// const appliedStyles = {
	// 	backgroundColor
	// };

	if (author) {
		return (
			<H6 color="secondary">{author} - {text}</H6>
		);
	}

	return (
		<H6 color="secondary">{text}</H6>
	);

	// return (
	// 	<TypeLabelWrapper style={appliedStyles}>
	// 		<TypeLabelName>{text}</TypeLabelName>
	// 		<TypeIconWrapper backgroundColor={iconBackgroundColor}>
	// 			<SvgIcon size={21} icon={icon} />
	// 		</TypeIconWrapper>
	// 	</TypeLabelWrapper>
	// )

};

export default TypeLabel;
