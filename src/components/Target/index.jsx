import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '@components/Grid'

const Target = styled(Box)`
  &::before {
    content: '';
    display: block;
    position: relative;
    width: 0;
    height: 2em;
    margin-top: -2em;
  }
`

Target.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Target
