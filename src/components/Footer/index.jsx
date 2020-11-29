import React from 'react'
import PropTypes from 'prop-types'

import Cell from '@components/Cell'
import GoToTop from '@components/GoToTop'
import { Box, Flex } from '@components/Grid'

const Footer = ({ children }) => (
  <Box as="footer" bg="grey.800" color="white" px={3} py={5} width="100vw">
    <Cell>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          {children}
        </Box>
        <GoToTop/>
      </Flex>
    </Cell>
  </Box>
)

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Footer
