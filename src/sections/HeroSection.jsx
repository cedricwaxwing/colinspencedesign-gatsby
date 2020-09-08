import React from 'react'
import HeroLogo from '../features/HeroLogo'
import logoWordMark from '../images/logo-wordmark.svg'
import { Box, Flex } from '@components/Grid'
import { Text } from '@components/Text'
import typography from '../../config/typography'

const HeroSection = () => (
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
    <Box
      zIndex="1"
      px={[5, 5, 3]}
      css={`
        pointer-events: none;
      `}
    >
      <img src={logoWordMark} alt="Colin Spence Design" width="100%" />
      <Text color="grey.700" fontSize={[3, 4]} textAlign="center" mt={2}>
        crafting beautiful, intuitive,{' '}
        <span
          css={`
            white-space: nowrap;
          `}
        >
          user&ndash;centric solutions
        </span>
      </Text>
    </Box>
    <HeroLogo />
  </Flex>
)

export default HeroSection
