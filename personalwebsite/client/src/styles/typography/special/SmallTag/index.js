import styled, { css } from 'styled-components';

export const SmallTag = styled.p`
  margin-bottom: 0;
  font-size: 10px;
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
      return props.theme.palette.text.secondary;
    }
  }};
  ${({ inherit }) =>
    inherit &&
    css`
      color: inherit;
    `};
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 12px;
`;
