import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Cell from '@components/Cell'
import { Flex } from '@components/Grid'
import Heading from '@components/Heading'
import Target from '@components/Target'
import WorkCard from '@components/WorkCard'

const Projects = () => {
  return (
    <Target id="work">
      <Cell px={3} my={[3, 4, 5]}>
        <Heading icon="work" my={[3, 4]}>
          Portfolio
        </Heading>
        <StaticQuery
          query={graphql`
            query projectsQuery {
              allFile(
                filter: { name: { regex: "/thumbnail/" } }
                sort: { fields: relativeDirectory, order: ASC }
              ) {
                edges {
                  node {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                    name
                  }
                }
              }
            }
          `}
          render={({ allFile }) => (
            <Flex justifyContent="center" flexWrap="wrap" mx={-2} my={-2}>
              {allFile.edges.map((project, index) => {
                let slug = project.node.name.split('-')[0]
                return (
                  <WorkCard
                    key={index}
                    slug={slug}
                    thumbnail={project.node.childImageSharp.fluid}
                    from="homepage"
                  />
                )
              })}
            </Flex>
          )}
        ></StaticQuery>
      </Cell>
    </Target>
  )
}

export default Projects
