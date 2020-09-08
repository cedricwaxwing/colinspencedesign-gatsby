import Typography from 'typography'

const typography = new Typography({
  title: 'Default',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Barlow Condensed',
    '-apple-system',
    'BlinkMacSystemFont',
    'Roboto Condensed',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    'Noto Serif',
    'georgia',
    '-apple-system',
    'serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  monoFontFamily: [
    'Roboto Mono',
    'PT Mono',
    '-apple-system',
    'mono',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  scaleRatio: 2.441,
  headerWeight: 400,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography
