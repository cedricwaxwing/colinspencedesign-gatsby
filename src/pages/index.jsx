import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import HeroSection from '../sections/HeroSection'
import WorkSection from '../sections/WorkSection'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'

import { Layout } from '@components/Layout'

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query isLive {
      site {
        siteMetadata {
          live
        }
      }
    }
  `)

  const isLive = data.site.siteMetadata.live;

  return (
    <Layout path={location.pathname} isLive={isLive}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Colin Spence Design</title>
        <link rel="canonical" href={`https://colinspencedesign.com`} />
      </Helmet>
      <HeroSection isLive={isLive} />
      {isLive ?
        (
          <div>
            <WorkSection />
            <AboutSection />
            <ContactSection />
          </div>
        ) :
        null
      }
    </Layout>
  )
}

export default IndexPage
