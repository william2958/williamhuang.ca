import styled, { css } from 'styled-components';

export const Subtitle = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: ${(props) => {
    if (props.color) {
      switch (props.color) {
        case 'highlight':
          return props.theme.palette.text.highlight;
        case 'secondary':
          return props.theme.palette.text.secondary;
        default:
          return props.color;
      }
    } else {
      return props.theme.palette.text.special;
    }
  }};
  ${({ inherit }) =>
    inherit &&
    css`
      color: inherit !important;
    `};
  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `};
  letter-spacing: 0.3px;
  line-height: 12px;
  margin-bottom: 0;
`;
