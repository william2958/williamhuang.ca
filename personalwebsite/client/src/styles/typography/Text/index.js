import styled, { css } from 'styled-components';

const TextStyles = css`
  font-family: Roboto, sans-serif;
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
`;

export const LeadText = styled.p`
  ${TextStyles};
  font-size: 16px;
  letter-spacing: 0.32px;
  line-height: 24px;
`;

export const BodyText = styled.p`
  ${TextStyles};
  font-size: 14px;
  letter-spacing: 0.32px;
  line-height: 20px;
`;

export const SmallText = styled.p`
  ${TextStyles};
  font-size: 12px;
  letter-spacing: 0.24px;
  line-height: 18px;
`;

export const TinyText = styled.p`
  ${TextStyles};
  font-size: 10px;
  letter-spacing: 0.32px;
  line-height: 16px;
`;
