/* eslint-disable prefer-destructuring */
/**
 * This is our custom theme where we define global styles.
 * It should serve as a guideline for styling, but not all styles *have* to be taken from here.
 */
const breakpoints = ['576px', '768px', '992px', '1200px']

//  Aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

/**
 * Primary: Colors to use for actionable items, such as links, buttons etc.
 */
const colors = {
  pageBackground: 'hsl(228, 33%, 97%)',
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  primary: {
    50: '#f3f6ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  grey: {
    100: 'hsl(210, 18%, 97%)',
    200: 'hsl(210, 21%, 93%)',
    300: 'hsl(210, 24%, 87%)',
    400: 'hsl(208, 17%, 83%)',
    500: 'hsl(209, 24%, 74%)',
    600: 'hsl(215, 17%, 63%)',
    700: 'hsl(214, 11%, 49%)',
    800: 'hsl(215, 17%, 30%)',
    900: 'hsl(215, 23%, 16%)',
  },
  blue: {
    100: 'hsl(223, 88%, 97%)',
    200: 'hsl(223, 72%, 90%)',
    300: 'hsl(223, 71%, 76%)',
    400: 'hsl(227, 63%, 67%)',
    500: 'hsl(230, 65%, 63%)',
    600: 'hsl(230, 52%, 53%)',
    700: 'hsl(230, 51%, 43%)',
    800: 'hsl(230, 57%, 34%)',
    900: 'hsl(231, 55%, 28%)',
  },
  red: {
    100: 'hsl(360, 77%, 95%)',
    200: 'hsl(360, 79%, 81%)',
    300: 'hsl(360, 71%, 73%)',
    400: 'hsl(360, 70%, 64%)',
    500: 'hsl(360, 71%, 53%)',
    600: 'hsl(360, 65%, 45%)',
    700: 'hsl(360, 61%, 38%)',
    800: 'hsl(360, 63%, 31%)',
    900: 'hsl(360, 60%, 24%)',
  },
  yellow: {
    100: 'hsl(44, 100%, 98%)',
    200: 'hsl(44, 90%, 92%)',
    300: 'hsl(45, 86%, 86%)',
    400: 'hsl(44, 90%, 80%)',
    500: 'hsl(43, 87%, 67%)',
    600: 'hsl(44, 57%, 52%)',
    700: 'hsl(43, 59%, 42%)',
    800: 'hsl(43, 64%, 34%)',
    900: 'hsl(44, 66%, 22%)',
  },
}

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [
  '0',
  '4px',
  '8px',
  '16px',
  '32px',
  '64px',
  '128px',
  '256px',
  '512px',
]

/**
 * Typographic scale
 */
const fontSizes = [
  '10px',
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '48px',
  '64px',
  '76px',
  '110px',
]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  normal: 400,
  semibold: 600,
}

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
}

/**
 * Border-radius
 */
const radii = ['0', '2px', '4px', '8px', '16px']

/**
 * Box Shadows
 */
const shadows = {
  large:
    '0 5.5px 20px -5px rgba(0, 0, 0, 0.05), 0 18.2px 34.3px -5px rgba(0, 0, 0, 0.1), 0 50px 80px -5px rgba(0, 0, 0, 0.2)',
}

export const theme = {
  name: 'Default',
  breakpoints,
  colors,
  space,
  styles: {
    a: {
      color: 'primary.500',
      '&:hover': {
        color: 'primary.800',
      },
    },
    h3: {
      fontSize: '20px',
      fontFamily: "'Barlow Condensed', sans-serif",
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
  },
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  shadows,
}
