import styled from 'styled-components'
import typography from '../../../config/typography'

import {
  border,
  buttonStyle,
  layout,
  space,
  fontSize,
  variant,
} from 'styled-system'

const Button = styled('button')(
  {
    appearance: 'button',
    border: 0,
    cursor: 'pointer',
    fontFamily: typography.options.headerFontFamily.toString(),
    fontWeight: 'bold',
    letterSpacing: '2px',
    outline: 0,
    textTransform: 'uppercase',
    transition: 'background-color 0.12s ease-in-out',
    whiteSpace: 'nowrap',
  },
  border,
  buttonStyle,
  fontSize,
  layout,
  space,
  variant({
    prop: 'type',
    variants: {
      primary: {
        color: 'white',
        backgroundColor: 'grey.900',
        '&:hover': {
          backgroundColor: 'grey.800',
        },
      },
      secondary: {
        color: 'white',
        backgroundColor: 'grey.900',
        '&:hover': {
          backgroundColor: 'grey.700',
        },
      },
      inverse: {
        color: 'grey.900',
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'primary.200',
        },
      },
      danger: {
        color: 'white',
        backgroundColor: 'red.500',
        '&:hover': {
          backgroundColor: 'red.700',
        },
      },
    },
  })
)

Button.defaultProps = {
  type: 'primary',
  borderRadius: 0,
  px: 4,
  py: 3,
  fontSize: 3,
}

export default Button
