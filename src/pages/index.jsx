import React from 'react'
import { Helmet } from 'react-helmet'

import HeroSection from '../sections/HeroSection'
import WorkSection from '../sections/WorkSection'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'

import { Layout } from '@components/Layout'

const IndexPage = ({ location }) => (
  <Layout path={location.pathname}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Colin Spence Design</title>
      <link rel="canonical" href={`https://colinspencedesign.com`} />
    </Helmet>
    <HeroSection />
    <WorkSection />
    <AboutSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
