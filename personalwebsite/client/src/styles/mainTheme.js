import colors from './colors';

const theme = {

  primary: colors.black,
  secondary: colors.grey,
  highlight: colors.white,
  link: colors.red['500'],

  palette: {
    text: {
      primary: colors.black,
      secondary: colors.darkGrey['500'],
      highlight: colors.black,
      special: colors.lightGrey['300'],
    },

    divider: colors.divider,

    button: {
      primary: {
        default: {
          text: colors.white,
          background: colors.black,
        },
        hover: {
          text: colors.white,
          background: colors.black,
        },
        active: {
          text: colors.white,
          background: colors.black,
        },
        disabled: {
          text: colors.lightGrey['500'],
          background: colors.darkGrey['500'],
        },
      },
      secondary: {
        default: {
          text: colors.white,
          border: colors.red['500'],
        },
        hover: {
          text: colors.red['500'],
          border: colors.red['500'],
        },
        active: {
          text: colors.white,
          background: colors.red['500'],
        },
        disabled: {
          text: colors.lightGrey['500'],
          background: colors.darkGrey['500'],
        },
      },
    },

    form: {
      input: {
        label: colors.inputs.light.label,
        border: colors.inputs.light.default.border,
        background: colors.inputs.light.default.background,
        text: colors.inputs.light.default.text,
        activeText: colors.inputs.light.active.text,
        helperText: colors.inputs.light.helperText,
        focusBackground: colors.inputs.light.focus.background,
        focusBorder: colors.inputs.light.focus.border,
        errorText: colors.inputs.light.error.text,
        errorBackground: colors.inputs.light.error.background,
        errorBorder: colors.inputs.light.error.border,
        errorHelperText: colors.inputs.light.error.errorText,
        disabledText: colors.inputs.light.disabled,
      },
      checkbox: {
        color: colors.inputs.light.checkbox,
        checked: colors.inputs.light.checkbox,
        unchecked: colors.inputs.light.default.background,
        label: colors.inputs.light.label,
      },
      radio: {
        color: colors.inputs.light.checkbox,
        label: colors.inputs.light.label,
      },
      timeInput: {
        focus: colors.red['500'],
        pickerBackground: colors.red['500'],
      },
      addImage: {
        background: colors.inputs.light.default.background,
        textBackground: colors.lightGrey['400'],
        highlight: colors.inputs.light.highlight,
      },
      sectionLabel: colors.section.label,
    },

    sidebar: {
      background: colors.darkGrey['700'],
      hover: colors.red['700'],
      active: colors.red['500'],
    },

    header: {
      background: colors.darkGrey['600'],
    },

    application: {
      background: colors.darkGrey['500'],
      lightBackground: colors.lightGrey['300'],
    },

    cards: {
      background: colors.darkGrey['400'],
      border: colors.lightGrey['500'],
    },

    modals: {
      background: colors.darkGrey['600'],
      mainText: colors.white,
      secondaryText: colors.lightGrey['500'],
      closeBackground: colors.black,
      closeIcon: colors.white,
    },

    price: {
      positive: colors.price.positive,
      negative: colors.price.negative,
    },

    plans: {
      primary: colors.lightGrey['100'],
      divider: '#d8d8d8',
    },

    // common: {
    //   black: '#132144',
    //   white: '#fff',
    // },
    // type: 'light',
    // primary: {
    //   light: '#EDF2FF',
    //   main: '#5d9df5',
    //   dark: '#326fc3',
    //   contrastText: '#fff',
    // },
    // secondary: {
    //   light: '#EEF3F6',
    //   main: '#DEE9ED',
    //   dark: '#8C94A6',
    //   contrastText: '#132144',
    // },
    // error: {
    //   light: '#FEEEF1',
    //   main: '#e91e63',
    //   dark: '#b5003d',
    //   contrastText: '#fff',
    // },
    // grey: {
    //   light: '#8da2b5',
    //   faint: '#d4d9e6',
    // },
    // text: {
    //   primary: '#fff',
    //   secondary: '#8C94A6',
    //   disabled: '',
    //   hint: '',
    // },
    // divider: {
    //   light: '#d4d9e6',
    //   strong: '#8C94A6',
    // },
    // background: {
    //   default: '#f7f9fb',
    //   highlight: '#fff',
    // },
    // link: {
    //   active: '',
    //   hover: '',
    //   selected: '',
    //   disabled: '',
    // },
  },
};

export default theme;
