import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@components/Grid'

const Cell = props => (
  <Box maxWidth={props.maxWidth} mx="auto" position="relative" {...props} />
)

Cell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

Cell.defaultProps = {
  maxWidth: '1024px',
}

export default Cell
