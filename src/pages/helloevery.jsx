
import React from 'react'
import { Helmet } from 'react-helmet'
import Button from '@components/Button'
import { Box, Flex } from '@components/Grid'
import { Layout } from '@components/Layout'
import { Link } from '@components/Link'
import Image from '@components/Image'
import Cell from '@components/Cell'
import { ProjectHeading } from '@components/Portfolio'
import { Text } from '@components/Text'

const EveryOrg = ({data}) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hello Every! | Colin Spence Design</title>
        <link rel="canonical" href="https://colinspencedesign.com/helloevery" />
      </Helmet>
      <Box px={[3, 5, 3]}>
        <Cell maxWidth="650px" py={6} overflowX="hidden">
          <Image fluid={data.helloevery.childImageSharp.fluid} width="100%"/>
          <Box mt={4}>
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
              Hello Every!
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
              It's lovely to meet you <span role="img" aria-label="smile">😊</span>
            </Text>
            <Text as="p" lineHeight="1.75" mt={4}>
              Every.org looks like a fantastic initiative that I would absolutely love to be a part of! Over the last 4 or 5 years, I’ve found that at many times, the world’s problems are just so daunting and the prospect of solving them all just becomes entirely overwhelming. The main way that I’ve combatted this feeling in the past has been to focus on one or two initiatives that I care strongly about (Universal Basic Income, Education). And while that has led to some incredible, unregrettable paths, I can’t help but feel like there is still so much out there left to do.
            </Text>
            <Text as="p" lineHeight="1.75" mt={4}>
              From a product perspective, I just love the fact that I can easily find charities and organizations that are aligned to my interests on Every.org. From a product designer perspective, I love the idea that I could use my skills, and focus my time and energy into building something that makes it easy for other people to do the same. I’m thrilled at this opportunity, and I hope you’ll enjoy looking through my portfolio. Thank you for your consideration.
            </Text>
            <Flex justifyContent="center" width="100%">
              <Link mt={4} to="/#work" fontSize={3}>
                <Button>See My Work</Button>
              </Link>
            </Flex>
          </Box>
        </Cell>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query {
    helloevery: file(
      relativePath: { eq: "every-banner.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 650, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default EveryOrg
