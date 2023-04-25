export const defaultTheme = {
  colors: {
    product: {
      yellowLight: '#F1E9C9',
      yellow: '#DBAC2C',
      yellowDark: '#C47F17',

      purpleLight: '#EBE5F9',
      purple: '#8047F8',
      purpleDark: '#4B2995',
    },

    base: {
      title: '#272221',
      subtitle: '#403937',
      text: '#574F4D',
      label: '#8D8686',
      hover: '#D7D5D5',
      button: '#E6E5E5',
      input: '#EDEDED',
      card: '#F3F2F2',
      background: '#FAFAFA',
      white: '#FFFFFF',
    }
  },

  fontWeight: {
    regular: 400,
    bold: 700,
    extraBold: 800
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px'
  }
} as const