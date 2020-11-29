import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '@components/Link'
import { Box, Flex } from '@components/Grid'
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
    return (
      <Box
        as="header"
        id="top"
        bg={this.state.isFixed ? 'white' : 'transparent'}
        px={3}
        py={this.state.isFixed ? 2 : 3}
        position={this.state.isFixed ? 'fixed' : 'absolute'}
        width="100vw"
        zIndex="3"
        css={{
          boxShadow: this.state.isFixed ? '0 2px 4px rgba(0,0,0,0.05)' : null,
          transition: 'background-color 0.25s ease-in-out'
        }}
        ref={nav => {
          this.nav = nav
        }}
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
          {this.props.isLive ? (
            <Flex alignItems="baseline">
              <NavLink path={this.props.path} linkTo="/#work" mr={3}>
                Portfolio
              </NavLink>
              <NavLink path={this.props.path} linkTo="/#about" mr={3}>
                About
              </NavLink>
              <NavLink path={this.props.path} linkTo="/#contact">
                Contact
              </NavLink>
            </Flex>
          ) : null}
        </Flex>
      </Box>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
