// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import React from 'react';
import styled, { css } from 'styled-components';

import * as ICONS from '../../assets/svgs';

export const SvgIconContainer = styled.span`
  color: ${({ color }) => color || 'inherit'};

  & > svg {
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

function SvgIcon({ icon, ...props }) {
	if (!icon) {
		// return <div style={{ height: props.size || '16px', width: props.size || '16px' }} />;
		return null;
	}
	let IconElement;
	if (_.isString(icon)) {
		if (!(icon in ICONS)) return null;
		IconElement = ICONS[icon];
	} else {
		IconElement = icon;
	}

	return (
		<SvgIconContainer {...props}>
			<IconElement />
		</SvgIconContainer>
	);
}

export default SvgIcon;
