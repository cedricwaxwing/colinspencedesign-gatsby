import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { layout } from 'styled-system'

const Image = props => (
  <Img
    className={props.className}
    css={`
      ${layout}
    `}
    {...props}
  >
    {props.children}
  </Img>
)

Image.propTypes = {
  width: PropTypes.any.isRequired,
}

export default Image
