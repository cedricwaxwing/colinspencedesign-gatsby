import React from 'react'
import { css } from 'styled-system'
import { useEffect } from 'react'
import HeroLogo from '../features/HeroLogo'
import logoWordMark from '../images/logo-wordmark.svg'
import Cell from '@components/Cell'
import { Box, Flex } from '@components/Grid'
import { Text } from '@components/Text'
import typography from '../../config/typography'

const HeroSection = ({isLive}) => {

  useEffect(() => {
    if (typeof window === 'undefined') return;
  
    let vh = window.innerHeight * 0.01;
    document.querySelector('.hero-section').style.setProperty('--vh', `${vh}px`);

    const setVH = () => {
      let vh = window.innerHeight * 0.01;
      document.querySelector('.hero-section').style.setProperty('--vh', `${vh}px`);
    };
  
    window.addEventListener('resize', setVH);
    return () => {
      window.removeEventListener('resize', setVH)
    };
  });



  return (
    <Flex
      alignItems="center"
      bg="grey.100"
      justifyContent="center"
      position="relative"
      width="100vw"
      className="hero-section"
      css={{
        height: "100vh",
        height: `calc(var(--vh, 1vh) * 100)`,
      }}
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
        bottom={0}
        position="absolute"
        right={2}
        className="rotated-text"
        css={`
          transform: rotate(90deg);
          transform-origin: top right;
        `}
      >
        <Text
          color="grey.700"
          fontFamily={typography.options.monoFontFamily.toString()}
          fontSize={['12px', 2]}
          letterSpacing={["0.3px","1px"]}
        >
          UX/UI and Web Design Specialist
        </Text>
      </Box>
      <Cell
        maxWidth="600px"
        width="100%"
        zIndex="1"
        px={[4,3]}
      >
        <Box width="100%" mx="auto" maxWidth="510px" opacity="0"  css={{animation: 'fadeUpIn 0.5s ease-in-out forwards'}}>
          <img src={logoWordMark} alt="Colin Spence Design" width="100%" />
        </Box>
        <Text
          color="grey.700"
          fontWeight="700"
          textAlign="center"
          opacity="0"
          mt={3}
          lineHeight={["1.25","1"]}
          fontSize={[4,5]}
          css={{
            animation: 'fadeUpIn 0.5s 0.25s ease-in-out forwards',
            transition: 'color 0.75s ease-in-out',
            cursor: isLive ? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✨</text></svg>") 16 0,auto; /*!emojicursor.app*/` : 'default',
            '&:hover': {
              color: isLive ? '#6366f1 !important' : null
            }
          }}
        >
        {isLive ? (
          <span>
            Fresh thinking meets
            <span
              css={`
                white-space: nowrap;
              `}
            >
              {` `}user&ndash;focused design magic.
            </span>
          </span>
        ) : (
          <span>
            Currently under construction.
          </span>
        )}
        </Text>
      </Cell>
      <Box position="absolute" width="70vmin" height="70vmin" css={{animation: 'spin 4s 0.5s cubic-bezier(0.32, -0.4, 0.08, 1) forwards', transformOrigin: 'center'}}>
        <HeroLogo />
      </Box>
    </Flex>
  )
}

export default HeroSection
