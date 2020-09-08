import React from 'react'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Intro, Nav } from '../features/Project'

export default ({ entry, prev, next, children, ...props }) => {
  return (
    <Layout prev={prev} current={entry.slug} next={next}>
      <Intro entry={entry} />
      {children}
      <Nav current={entry.slug} next={next} prev={prev} />
    </Layout>
  )
}
