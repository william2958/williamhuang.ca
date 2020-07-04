import styled, { css } from 'styled-components';

export const paragraphStyles = css`
  font-family: Roboto, sans-serif;
  font-weight: normal;
  color: ${(props) => {
    if (props.color) {
      switch (props.color) {
        case 'primary':
          return props.theme.primary;
        case 'highlight':
          return props.theme.highlight;
        case 'secondary':
          return props.theme.secondary;
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
      font-family: inherit;
    `};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `};
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `};
  ${({ thin }) =>
    thin &&
    css`
      font-weight: lighter;
    `};
  margin-bottom: 0;
`;

export const LeadParagraph = styled.p`
  ${paragraphStyles};
  font-size: 16px;
  letter-spacing: 0.32px;
  line-height: 24px;
`;

export const BodyParagraph = styled.p`
  ${paragraphStyles};
  font-size: 14px;
  letter-spacing: 0.32px;
  line-height: 20px;
`;

export const TextLinkParagraph = styled.a`
  ${paragraphStyles};
  color: ${(props) => props.theme.palette.text.highlight} !important;
  font-size: 14px;
  letter-spacing: 0.32px;
  line-height: 20px;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
  &:hover {
    text-decoration: underline !important;
  }
`;

export const LinkParagraph = styled.a`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.highlight} !important;
  font-size: 14px;
  letter-spacing: 0.32px;
  line-height: 20px;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
  ${({ inherit }) =>
    inherit &&
    css`
      color: inherit !important;
      font-family: inherit;
    `};
  ${({ thin }) =>
    thin &&
    css`
      font-weight: lighter;
    `};
  ${({ underline }) =>
    underline &&
    css`
      &:hover {
        text-decoration: underline !important;
      }
    `};
`;

export const InlineLinkParagraph = styled.a`
  font-family: Roboto, sans-serif;
  color: ${(props) => props.theme.palette.text.highlight} !important;
  font-size: 14px;
  letter-spacing: 0.32px;
  line-height: 20px;
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
  ${({ underline }) =>
    underline &&
    css`
      &:hover {
        text-decoration: underline !important;
      }
    `};
  ${({ noHover }) =>
    noHover &&
    css`
      cursor: default;
    `};
`;

export const SmallParagraph = styled.p`
  ${paragraphStyles};
  font-size: 12px;
  letter-spacing: 0.24px;
  line-height: 18px;
`;

export const TinyParagraph = styled.p`
  ${paragraphStyles};
  font-size: 10px;
  letter-spacing: 0.32px;
  line-height: 16px;
`;
