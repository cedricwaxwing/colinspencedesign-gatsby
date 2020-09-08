import React from 'react'
import css from '@styled-system/css'
import themeGet from '@styled-system/theme-get'
import { withTheme } from 'styled-components'

import { Box, Flex } from '@components/Grid'
import Image from '@components/Image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const WorkCard = props => (
  <Box my={2} px={2} width={[1, 1 / 2, 1 / 3]}>
    <AniLink
      paintDrip
      duration={1}
      hex={`${themeGet('colors.primary.500', 'green')(props)}`}
      from={`/#work`}
      to={`/portfolio/${props.slug}`}
    >
      <Box>
        <Flex
          alignItems="center"
          bg="white"
          height={300}
          justifyContent="center"
          css={`
            border-radius: ${themeGet('radii.2', '4px')(props)};
            cursor: pointer;
            transition: box-shadow 0.5s ease-in-out, transform 0.3s ease-in-out;
            ${props =>
              css({
                '&:hover': {
                  backgroundImage: `linear-gradient(135deg, white, ${themeGet(
                    'colors.grey.100',
                    '#eaeaea'
                  )(props)})`,
                  boxShadow: themeGet(
                    'shadows.large',
                    '0 20px 30px rgba(0,0,0,0.15)'
                  )(props),
                  transform: 'translateY(-5px)',
                },
                '&:hover > .portfolio-thumbnail ': {
                  filter: `grayscale(0)`,
                  opacity: `1`,
                },
              })}
          `}
          {...props}
        >
          <Image
            className="portfolio-thumbnail"
            fluid={props.thumbnail}
            width="50%"
            css={`
              filter: grayscale(1);
              height: auto;
              opacity: 0.85;
              transition: filter 0.2s ease-in-out, opacity 0.2s ease-in-out;
            `}
          />
        </Flex>
      </Box>
    </AniLink>
  </Box>
)

WorkCard.propTypes = {}

WorkCard.defaultProps = {}

export default withTheme(WorkCard)
