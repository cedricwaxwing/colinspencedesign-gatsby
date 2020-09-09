import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex } from '@components/Grid'
import PortfolioProject from '../../templates/project'
import Button from '@components/Button'
import Cell from '@components/Cell'
import Image from '@components/Image'
import { Text } from '@components/Text'
import { OutboundLink } from '@components/Link'
import { ProjectHeading, Shadow, Caption } from '@components/Portfolio'
import '../../util/style/video.css'

export default ({ data }) => {
  const entry = {
    slug: 'nightvision',
    title: 'Night Vision',
    link: {
      url: 'https://www.nightvisionmusic.com',
      name: 'See More',
    },
    thumbnail: data.logo.childImageSharp.fluid,
    tags: ['Brand Design', 'Illustration'],
    description:
      'Night Vision is an Edmonton-based collective of producers, DJs, and artists at the forefront of Canada’s electronic music scene. Founded in 2013 by myself and a group of like-minded friends, Night Vision has expanded from throwing unique, underground parties to the launch of a record label, a music production school, and a clothing line. Above all, the collective aims to foster an inclusive, welcoming community that is committed to pushing its artists at both local and international stages.',
  }

  return (
    <PortfolioProject entry={entry} prev="thehooligans" next="granify">
      <Box mb={[3, 4]} className="embed-container">
        <Flex
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
          position="absolute"
          zIndex="1"
        >
          <Box width={["150px","250px","350px"]}>
            <Image
              fluid={data.logoInverse.childImageSharp.fluid}
              width="100%"
            />
          </Box>
        </Flex>
        <iframe
          title="nightvision-banner-video"
          src="https://player.vimeo.com/video/393591090?autoplay=1&loop=1&background=1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Box>
      <Box px={4} mt={5}>
        <Cell overflowX="hidden">
          <ProjectHeading>
            <Box
              height={1}
              width="100%"
              display={['none','none','inline-block']}
              verticalAlign="middle"
              ml="-100%"
              mr={4}
              bg="grey.200"
            ></Box>
            Engaging the Community
            <Box
              height={1}
              width="100%"
              display={['none','none','inline-block']}
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
            textAlign={["left","left","center"]}
            textTransform="uppercase"
            letterSpacing="4px"
          >
            Bringing more than just the party
          </Text>
        </Cell>
      </Box>
      <Box px={4} mt={4}>
        <Cell maxWidth="512px">
          <Text as="p" lineHeight="1.75">
            Night Vision is focused on engaging various sectors of the art
            community in order to push the power of positive artistic expression
            to the community and beyond.
          </Text>
          <Text as="p" mt={4} lineHeight="1.75">
            After more than 200 shows in the past 7 years, Night Vision is still
            a pillar of not only the Edmonton music scene, but on the forefront
            of Canadian electronic music.
          </Text>
        </Cell>
      </Box>
      <Box px={4} mt={5}>
        <Cell>
          <Flex flexWrap="wrap" mx={-4} mt={-4}>
            {data.posters.edges.map((poster, index) => {
              return (
                <Box key={index} width={[1, 1 / 2]} px={3} mt={4}>
                  <Shadow>
                    <Image
                      width="100%"
                      fluid={poster.node.childImageSharp.fluid}
                    />
                  </Shadow>
                </Box>
              )
            })}
          </Flex>
        </Cell>
      </Box>
      <Box bg="grey.100" px={4} py={5} mt={5}>
        <Cell>
          <Flex alignItems="center" flexWrap="wrap" mx={-4} mt={-4}>
            <Box width={[1, 2 / 3]} px={3} mt={4}>
              <Shadow>
                <Image width="100%" fluid={data.clock.childImageSharp.fluid} />
              </Shadow>
            </Box>
            <Box width={[1, 1 / 3]} px={3} mt={4}>
              <Box>
                <Caption textAlign="left" fontSize={6}>
                  Class Elan Clock
                </Caption>
                <Text color="grey.900" fontSize={5} fontWeight="bold">
                  $31.99
                </Text>
                <Flex
                  alignItems="center"
                  borderTop="1px solid"
                  borderTopColor="grey.500"
                  pt={3}
                  mt={3}
                >
                  <OutboundLink
                    from={`${entry.slug}-portfolio`}
                    to={`https://society6.com/product/classy-elan_wall-clock#33=283&34=286`}
                    target="_blank"
                  >
                    <Button whiteSpace="nowrap">BUY NOW</Button>
                  </OutboundLink>
                  <Text fontSize={2} ml={4}>
                    Multiple variations available at Society6
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Cell>
      </Box>
      <Box px={4} mt={5}>
        <Cell>
          <Flex flexWrap="wrap" mx={-4} mt={-4}>
            {data.models.edges.map((poster, index) => {
              return (
                <Box key={index} width={[1, 1 / 3]} px={3} mt={4}>
                  <Shadow>
                    <Image
                      width="100%"
                      fluid={poster.node.childImageSharp.fluid}
                    />
                  </Shadow>
                </Box>
              )
            })}
          </Flex>
        </Cell>
      </Box>
    </PortfolioProject>
  )
}

export const query = graphql`
  query {
    logo: file(
      relativePath: { eq: "portfolio/4-nightvision/nightvision-thumbnail.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    clock: file(
      relativePath: { eq: "portfolio/4-nightvision/nightvision-elan-clock.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 512, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    logoInverse: file(
      relativePath: {
        eq: "portfolio/4-nightvision/nightvision-logo-inverse.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    posters: allFile(
      filter: { relativeDirectory: { eq: "portfolio/4-nightvision/posters" } }
      sort: { fields: name }
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
    models: allFile(
      filter: { relativeDirectory: { eq: "portfolio/4-nightvision/models" } }
      sort: { fields: name }
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
