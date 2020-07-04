import { css } from 'styled-components';

export const setColor = {
	primaryColorMain: '#03A9F4',
	primaryColorLight: '#67DAFF',
	primaryColorDark: '#007AC1',

	secondaryColorMain: '#7ED321',
	secondaryColorLight: '#B3FF5B',
	secondaryColorDark: '#48A100',

	tertiaryColorMain: '#7755FE',
	tertiaryColorLight: '#AF84FF',
	tertiaryColorDark: '#3928CA',

	accentColour1: '#CC0000',
	accentColour2: '#0000CC',
	accentColour3: '#00CC00',

	black: '#111',
	greyMain: '#4A5B6D',
	greyLight: '#B3C0CE',
	greyFaint: '#E7EDF3',
	greyUltraFaint: '#EEF2F4',
	white: '#fff',

	error: '#CC0000',
	errorDark: '#CC2222',

	warning: '#FF9800',
};

export const setGradient = {
	dark: 'background: linear-gradient(180deg, rgba(19, 33, 68, 0.85) 0%, #132144 100%), #FFFFFF;',
};

export const setFont = {
	main: "font-family: 'Open Sans', sans-serif;",
};

export const setRem = (number = 16) => {
	return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
	return `letter-spacing:${number}px`;
};

export const setShadow = {
	main: 'box-shadow: 0px 12px 22px 0px rgba(82, 87, 104, 0.10), 0px -12px 22px 0px rgba(82, 87, 104, 0.05)',
	dark: 'box-shadow: -8px 12px 18px 0px rgba(25, 42, 70, 0.12)',
	faint: 'box-shadow: -1px 1px 4px 0px rgba(55, 70, 95, 0.12)',
};

export const sizes = {
	large: 1200,
	desktop: 992,
	tablet: 768,
	phone: 576,
	menuChange: 800,
	hideSidebar: 960,
	minimumManageSize: 900,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
	return acc;
}, {});
