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

// .row.bc-xxlt
//   .screen.screen--homepage
//     %svg.screen-logo
//       %use{'xlink:href' => "#{image_path('icons.svg')}#logo"}
//     .cell.well.well--t{:style => "pointer-events: none"}
//       %img{:src=>'/assets/images/logo/logo-wordmark.svg'}
//       -if config[:islive]
//         .screen-subtitle crafting beautiful, intuitive, user-centric solutions

export default IndexPage
