import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Cell from '@components/Cell'
import {Text} from '@components/Text'
import {Flex} from '@components/Grid'
import BlogCard from '@components/BlogCard'

import { Layout } from '@components/Layout'

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          live
        }
      }
      allDribbbleShot {
        nodes {
          title
          url
          id
          cover
        }
      }
    }
  `)

  const isLive = data.site.siteMetadata.live;

  return (
    <Layout path={location.pathname} isLive={isLive}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Colin Spence Design</title>
        <link rel="canonical" href={`https://colinspencedesign.com/blog`} />
      </Helmet>
      {isLive ?
        (
          <Cell maxWidth="1024px" my={6}>
            <Text as="h2" fontSize={[5,6,7]} textTransform="uppercase" textAlign="center">My Recent Work</Text>
            <Flex 
              mt={4}
              flexWrap="wrap"
              justifyContent="center"
            >
              {data.allDribbbleShot.nodes.map((project, index) => {
                return (
                  <BlogCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    src={project.cover}
                    width={["100%","50%","33.3333%"]}
                    index={index}
                  />
                )
              })}
            </Flex>
          </Cell>
        ) :
        null
      }
    </Layout>
  )
}

export default IndexPage
