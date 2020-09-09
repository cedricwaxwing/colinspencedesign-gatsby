import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex } from '@components/Grid'
import PortfolioProject from '../../templates/project'
import Cell from '@components/Cell'
import Image from '@components/Image'
import YangMountain from '../../features/YangMountain'
import { Text } from '@components/Text'
import { OutboundLink } from '@components/Link'
import { ProjectHeading, Shadow, Caption } from '@components/Portfolio'

export default ({ data }) => {
  const entry = {
    slug: 'yang2020',
    title: 'Yang 2020',
    link: {
      url: 'https://www.yang2020.com',
      name: 'See More',
    },
    banners: [
      {
        ...data.desktopBanner.childImageSharp.fluid,
        media: `(min-width: 768px)`,
      },
    ],
    thumbnail: data.logo.childImageSharp.fluid,
    tags: ['Graphic Design', 'Web Development'],
    description:
      "Andrew Yang is an American 2020 Democratic presidential candidate running with the flagship proposal known as the Freedom Dividend in the form of $1,000 monthly for every American over the age of 18. Yang believes that a Universal Basic Income is a necessary response to the rapid development of automation, which is increasingly leading to workforce challenges, and that job displacement by automation is what led to Donald Trump's election in 2016. More than 160 policy proposals are listed on his campaign website.",
  }

  // const socials = [
  //   {
  //     slug: 'juneteenth',
  //     title: 'Juneteenth',
  //     descriptions: [
  //       "I wanted to draw emphasis to the fact that Juneteenth didn't take place until 900 days after the Emancipation Proclamation, so I opted for a visual representation of the days to create a more visceral effect.",
  //     ],
  //     fluid: data.socials.edges[0].node.childImageSharp.fluid,
  //   },
  //   {
  //     slug: 'hierarchy',
  //     title: "Mazlow's Hierarchy of Needs",
  //     descriptions: [
  //       'The idea here was to illustrate how $1000 a month could help transform the lives of people with a wide spectrum of needs, and ultimately move them towards a path of self-actualization.',
  //       "Distilling a complex thought or idea into a small square can be quite the challenge, but Annie's amazing sketch work helped bolster this concept to the next level, and it was great to see such a positive response after this graphic was released.",
  //     ],
  //     fluid: data.socials.edges[1].node.childImageSharp.fluid,
  //   },
  //   {
  //     slug: 'history',
  //     title: 'A History of UBI',
  //     descriptions: [
  //       'The history of Universal Basic Income dates back much further than most people would imagine, and has drawn support from a wide spectrum of intelligent folks.',
  //       'Creating a timeline in a square format graphic suitable for facebook/instagram was no simple task, and we ended up condensing a lot of the original design - but I am very happy with how it turned out, and I am happy to say I see this little graphic bouncing around various threads and group still to this day. ',
  //     ],
  //     fluid: data.socials.edges[2].node.childImageSharp.fluid,
  //   },
  //   {
  //     slug: 'progressive',
  //     title: 'Progressive Petition',
  //     descriptions: [
  //       "These icons helped communicate Yang's policies at a glance, but they also differentiated his brand.",
  //       'I think I have created almost 100 icons similar to the ones included here. These were used throughout the campaign, and are still being used today.',
  //     ],
  //     fluid: data.socials.edges[3].node.childImageSharp.fluid,
  //   },
  // ]

  return (
    <PortfolioProject entry={entry} prev="typingcom" next="thehooligans">
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
            A Longer-Than-Long-Shot
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
            But not for long
          </Text>
        </Cell>
      </Box>
      <Box px={4} mt={4}>
        <Cell maxWidth="512px">
          <Text as="p" lineHeight="1.75">
            Yang's 2020 presidential democratic campaign was like no other in
            the history of presidential campaigns. Starting out with 0 name
            recognition, he started as a "longer-than-long-shot" (New York
            Times, February 2018), but continued to gain momentum and worked his
            way into{' '}
            <OutboundLink
              to="//emersonpolling.com/2019/09/24/warren-surges-biden-slips-and-sanders-steadies-three-way-dead-heat-for-the-nomination/"
              target="_blank"
            >
              4th place in national polls.
            </OutboundLink>
          </Text>
          <Text as="p" mt={4} lineHeight="1.75">
            Working with the campaign for the first 3 quarters of 2019, I was
            able to put my design skills to work, and help bolster Yang from 0
            to hero.
          </Text>
        </Cell>
        <Cell maxWidth="800px" mt={5}>
          <Shadow>
            <Image width="100%" fluid={data.website.childImageSharp.fluid} />
          </Shadow>
          <Caption mt={3} textTransform="uppercase">Landing Page Mockup</Caption>
        </Cell>
      </Box>
      <Box bg="grey.100" px={4} py={5} mt={5}>
        <Cell>
          <Flex flexWrap="wrap" mx={-4} mt={-4}>
            {data.socials.edges.map((social, index) => {
              return (
                <Box key={index} width={[1, 1 / 2]} px={3} mt={4}>
                  <Shadow>
                    <Image
                      width="100%"
                      fluid={social.node.childImageSharp.fluid}
                    />
                  </Shadow>
                </Box>
              )
            })}
          </Flex>
          <Caption mt={3} textTransform="uppercase">Various Social Graphics</Caption>
        </Cell>
      </Box>
      <YangMountain />
      <Caption mt={3} textTransform="uppercase">Q3 Progress Bar - Design and Development</Caption>
    </PortfolioProject>
  )
}

export const query = graphql`
  query {
    desktopBanner: file(
      relativePath: { eq: "portfolio/2-yang2020/yang2020-banner.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    logo: file(
      relativePath: { eq: "portfolio/2-yang2020/yang2020-thumbnail.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    website: file(
      relativePath: { eq: "portfolio/2-yang2020/Yang2020-Landing-Page.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    socials: allFile(
      filter: { relativeDirectory: { eq: "portfolio/2-yang2020/social" } }
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
