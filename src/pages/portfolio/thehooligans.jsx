import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Box, Flex } from '@components/Grid'
import PortfolioProject from '../../templates/project'
import Cell from '@components/Cell'
import Image from '@components/Image'
import { OutboundLink } from '@components/Link'
import { Text } from '@components/Text'
import { ProjectHeading, Shadow, Caption } from '@components/Portfolio'

export default ({ data }) => {
  const entry = {
    slug: 'thehooligans',
    title: 'The Hooligans',
    link: {
      url: 'https://www.thehooligansagency.com',
      name: 'See The Hooligans',
    },
    banners: [data.desktopBanner.childImageSharp.fluid],
    thumbnail: data.thumbnail.childImageSharp.fluid,
    tags: ['Brand Design', 'Web Development', 'Illustration'],
    description:
      "The Hooligans Agency is lead by the brilliant Shannon Fitzgerald (Creative Strategist for Rep. Adam Schiff, Video Director for Pete Buttigieg's 2020 campaign) and is perfectly poised to meet this moment where the line between culture and politics have never been so blurred. I created the agency's unique branding and entire website in just under a month's time.",
  }

  const stylescapes = [
    data.stylescape1.childImageSharp.fluid,
    data.stylescape2.childImageSharp.fluid,
    data.stylescape3.childImageSharp.fluid,
  ]

  return (
    <PortfolioProject entry={entry} prev="yang2020" next="nightvision">
      <Box mb={[3, 4]}>
        <Image fluid={entry.banners} width="100%" />
      </Box>
      <Box px={4} mt={5}>
        <Cell overflowX="hidden">
          <ProjectHeading>
            <Box
              height={1}
              width="100%"
              display="inline-block"
              verticalAlign="middle"
              ml="-100%"
              mr={4}
              bg="grey.200"
            ></Box>
            Meeting the Moment
            <Box
              height={1}
              width="100%"
              display="inline-block"
              verticalAlign="middle"
              mr="-100%"
              ml={4}
              bg="grey.200"
            ></Box>
          </ProjectHeading>
          <Text
            as="p"
            fontSize={2}
            mt={1}
            color="grey.700"
            verticalAlign="middle"
            textAlign="center"
            textTransform="uppercase"
            letterSpacing="4px"
          >
            with strategic rebellion
          </Text>
        </Cell>
      </Box>
      <Box px={4} mt={4}>
        <Cell maxWidth="512px">
          <Text as="p" fontSize={2} lineHeight="1.75">
            When I met with Shannon and her team, she had already done a lot of
            work on shaping the voice and tone of the brand, so I helped guide
            her through that process until we had a clear voice and tone that
            could start to be articulated through a visual identity.
          </Text>
          <Text as="p" mt={4} fontSize={2} lineHeight="1.75">
            The Hooligan's unique voice and brand has been a massive success,
            and within just a few days of launching their first client video for
            Lindsey Must Go, they had
            {` `}
            <OutboundLink
              from={`${entry.slug}-portfolio`}
              to="https://twitter.com/LindseyMustGo/status/1294320303372414977/video/1"
              target="_blank"
            >
              over 4,000,000 views.
            </OutboundLink>
          </Text>
        </Cell>
      </Box>
      <Box px={4} mb={5}>
        <Cell>
          {stylescapes.map((stylescape, index) => (
            <Box key={`poster-${index}`} width={'100%'} mt={4}>
              <Shadow>
                <Image
                  fluid={stylescape}
                  alt={`Stylescape - ${index + 1}`}
                  width="100%"
                />
              </Shadow>
            </Box>
          ))}
          <Caption mt={3}>Stylescapes</Caption>
        </Cell>
      </Box>
      <Box bg="grey.100" px={4} py={[4, 5]}>
        <Cell maxWidth="1240px">
          <Caption mb={3}>Iconography</Caption>
          <Flex justifyContent="center" flexWrap="wrap" mx={-2} my={2}>
            {data.icons.edges.map((icon, index) => {
              return (
                <Box
                  key={`gallery-${index}`}
                  width={[
                    1,
                    1 / data.icons.edges.length,
                    1 / data.icons.edges.length,
                  ]}
                  p={2}
                  pb={0}
                >
                  <Image
                    fluid={icon.node.childImageSharp.fluid}
                    alt={icon.node.name}
                    width="100%"
                  />
                </Box>
              )
            })}
          </Flex>
        </Cell>
      </Box>
      <Box px={4}>
        <Cell>
          <Shadow mt={5}>
            <Image
              fluid={data.styleguide.childImageSharp.fluid}
              alt={`${entry.title} Style Guide`}
              width="100%"
            />
          </Shadow>
          <Caption mt={3}>Style Guide</Caption>
        </Cell>
      </Box>
    </PortfolioProject>
  )
}

export const query = graphql`
  query {
    desktopBanner: file(
      relativePath: { eq: "portfolio/3-thehooligans/thehooligans-banner.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    thumbnail: file(
      relativePath: {
        eq: "portfolio/3-thehooligans/thehooligans-thumbnail.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    stylescape1: file(
      relativePath: { eq: "portfolio/3-thehooligans/postmodern.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    stylescape2: file(
      relativePath: { eq: "portfolio/3-thehooligans/quirky.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    stylescape3: file(
      relativePath: { eq: "portfolio/3-thehooligans/rise-above.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    styleguide: file(
      relativePath: { eq: "portfolio/3-thehooligans/style-guide.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    icons: allFile(
      filter: { relativeDirectory: { eq: "portfolio/3-thehooligans/icons" } }
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
`
