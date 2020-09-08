import React from 'react'
import PropTypes from 'prop-types'
import Arrow from '../../images/arrow.inline.svg'

import { Link } from '@components/Link'
import { Box, Flex } from '@components/Grid'
import { Text } from '@components/Text'
import Logo from '@components/Logo'
import NavLink from '@components/NavLink'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFixed: false,
      height: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateNavigation)
    const height = this.nav.clientHeight
    this.setState({ height })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavigation)
  }

  updateNavigation = () => {
    this.setState(state => ({ isFixed: window.scrollY > state.height }))
  }

  render() {
    const projects = {
      typingcom: 'Typing.com',
      yang2020: 'Yang 2020',
      thehooligans: 'The Hooligans',
      nightvision: 'Night Vision',
      granify: 'Granify',
      owlustrations: 'Owlustrations',
    }
    return (
      <Box
        as="header"
        bg={this.state.isFixed ? 'white' : 'transparent'}
        px={3}
        py={this.state.isFixed ? 2 : 3}
        position={this.state.isFixed ? 'fixed' : 'absolute'}
        width="100vw"
        zIndex="3"
        css={{
          boxShadow: this.state.isFixed ? '0 2px 4px rgba(0,0,0,0.05)' : null,
        }}
        ref={nav => {
          this.nav = nav
        }}
        css={{ transition: 'background-color 0.25s ease-in-out' }}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Link
            underlined="false"
            hovercolor="primary.600"
            from="header"
            to="/"
          >
            <Logo width={this.state.isFixed ? 30 : 50} />
          </Link>
          {/* {this.state.isFixed ? 
            <Flex display={['none','none','flex']} position="absolute" left="50%" alignItems="center" css={{transform: "translateX(-50%)"}}>
              <Link
                fontSize={5}
                fontFamily="Barlow, sans-serif"
                underlined="false"
                to={`/portfolio/${this.props.prev}`}
                css={{transform: 'rotate(180deg)'}}
              >
                <Arrow width="24px" height="24px"/>
              </Link>
              <Text mx={4}>{projects[this.props.current]}</Text>
              <Link fontSize={5} fontFamily="Barlow, sans-serif" underlined="false" to={`/portfolio/${this.props.next}`}>
                <Arrow width="24px" height="24px"/>
              </Link>
            </Flex> 
            :
            null
          } */}
          <Flex alignItems="baseline">
            <NavLink path={this.props.path} linkTo="/#work" mr={3}>
              Work
            </NavLink>
            <NavLink path={this.props.path} linkTo="/#about" mr={3}>
              About
            </NavLink>
            <NavLink path={this.props.path} linkTo="/#contact">
              Contact
            </NavLink>
          </Flex>
        </Flex>
      </Box>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
