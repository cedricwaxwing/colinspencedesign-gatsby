import React from 'react'
import css from '@styled-system/css'
import { withTheme, themeGet} from 'styled-components'
import { Box , Flex } from '@components/Grid'
import { Text } from '@components/Text'
import { OutboundLink } from '@components/Link'

const DribbbleCard = props => {
  const showCard = []
  props.initialNumberVisible.forEach((screenNumber) => {
    showCard.push(props.index < screenNumber ? 'block' : 'none')
  })
  console.log(showCard)
  return (
    <Box
      as="figure"
      display={showCard}
      my={2} 
      px={2}
      {...props}
    >
      <Box
        backgroundColor="white"
        width="100%"
        borderRadius={2}
        position="relative"
        overflow="hidden"
        css={`
        ${props =>
          css({
            transition: "transform 0.25s ease-in-out",
            '&:hover': {
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            },
            '&:hover img': {
              transform: 'scale(1.15)',
            },
            '&:hover > a > .label-wrapper': {
              transition: "opacity 0.25s ease-in-out, transform 0.25s ease-in-out",
              opacity: 1,
              transform: 'translateY(0)'
            },
          })}
      `}
      >
        <OutboundLink
          underlined={0}
          from={`/#recent-work`}
          to={props.url}
        >
          <img src={props.src} alt={props.title} width="100%" css={{transition: "transform 0.25s ease-in-out"}}/>
          <Flex 
            className="label-wrapper"
            backgroundColor="rgba(0,0,0,0.6)"
            opacity={0}
            position="absolute"
            bottom="0"
            left={0}
            width="100%"
            alignItems="center"
            px={2}
            height="20%"
            css={`
            ${props =>
              css({
                transform: 'translateY(100%)',
                '&:hover': {
                  opacity: 1
                }
              })}
          `}
          >
            <Text
              as="figcaption"
              fontFamily="'Barlow Condensed', sans-serif"
              textTransform="uppercase"
              letterSpacing="0.01rem"
              fontWeight="500"
              color="white"
              p={3}
              fontSize={[3]}
            >
                {props.title}
              </Text>
          </Flex>
        </OutboundLink>
      </Box>
    </Box>
  )
}

DribbbleCard.propTypes = {}

DribbbleCard.defaultProps = {}

export default withTheme(DribbbleCard)
