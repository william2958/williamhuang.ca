import styled, {css} from 'styled-components';

import {clickableStyles} from '../styles';

const BaseButton = styled.button`
  ${clickableStyles};

  display: ${({inline}) => (inline ? 'inline-flex' : 'flex')};
  ${({center}) =>
	center &&
	css`
      margin-left: auto;
      margin-right: auto;
    `};
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: inherit;
  min-width: 190px;
  ${({small}) =>
	small &&
	css`
      min-width: 0;
    `};
  ${({fullWidth}) =>
	fullWidth
		? css`
          width: 100%;
        `
		: ''};

  &:focus,
  &:active {
    outline: 0;
  }
`;

export default BaseButton;
