import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Cell from '@components/Cell'
import { Box } from '@components/Grid'

const WorkSection = () => (
  <Box bg="grey.100">
    <Cell py={4} px={2}>
      <StaticQuery
        query={graphql`
          {
            yang2020: contentfulPortfolioProject(slug: { eq: "yang2020" }) {
              slug
            }
          }
        `}
        render={data => <React.Fragment>Yang Gang baby!!</React.Fragment>}
      ></StaticQuery>
    </Cell>
  </Box>
)

export default WorkSection
