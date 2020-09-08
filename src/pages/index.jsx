import React from 'react'

import HeroSection from '../sections/HeroSection'
import WorkSection from '../sections/WorkSection'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'

import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'

const IndexPage = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO />
    <HeroSection />
    <WorkSection />
    <AboutSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
