import React from 'react'
import { VelocityComponent } from 'velocity-react'

import { keyframes } from 'styled-components'
import { color, layout } from 'styled-system'
import logo from '../../images/logomark.svg'
import { Box } from '@components/Grid'
import { Icon } from '@components/Icons'
import Image from '@components/Image'
require('velocity-animate/velocity.ui')

class HeroLogo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false,
      rotation: 0,
    }
  }

  animateLogo = () => {
    this.setState(state => ({ hovering: true }))
  }

  quitLogoAnimation = () => {
    this.setState(state => ({ hovering: false }))
  }

  render() {
    let animationProps
    if (this.state.hovering) {
      animationProps = {
        easing: 'linear',
        duration: 1000,
        loop: true,
        progress: function(_els, complete) {
          this.setState(state => ({ rotation: -360 * complete }))
        }.bind(this),
        animation: {
          rotateZ: [0, -360],
        },
      }
    } else {
      animationProps = {
        easing: 'easeOutQuad',
        duration: 1000,
        animation: {
          rotateZ: [(this.state.rotation -= 50), (this.state.rotation -= 180)],
        },
      }
    }
    return (
      <VelocityComponent
        ref={node => (this.logoMark = node)}
        {...animationProps}
      >
        <Icon
          variant="logo"
          onMouseEnter={this.animateLogo}
          onMouseLeave={this.quitLogoAnimation}
          alt={this.state.hovering ? `` : `Colin Spence Design`}
          color="white"
          hovercolor="white"
          position="absolute"
          zIndex="0"
          showTitle={!this.state.hovering}
          height="70vmin"
          width="70vmin"
          css={`
            display: block;
            transform-origin: center;
            z-index: 0;
            ${color}
            ${layout}
          `}
          {...this.props}
        />
      </VelocityComponent>
    )
  }
}

export default HeroLogo
