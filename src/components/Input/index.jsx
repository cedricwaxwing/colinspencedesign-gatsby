import React from 'react'
import css from '@styled-system/css'
import { color, layout, space } from 'styled-system'

const Input = props => (
  <input
    name={props.name}
    placeholder={props.placeholder}
    type={props.type}
    className={props.className}
    css={`
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 10px;
      min-height: ${props.as === 'textarea' ? '150px' : '0'};
      resize: ${props.as === 'textarea' ? 'vertical' : 'none'};
      ${color}
      ${layout}
      ${space}
      ${props =>
        css({
          px: 3,
          py: 2,
          backgroundColor: 'grey.100',
          color: 'grey.900',
          '&:focus': {
            borderColor: 'grey.800',
            outline: 'none',
          },
          '&::placeholder': {
            color: 'grey.600',
            opacity: 1
          }
        })}
    `}
    {...props}
  >
    {props.children}
  </input>
)

export default Input
