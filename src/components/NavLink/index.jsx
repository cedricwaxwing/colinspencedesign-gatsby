import React from 'react'
import PropTypes from 'prop-types'
import themeGet from '@styled-system/theme-get'
import { withTheme } from 'styled-components'

import { AniLink, Link } from '@components/Link'
import { Box } from '@components/Grid'
// import { Text } from '@components/Text'
import typography from '../../../config/typography'

const NavLink = ({ linkTo, mr, children, path, ...props }) => {
  return (
    <Box mr={mr}>
      {path === '/' ? (
        <Link
          underlined="false"
          from="nav"
          to={linkTo}
          color="grey.900"
          hovercolor="primary.700"
          fontSize={4}
          fontWeight="500"
          fontFamily={typography.options.headerFontFamily.toString()}
          css={`
            letter-spacing: 1px;
            text-transform: uppercase;
          `}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <AniLink
          paintDrip
          duration={0.5}
          from="nav"
          to={linkTo}
          color="grey.900"
          hovercolor="primary.700"
          fontSize={4}
          fontWeight="500"
          fontFamily={typography.options.headerFontFamily.toString()}
          underlined="false"
          {...props}
          css={{
            textTransform: 'uppercase',
          }}
        >
          {children}
        </AniLink>
      )}
    </Box>
  )
}

NavLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

NavLink.defaultProps = {
  mr: 0,
}

export default withTheme(NavLink)
