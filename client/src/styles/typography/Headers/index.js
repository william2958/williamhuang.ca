import styled, {css} from 'styled-components';
import {sizes} from '../../index';

const HeaderStyles = css`

  font-family: 'Roboto Condensed', 'Montserrat', sans-serif;
  
  color: ${(props) => {
	if (props.color) {
		switch (props.color) {
			case 'highlight':
				return props.theme.highlight;
			case 'secondary':
				return props.theme.secondary;
			default:
				return props.color;
		}
	} else {
		return props.theme.palette.text.primary;
	}
}};
  ${({montserrat}) =>
	montserrat && 
	css`
		font-family: 'Montserrat', sans-serif;
	`};
  ${({inherit}) =>
	inherit &&
	css`
      color: inherit;
    `};
  ${({thin}) =>
	thin
		? css`
          font-weight: 300;
        `
		: css`
          font-weight: 600;
        `};
  ${({center}) =>
	center &&
	css`
      text-align: center;
    `};
  ${({left}) =>
	left &&
	css`
      text-align: left;
    `};
  ${({padded}) =>
	padded &&
	css`
      margin-left: 15px;
    `};
  
  ${({underline}) =>
	underline &&
	css`
      border-bottom: 3px solid;
      width: fit-content;
	`};
`;

export const Hero = styled.h1`
  ${HeaderStyles};

  font-size: 64px;
  letter-spacing: -0.5px;
  line-height: 72px;

  @media only screen and (max-width: ${sizes.phone}px) {
    font-size: 48px;
    letter-spacing: -0.38px;
    line-height: 56px;
  }
`;

export const H1 = styled.h1`
  ${HeaderStyles};

  font-size: 48px;
  letter-spacing: -0.32px;
  line-height: 56px;

  @media only screen and (max-width: ${sizes.phone}px) {
    font-size: 36px;
    letter-spacing: -0.24px;
    line-height: 40px;
  }
`;

export const H2 = styled.h2`
  ${HeaderStyles};
  font-size: 36px;
  letter-spacing: -0.15px;
  line-height: 40px;
  @media only screen and (max-width: ${sizes.phone}px) {
    font-size: 32px;
    letter-spacing: -0.12px;
    line-height: 36px;
  }
`;

export const H3 = styled.h3`
  ${HeaderStyles};
  font-size: 28px;
  letter-spacing: -0.24px;
  line-height: 36px;
  @media only screen and (max-width: ${sizes.phone}px) {
    font-size: 24px;
    letter-spacing: -0.21px;
    line-height: 32px;
  }
`;

export const H4 = styled.h4`
  ${HeaderStyles};
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 0;
  padding-top: 5px;
  display: block;
`;

export const H5 = styled.h5`
  ${HeaderStyles};
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 0;
  display: block;
  padding-top: 2px
`;

export const H6 = styled.h6`
  ${HeaderStyles};
  font-size: 12px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
  line-height: 16px;
  margin-bottom: 0;
`;
