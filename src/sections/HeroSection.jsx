import React from 'react'
import HeroLogo from '../features/HeroLogo'
import logoWordMark from '../images/logo-wordmark.svg'
import Cell from '@components/Cell'
import { Box, Flex } from '@components/Grid'
import { Text } from '@components/Text'
import typography from '../../config/typography'

const HeroSection = ({isLive}) => (
  <Flex
    alignItems="center"
    bg="grey.100"
    height="100vh"
    justifyContent="center"
    position="relative"
    width="100vw"
  >
    <Box
      bg="grey.500"
      position="absolute"
      height="calc(50% - 200px)"
      left="50%"
      top={5}
      width="1px"
      zIndex="2"
    />
    <Box
      bg="grey.500"
      position="absolute"
      height="calc(50% - 200px)"
      left="50%"
      bottom={5}
      width="1px"
      zIndex="2"
    />
    <Box
      bottom={3}
      position="absolute"
      right={3}
      css={`
        transform: rotate(90deg);
        transform-origin: top right;
      `}
    >
      <Text
        color="grey.700"
        fontFamily={typography.options.monoFontFamily.toString()}
        fontSize={[1, 2]}
        letterSpacing="1px"
      >
        UX/UI and Web Design Specialist
      </Text>
    </Box>
    <Cell
      maxWidth="510px"
      width="100%"
      zIndex="1"
      px={[4,3]}
      css={`
        pointer-events: none;
      `}
    >
      <Box width="100%" opacity="0"  css={{animation: 'fadeUpIn 0.5s ease-in-out forwards'}}>
        <img src={logoWordMark} alt="Colin Spence Design" width="100%" />
      </Box>
      {isLive ? (
      <Text color="grey.700" fontSize={[3, 4]} textAlign="center" opacity="0" mt={2} css={{animation: 'fadeUpIn 0.5s 0.25s ease-in-out forwards'}}>
        crafting beautiful, intuitive,{' '}
        <span
          css={`
            white-space: nowrap;
          `}
        >
          user&ndash;centric solutions
        </span>
      </Text>
      ) : (
        <Text color="grey.700" fontSize={[3, 4]} textAlign="center" opacity="0" mt={2} css={{animation: 'fadeUpIn 0.5s 0.25s ease-in-out forwards'}}>currently under construction</Text>
      )}
    </Cell>
    <Box position="absolute" width="70vmin" height="70vmin" css={{animation: 'spin 4s 0.5s cubic-bezier(0.32, -0.4, 0.08, 1) forwards', transformOrigin: 'center'}}>
      <HeroLogo />
    </Box>
  </Flex>
)

export default HeroSection
