import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Cell from '@components/Cell'
import { Box, Flex } from '@components/Grid'
import Heading from '@components/Heading'
import Image from '@components/Image'
import { OutboundLink } from '@components/Link'
import Target from '@components/Target'
import { Text } from '@components/Text'

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query myPortraits {
      portrait1: file(relativePath: { eq: "colin-spence-portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 60) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      portrait2: file(relativePath: { eq: "colin-spence-portrait-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 60) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
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
                <Image fluid={data.portrait1.childImageSharp.fluid} width="100%" />
              </Box>
            </Flex>
            <Box flexDirection="column" mt={2} pl={3} width={2 / 3}>
              <Text fontSize={[2, 3]} lineHeight="1.75">
                Hey! I’m Colin Spence, a product designer from Canada. If I'm
                not coding or designing, I'm likely biking or dadding (or
                sometimes both at the same time).
              </Text>
              <Text fontSize={[2, 3]} lineHeight="1.75" mt={2}>
                I am currently a web3 Product Designer at&nbsp;
                <OutboundLink to="//www.dorg.tech" from="about section" target="_blank">
                  dOrg
                </OutboundLink>
                , and a number of other DAOs.
              </Text>
            </Box>
          </Flex>
        </Cell>
      </Box>
    </Target>
  )
}

export default AboutSection
