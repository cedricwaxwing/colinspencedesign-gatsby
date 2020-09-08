import React from 'react'
import PropTypes from 'prop-types'

import { border } from 'styled-system'
import { Box, Flex } from '@components/Grid'
import { Icon } from '@components/Icons'

const Hr = props => (
  <Box color="grey.700">
    <Flex
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      textAlign="center"
    >
      <Box
        borderBottom="1px solid"
        borderColor="grey.500"
        ml="-100%"
        mr={3}
        width="100%"
      />
      <Icon variant={props.icon} size={20} />
      <Box
        borderBottom="1px solid"
        borderColor="grey.500"
        ml={3}
        mr="-100%"
        width="100%"
      />
    </Flex>
  </Box>
)

Hr.defaultProps = {
  maxWidth: '1024px',
}

export default Hr
