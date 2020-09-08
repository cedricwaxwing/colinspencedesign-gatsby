import React from 'react'
import { graphql, navigate } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

import { NightVision, Yang2020 } from './projects'
import ProjectNav from '../features/ProjectNav'

import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'

import Button from '@components/Button'
import Cell from '@components/Cell'
import { Box, Flex } from '@components/Grid'
import Image from '@components/Image'
import { OutboundLink } from '@components/Link'
import { Text } from '@components/Text'

let paragraphIndex = 0
const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (_node, next) => {
      return (
        <OutboundLink
          color="primary.500"
          from="portfolio"
          target="_blank"
          to={`${_node.data.uri}`}
        >
          {next}
        </OutboundLink>
      )
    },
    [BLOCKS.PARAGRAPH]: (_node, next) => {
      paragraphIndex++
      return (
        <Text fontSize={3} lineHeight="1.75" mt={paragraphIndex === 1 ? 0 : 3}>
          {next}
        </Text>
      )
    },
  },
}

class PortfolioEntryTemplate extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.navigateToProject)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.navigateToProject)
  }

  customProjectContent = slug => {
    switch (slug) {
      case 'nightvision':
        return <NightVision />
      // case "name3":
      //   return <SelectBox />
      default:
        return null
    }
  }

  navigateToProject = e => {
    if (e.which === 37 || e.which === 39) {
      const project =
        e.which === 37
          ? this.props.data.previousProject.slug
          : e.which === 39
          ? this.props.data.nextProject.slug
          : ''
      navigate(`/portfolio/${project}`)
    } else {
      return false
    }
  }

  render() {
    const entry = get(this, 'props.data.project')
    return (
      <Layout>
        <SEO
          title={entry.title}
          pathname={this.props.location.pathname}
          image={entry.thumbnail.fluid.src}
        />
        <Cell py={6} px={[3, 5, 3]}>
          <Flex flexWrap="wrap" mt={-2}>
            <Flex
              alignItems="center"
              justifyContent="center"
              width={[1, 1, 1 / 2]}
              bg="transparent"
              p={2}
            >
              <Image
                fluid={entry.thumbnail.fluid}
                alt={entry.title}
                title={entry.title}
                loading="eager"
                width="50%"
              />
            </Flex>
            <Box width={[1, 1, 1 / 2]} p={2}>
              <Text
                as="h1"
                color="grey.700"
                fontSize={9}
                letterSpacing="7px"
                textTransform="uppercase"
              >
                {entry.title}
              </Text>
              {entry.tags ? (
                <Box
                  borderBottom="1px solid"
                  borderBottomColor="grey.200"
                  borderTop="1px solid"
                  borderTopColor="grey.200"
                  width="100%"
                >
                  <Flex flexWrap="wrap" my={3}>
                    {entry.tags.map((tag, index) => {
                      return index !== entry.tags.length - 1 ? (
                        <React.Fragment key={`fragment-${index}`}>
                          <Text
                            key={index}
                            color="primary.500"
                            fontSize={1}
                            fontWeight="bold"
                            letterSpacing="1px"
                            mr={3}
                            textTransform="uppercase"
                          >
                            {tag}
                          </Text>
                          <Text
                            key={`${index}-line`}
                            color="grey.300"
                            fontSize={1}
                            fontWeight="bold"
                            letterSpacing="1px"
                            mr={3}
                            textTransform="uppercase"
                          >
                            |
                          </Text>
                        </React.Fragment>
                      ) : (
                        <Text
                          key={index}
                          color="primary.500"
                          fontSize={1}
                          fontWeight="bold"
                          letterSpacing="1px"
                          mr={0}
                          textTransform="uppercase"
                        >
                          {tag}
                        </Text>
                      )
                    })}
                  </Flex>
                </Box>
              ) : null}
              <Box mt={2}>
                {documentToReactComponents(entry.description.json, options)}
              </Box>
              {entry.link ? (
                <OutboundLink
                  from={`${entry.slug}-portfolio`}
                  to={entry.link.url}
                  target="_blank"
                >
                  <Button mt={3}>{entry.link.name}</Button>
                </OutboundLink>
              ) : null}
            </Box>
          </Flex>
        </Cell>

        {/* Custom Content */}
        {this.customProjectContent(entry.slug)}

        <ProjectNav
          current={entry.slug}
          next={this.props.data.nextProject.slug}
          previous={this.props.data.previousProject.slug}
        />
      </Layout>
    )
  }
}

export default PortfolioEntryTemplate

export const pageQuery = graphql`
  query PortfolioEntryBySlug(
    $slug: String!
    $nextPage: Int
    $previousPage: Int
  ) {
    site {
      siteMetadata {
        title
      }
    }
    project: contentfulPortfolioProject(slug: { eq: $slug }) {
      title
      slug
      tags
      link {
        name
        url
      }
      thumbnail {
        fluid(maxWidth: 800, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      description {
        json
      }
    }
    nextProject: contentfulPortfolioProject(displayOrder: { eq: $nextPage }) {
      slug
    }
    previousProject: contentfulPortfolioProject(
      displayOrder: { eq: $previousPage }
    ) {
      slug
    }
  }
`
