import React from 'react'
import PropTypes from 'prop-types'

import Cell from '@components/Cell'
import { Box } from '@components/Grid'

const Footer = ({ children }) => (
  <Box as="footer" bg="grey.800" color="white" px={3} py={5} width="100vw">
    <Cell>{children}</Cell>
  </Box>
)

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Footer
