import styled, { css } from 'styled-components';

export const SpecialTitle = styled.h6`
  margin-bottom: 0;
  font-size: 11px;
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
      return props.theme.palette.text.primary;
    }
  }};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `};
  letter-spacing: 0;
  line-height: 12px;
`;
