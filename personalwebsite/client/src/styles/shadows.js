import styled, { css } from 'styled-components';

export const defaultShadow = css`
	//box-shadow: 1px 3px 5px 0 #00000030;
	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
  	transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 5px;
`;

export const hoverShadow = css`
	${defaultShadow};
	cursor: pointer;
	&::after {
		content: "";
		border-radius: 5px;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		opacity: 0;
		transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	&:hover {
  		transform: scale(1.01, 1.01);
		//box-shadow: 0 6px 12px 0 #C4C4C450, 0 -3px 12px 0 #00000005;
	}
	&:hover::after {
		opacity: 1;
	}
`;
