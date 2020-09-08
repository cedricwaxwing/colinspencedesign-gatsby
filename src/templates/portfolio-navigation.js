import React from 'react'
import themeGet from '@styled-system/theme-get'
import { withTheme } from 'styled-components'

import Button from '@components/Button'
import Cell from '@components/Cell'
import { Box, Flex } from '@components/Grid'
import { AniLink } from '@components/Link'

const PortfolioNavigation = props => {
  return (
    <Box px={4}>
      <Cell py={5} borderTop="1px solid" borderTopColor="grey.300">
        <Flex justifyContent="space-between">
          <AniLink
            cover
            bg={`${themeGet('colors.primary.500', 'green')(props)}`}
            direction="left"
            duration={1}
            mr={3}
            from={`/portfolio/${props.current}`}
            to={`/portfolio/${props.prev}`}
          >
            <Button type="secondary" width="150px">
              Previous
            </Button>
          </AniLink>
          {console.log(`${themeGet('colors.primary.500', 'green')(props)}`)}
          <AniLink
            cover
            bg={`${themeGet('colors.primary.500', 'green')(props)}`}
            direction="right"
            duration={1}
            from={`/portfolio/${props.current}`}
            to={`/portfolio/${props.next}`}
          >
            <Button type="secondary" width="150px">
              Next
            </Button>
          </AniLink>
        </Flex>
      </Cell>
    </Box>
  )
}

export default withTheme(PortfolioNavigation)
