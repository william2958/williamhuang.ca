import { css } from 'styled-components';

export const BUTTON_HEIGHT = 42;

export const clickableStyles = css`
  ${({ disabled }) =>
    disabled
      ? css`
          pointer-events: none;
        `
      : css`
          cursor: pointer;
        `}
`;
