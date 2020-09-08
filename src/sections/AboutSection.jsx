import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Cell from '@components/Cell'
import { Box, Flex } from '@components/Grid'
import Heading from '@components/Heading'
import Image from '@components/Image'
import { OutboundLink } from '@components/Link'
import Target from '@components/Target'
import { Text } from '@components/Text'

import portrait1 from '../images/colin-spence-portrait.jpg'
import portrait2 from '../images/colin-spence-portrait-2.jpg'

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query myPortraits {
      portrait1: allImageSharp(
        filter: { id: { eq: "f0f21b08-6730-5923-a5e0-bbb44e526913" } }
      ) {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
          id
        }
      }
      portrait2: allImageSharp(
        filter: { id: { eq: "cbf3688a-1b4b-591c-8bd0-271f1a0041f6" } }
      ) {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
          id
        }
      }
    }
  `)
  return (
    <Target id="about">
      <Box bg="grey.100" py={[4, 5]}>
        <Cell px={3}>
          <Heading icon="about" mb={[3, 4]}>
            About
          </Heading>
          <Flex alignItems="center" justifyContent="center" mt={-2}>
            <Flex mt={2} width={1 / 3}>
              <Box
                borderRadius="50%"
                mx="auto"
                maxWidth="200px"
                overflow="hidden"
                width="100%"
              >
                <Image fluid={data.portrait2.nodes[0].fluid} width="100%" />
              </Box>
            </Flex>
            <Box flexDirection="column" mt={2} pl={3} width={2 / 3}>
              <Text fontSize={[2, 3]} lineHeight="1.75">
                Hey! I’m Colin Spence, a product designer from Canada. If I'm
                not coding or designing, I'm likely biking or dadding (or
                sometimes both at the same time).
              </Text>
              <Text fontSize={[2, 3]} lineHeight="1.75" mt={2}>
                I am currently happily employed as a Product Designer at&nbsp;
                <OutboundLink to="//www.teaching.com" from="about section">
                  Teaching.com
                </OutboundLink>
                .
              </Text>
            </Box>
          </Flex>
        </Cell>
      </Box>
    </Target>
  )
}

export default AboutSection
