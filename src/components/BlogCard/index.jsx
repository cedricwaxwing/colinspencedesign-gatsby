import React from 'react'
import css from '@styled-system/css'
import { withTheme } from 'styled-components'
import { Box , Flex } from '@components/Grid'
import { Text } from '@components/Text'
import { Link } from '@components/Link'

const BlogCard = props => {
  const showCard = []
  if(props.initialNumberVisible) {
    props.initialNumberVisible.forEach((screenNumber) => {
      showCard.push(props.index < screenNumber ? 'block' : 'none')
    })
  }

  return (
    <Box
      as="figure"
      display={showCard ? showCard : 'block'}
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
        <Link
          underlined="false"
          from={`/#recent-work`}
          to={`/blog/${props.id}`}
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
        </Link>
      </Box>
    </Box>
  )
}

BlogCard.propTypes = {}

BlogCard.defaultProps = {}

export default withTheme(BlogCard)
