
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
              Thanks for your consideration <span role="img" aria-label="smile">😊</span>
            </Text>
            <Text as="p" lineHeight="1.75" mt={4}>
              The world’s problems can sometimes feel so daunting and the prospect of solving them <i>all&nbsp;</i> becomes entirely overwhelming, and of course, this feeling has only been exasperated after becoming a father. The main way that I’ve overcome this feeling in the past has been to focus my skills and attention on one or two initiatives that I’m passionate about, such as working on Universal Basic Income pet projects which ultimately led to working on the 
              {` `}<Link fontSize={3} to="/portfolio/yang2020">Yang 2020 campaign</Link>
              , or empowering tens of millions of students across the world with the free educational product - 
              {` `}<Link fontSize={3} to="/portfolio/yang2020">Typing.com.</Link>
            </Text>
            <Text as="p" lineHeight="1.75" mt={4}>
              While I’m very proud of these accomplishments, it was soon into my relatively 
              {` `}<Link fontSize={3} to="/portfolio/granify">brief foray into management,</Link>{` `}
              where I came to understand that we are exponentially more effective at reaching our desired goals when we can empower others around us. This is what an opportunity at every.org means to me – an opportunity to focus my time and skills to empower others around me and ultimately make the world a better place for my children to inherit.
            </Text>
            <Text as="p" lineHeight="1.75" mt={4}>
              Over the last 6 years I’ve been championining various user-focused initiatives at the startups I've been working at. Most recently, I’ve advocated for every employee cycling onto customer service for one day a month at Teaching.com. That's gone so well that we’ve also made it so that the first 2 weeks of onboarding for all roles start with customer service so that the employees can get a solid understanding of the users’ perspective. Many of the features we’ve launched over the last couple years have been a result of our product team listening directly to our users’ problems, brainstorming solutions, creating fat-marker sketches through to Figma mockups and ultimately, fully developed solutions.
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
