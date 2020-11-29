import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Button from '@components/Button'
import Cell from '@components/Cell'
import { Box, Flex } from '@components/Grid'
import { Link } from '@components/Link'
import { Text } from '@components/Text'
import Target from '@components/Target'
import BlogCard from '../components/BlogCard'

const RecentProjects = () => {
  return (
    <Target id="recent-projects">
      <Box backgroundColor="grey.200" px={3} py={[4,5]}>
        <Text as="h3" fontSize={7} textTransform="uppercase" textAlign="center" letterSpacing="3px" color="grey.700" mt={0} mb={[3, 4]}>Recent Projects</Text>
        <Cell maxWidth="1024px">
          <StaticQuery
            query={graphql`
              query recentProjectsQuery {
                allDribbbleShot(sort: {order: DESC, fields: published}, limit: 6) {
                  nodes {
                    title
                    url
                    id
                    cover
                  }
                }
              }
            `}
            render={({ allDribbbleShot }) => (
              <Flex 
                flexWrap="wrap"
                justifyContent="center"
              >
                {allDribbbleShot.nodes.map((project, index) => {
                  return (
                    <BlogCard
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      src={project.cover}
                      width={["100%","50%","33.3333%"]}
                      initialNumberVisible={[3,6,6]}
                      index={index}
                    />
                  )
                })}
              </Flex>
            )}
          ></StaticQuery>
          <Flex justifyContent="center" mt={3}>
            <Link to="/blog">
              <Button >See All Projects</Button>
            </Link>
          </Flex>
        </Cell>
      </Box>
    </Target>
  )
}

export default RecentProjects
