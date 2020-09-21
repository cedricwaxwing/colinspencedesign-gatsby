import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Layout } from '@components/Layout'
import { Intro, Nav } from '../features/Project'

export default ({ entry, prev, next, children, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          live
        }
      }
    }
  `)

  const isLive = data.site.siteMetadata.live;

  return (
    <Layout prev={prev} current={entry.slug} next={next} isLive={isLive}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{entry.title} | Colin Spence Design</title>
        <link rel="canonical" href={`https://colinspencedesign.com/portfolio/${entry.slug}`} />
      </Helmet>
      <Intro entry={entry} />
      {children}
      <Nav current={entry.slug} next={next} prev={prev} />
    </Layout>
  )
}
