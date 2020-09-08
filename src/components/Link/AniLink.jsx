import React from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from 'react-ga'
import css from '@styled-system/css'
import { color, typography, layout, space } from 'styled-system'
import GatsbyAniLink from 'gatsby-plugin-transition-link/AniLink'

const AniLink = props => (
  <GatsbyAniLink
    from={props.from}
    to={props.to}
    className={props.className}
    onClick={() => {
      GoogleAnalytics.event({
        category: 'AniLink',
        action: `[clicked] ${props.from}`,
        label: props.to,
      })
    }}
    css={`
      cursor: pointer;
      text-decoration: ${props.underlined === 'true' ? 'underline' : 'none'};
      ${typography}
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
  </GatsbyAniLink>
)

AniLink.defaultProps = {
  className: ``,
  color: `grey.900`,
  fontSize: 2,
  from: `unnamed outbound link`,
  hovercolor: `primary.700`,
  underlined: 'true',
}

AniLink.propTypes = {
  to: PropTypes.string.isRequired,
  from: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hovercolor: PropTypes.string,
  underlined: PropTypes.oneOf(['true', 'false']),
}

export default AniLink
