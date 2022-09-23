// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import ICONS from '../../assets/svgs';
import { AngelList } from '../../assets/svgs';

export const SvgIconContainer = styled.span`
  color: ${({ color }) => color || 'inherit'};

  & > img {
    display: block;

    ${({ size, height = size, width = size }) => css`
      height: ${height}px;
      width: ${width}px;
    `};
  }

  ${({ hover }) =>
	hover &&
	css`
      cursor: pointer;
    `};

  &:hover {
    color: ${({ hoverColor, color }) => hoverColor || color};
  }
`;

import email from '../../assets/svgs/socialMedia/Email.svg';
function SvgIcon({ icon, ...props }) {
	if (!icon) {
		// return <div style={{ height: props.size || '16px', width: props.size || '16px' }} />;
		return null;
	}
	let IconElement;
	// if (_.isString(icon)) {
	// 	if (!(icon in ICONS)) return null;
	// 	IconElement = ICONS[icon];
	// } else {
	// 	IconElement = icon;
	// }

	IconElement = ICONS[icon];

	return (
		<SvgIconContainer {...props}>
			<img src={IconElement} alt="" />
		</SvgIconContainer>
	);
}

SvgIcon.propTypes = {
	icon: PropTypes.elementType,
	size: PropTypes.number,
	height: PropTypes.number,
	width: PropTypes.number,
	color: PropTypes.string,
};

SvgIcon.defaultProps = {
	size: 16,
};

export default SvgIcon;
