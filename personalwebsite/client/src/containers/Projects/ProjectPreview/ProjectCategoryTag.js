import React from 'react';
import styled from 'styled-components';

const ProjectCategoryTagWrapper = styled.div`
	padding: 4px 8px;
	background-color: ${({ color }) => color};
	position: absolute;
	top: 24px;
	right: 24px;
	text-transform: uppercase;
	border-radius: 5px;
	
	color: #fff;
	font-size: 12px;
	font-family: Montserrat, sans-serif;
`;

const ProjectCategoryTag = ({ category }) => {

	let tagColor;

	switch (category) {
		case 'web':
			tagColor = '#4caf50';
			break;
		case 'hardware':
			tagColor = '#000';
			break;
		default:
			tagColor = '#ddd';
	}

	return (
		<ProjectCategoryTagWrapper color={tagColor}>
			{category}
		</ProjectCategoryTagWrapper>
	)

};

export default ProjectCategoryTag;
