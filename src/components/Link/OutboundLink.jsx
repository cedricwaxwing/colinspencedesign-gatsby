import React from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from 'react-ga'
import css from '@styled-system/css'
import { color, layout, space } from 'styled-system'

const OutboundLink = props => (
  <a
    href={props.to}
    from={props.from}
    target={props.target}
    rel="noopener"
    className={props.className}
    onClick={() => {
      GoogleAnalytics.event({
        category: 'Link',
        action: `[clicked] ${props.from}`,
        label: props.to,
      })
    }}
    css={`
      cursor: pointer;
      text-decoration: ${props.underlined ? 'underline' : 'none'};
      ${color}
      ${layout}
      ${space}
      ${props =>
        css({
          '&:hover': {
            color: props.hovercolor,
          },
        })}
    `}
    {...props}
  >
    {props.children}
  </a>
)

OutboundLink.propTypes = {
  to: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

OutboundLink.defaultProps = {
  className: ``,
  color: `grey.900`,
  fontSize: 2,
  from: `unnamed outbound link`,
  hovercolor: `primary.700`,
  underlined: true,
}

export default OutboundLink
