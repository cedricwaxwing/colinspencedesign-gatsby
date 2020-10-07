import React from 'react'
import PropTypes from 'prop-types'

import Header from '@components/Header'
import Footer from '@components/Footer'
import css from '@styled-system/css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Text } from '@components/Text'
import GlobalStyles from '@style/GlobalStyles'
import { ThemeProvider, theme } from '@style'

const year = new Date().getFullYear()

const Layout = ({ children, isLive, prev, current, next, path, props }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header
      siteTitle="Gatsby Starter Styled"
      path={path}
      isLive={isLive}
      prev={prev}
      current={current}
      next={next}
    />
    <main>{children}</main>
    <Footer>
      <Text fontSize={2}>2009 - {year} © Colin Spence Design</Text>
      <Text fontSize={1} color="grey.300">
        With help along the way from all of
        {` `}
        <AniLink
          paintDrip
          duration={0.5}
          fontSize={1}
          from="footer"
          to="/finefolks"
          color="grey.200"
          css={{
            textDecoration: 'underline',
            '&:hover': {
              color: 'white',
            },
          }}
        >
          these mighty fine folks.
        </AniLink>
      </Text>
    </Footer>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
