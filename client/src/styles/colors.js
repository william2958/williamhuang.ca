// A set of colors for use in the style guide

const colors = {
	white: '#fff',
	grey: '#A1AEB7',
	black: '#000',

	red: {
		50: '#F9DFE3',
		100: '#F9B6C0',
		200: '#F9889B',
		300: '#F95B75',
		400: '#F93857',
		500: '#FF0039',
		600: '#DA0031',
		700: '#CB002D',
		800: '#AB0026',
		900: '#8B001F',
	},
	blue: {
		50: '#DCE5F9',
		100: '#B0C6FA',
		200: '#7FA3FB',
		300: '#4F81FC',
		400: '#2965FC',
		500: '#0149FF',
		600: '#0047E9',
		700: '#0041CF',
		800: '#003CB7',
		900: '#00328C',
	},
	lightGrey: {
		50: '#F5F9FB',
		100: '#E5EBF0',
		200: '#BCCAD0',
		300: '#94A7AF',
		400: '#758993',
		500: '#5D6C76',
		600: '#4E5D67',
		700: '#3F4C55',
		800: '#282D33',
		900: '#212428',
	},
	darkGrey: {
		50: '#C5C6CD',
		100: '#A1A2A9',
		200: '#61646A',
		300: '#3E4046',
		400: '#1D1E23',
		500: '#1A1B1F',
		600: '#15161A',
		700: '#121317',
		800: '#0D0E11',
		900: '#000000',
	},
	feedback: {
		success: '#00E65A',
		alert: '#FFB201',
		error: '#FF0000',
	},
	divider: '#303030',
	inputs: {
		dark: {
			checkbox: '#FF0039',
			label: '#5D6C76',
			highlight: '#303030',
			helperText: '#9FAFB5',
			// Focus is for a border color when the input is focused
			default: {
				background: '#212428',
				text: '#9FAFB5',
			},
			active: {
				background: '#212428',
				text: '#fff',
			},
			focus: {
				// Focus text color is determined by if it is active or not
				background: '#5D6C76',
				border: '#5D6C76',
			},
			disabled: {
				text: '#2D373C',
			},
			error: {
				background: '#FF000020',
				text: '#fff',
				border: '#f00',
				errorText: '#FF3333',
			},
		},
		light: {
			checkbox: '#FF0039',
			label: '#5D6C76',
			highlight: '#303030',
			helperText: '#9FAFB5',
			// Focus is for a border color when the input is focused
			default: {
				background: '#fff',
				border: '#000',
				text: '#000',
			},
			active: {
				background: '#fff',
				text: '#000',
			},
			focus: {
				// Focus text color is determined by if it is active or not
				background: '#fff',
				border: '#000',
			},
			disabled: {
				text: '#2D373C',
			},
			error: {
				background: '#FF000020',
				text: '#fff',
				border: '#f00',
				errorText: '#FF3333',
			},
		}
	},
	section: {
		label: '#595959',
	},
	price: {
		positive: '#00BC4A',
		negative: '#B02040',
	},
};

export default colors;
