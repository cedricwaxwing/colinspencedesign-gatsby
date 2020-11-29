import React from 'react'
import { Box, Flex } from '@components/Grid'
import scrollTo from 'gatsby-plugin-smoothscroll'

const GoToTop = () => (
  <Flex
    onClick={() => scrollTo('body')}
    color="white"
    alignItems="center"
    css={{
      cursor:'pointer',
      '&:hover': { 
        opacity: 0.8,
        '& > svg': {
          transform: 'translateY(-100%)'
        }
      }
    }}>
    <Box mr={2}>Top</Box>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" css={{transition: 'transform 0.25s ease-in-out'}}>
      <polyline fill="none" stroke="#FFFFFF" strokeWidth="1.5" points=".028 .05 5.078 5.094 10.123 .049" transform="matrix(1 0 0 -1 1 6.143)"/>
    </svg>
  </Flex>
)

export default GoToTop
