import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { theme } from '../../util/style/theme'
import { color, layout } from 'styled-system'
import typography from '../../../config/typography'

import { Box, Flex } from '@components/Grid'
import { Icon } from '@components/Icons'
import { Text } from '@components/Text'

const LogoImage = props => (
  <Icon
    css={`
      display: block;
      transform: ${props =>
        props.animateLogo ? 'rotateZ(360deg)' : 'rotateZ(0deg)'};
      transition: width 0.12s ease-in-out;
      z-index: 1;
      ${props =>
        css({
          '&:hover': {
            transition: 'width 0.12s ease-in-out, transform 1s cubic-bezier(0.32, -0.4, 0.08, 1)',
          },
        })}
      ${color}
      ${layout}
    `}
    {...props}
  />
)

const LogoText = styled.div`
  font-family: ${typography.options.headerFontFamily.toString()};
  line-height: 1;
  opacity: ${props => (props.animateLogo ? 1 : 0)};
  text-decoration: none;
  text-transform: uppercase;
  transform: ${props =>
    props.animateLogo ? 'translateX(0)' : 'translateX(-60px)'};
  ${props => {
    if (props.bottom && props.animateLogo) {
      return `transition: transform 0.6s 0.1s ease-in-out, opacity 0.2s 0.4s ease-in-out;`
    } else if (!props.bottom && props.animateLogo) {
      return `transition: transform 0.6s ease-in-out, opacity 0.3s 0.2s ease-in-out;`
    } else {
      return `transition: transform 0.4s 0.5s ease-in-out, opacity 0.5s 0.1s ease-in-out;`
    }
  }}
`

class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animateLogo: false,
      windowWidth: 0,
    }
  }
  animateLogo = () => {
    this.setState(state => ({ animateLogo: true }))
  }

  quitLogoAnimation = () => {
    this.setState(state => ({ animateLogo: false }))
  }

  handleWindowSizeChange = () => {
    this.setState({ windowWidth: this.state.windowWidth })
  }

  componentDidMount() {
    this.logo.addEventListener('mouseover', this.animateLogo)
    this.logo.addEventListener('mouseout', this.quitLogoAnimation)
    this.handleWindowSizeChange() // Set width
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    this.logo.removeEventListener('mouseover', this.animateLogo)
    this.logo.removeEventListener('mouseout', this.quitLogoAnimation)
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  render() {
    return (
      <Box ref={elem => (this.logo = elem)}>
        <Flex alignItems="center">
          <LogoImage
            variant="logo"
            alt="Colin Spence Design"
            color="grey.900"
            hovercolor="grey.800"
            height={this.props.width}
            width={this.props.width}
            animateLogo={this.state.animateLogo}
          />
          <Box ml={2}>
            <LogoText
              animateLogo={
                this.state.windowWidth < parseInt(theme.breakpoints.lg)
                  ? true
                  : this.state.animateLogo
              }
            >
              <Text
                color="grey.900"
                fontSize={[1, 2]}
                textTransform="uppercase"
                lineHeight="1"
                display={['none', 'block']}
                width="max-content"
              >
                Colin Spence
              </Text>
            </LogoText>
            <LogoText
              bottom="true"
              animateLogo={
                this.state.windowWidth < parseInt(theme.breakpoints.lg)
                  ? true
                  : this.state.animateLogo
              }
            >
              <Text
                color="grey.800"
                fontSize={[2, 3]}
                fontWeight="500"
                lineHeight="1"
                textTransform="uppercase"
                display={['none', 'block']}
                width="max-content"
              >
                Design
              </Text>
            </LogoText>
          </Box>
        </Flex>
      </Box>
    )
  }
}

export default Logo
