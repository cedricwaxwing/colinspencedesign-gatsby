import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex } from '@components/Grid'
import PortfolioProject from '../../templates/project'
import Cell from '@components/Cell'
import Image from '@components/Image'
import Testimonial from '@components/Testimonial'
import YangMountain from '../../features/YangMountain'
import { Text } from '@components/Text'
import { OutboundLink } from '@components/Link'
import { ProjectHeading, Shadow, Caption } from '@components/Portfolio'

const Description = () => (
  <div>
    <Text as="p">
      Andrew Yang, the American 2020 Democratic presidential candidate running with the flagship proposal known as the Freedom Dividend in the form of $1,000 monthly for every American over the age of 18. Yang believes that a Universal Basic Income is a necessary response to the rapid development of automation, which is increasingly leading to workforce challenges, and that job displacement by automation is what led to Donald Trump's election in 2016. More than 160 policy proposals are listed on his campaign website.
    </Text>
    <Text as="p" mt={3}>
      Working with the campaign for the first 3 quarters of 2019, I was able to put my design skills to work, and help bolster Yang from a "longer-than-long-shot" (New York Times, February 2018), to 4th place in national polls.
    </Text>
  </div>
)

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
    description: <Description/>,
    testimonials: [
      {
        message: [`The breadth and depth of Colin's talents never cease to amaze me — he is the rare combination of technically skilled and profoundly creative — Colin can code an amazing website just as easily as he can explore, define, and set a brand's visual identity as well as everything in between.`],
        author: {
          image: data.annie.childImageSharp.fluid,
          name: 'Annie Beyer',
        },
        role: 'Creative Director',
        company: 'Yang2020'
      },
      {
        message: [`Colin began working with the Yang2020 campaign in early 2019, when the staff was still single digits. As our staff scaled by 30x through 2019, Colin was without a doubt one of the central linchpins keeping our marketing efforts together. He worked swiftly and communicated clearly which saved the day many times as we maneuvered our crazy rocket ship.`],
        author: {
          image: data.andrew.childImageSharp.fluid,
          name: 'Andrew Frawley',
        },
        role: 'Communications Manager',
        company: 'Yang2020'
      },
    ]
  }

  return (
    <PortfolioProject entry={entry} prev="typingcom" next="thehooligans">
      <Box >
        <Image fluid={entry.banners} width="100%" />
      </Box>
      <Testimonial mb={[3, 4]} testimonial={entry.testimonials[1]} />
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
            A Longer-Than-Long-Shot
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
            But not for long
          </Text>
        </Cell>
      </Box>
      <Box px={4} mt={4}>
        <Cell maxWidth="512px">
          <Text as="p" mt={4}>
            I was responsible for the design and the frontend implementation (html, css, and javascript) of the progress piece below. Illustration of the mountains and Yang were provided by{` `}
            <OutboundLink to="https://www.launchmodedesign.com/">Launch Mode Design</OutboundLink> and implementation was handled by the team's web developer.
          </Text>
          <Text as="p" mt={4}>
            This feature worked so well that it helped Yang reach over $10 million in Q3, exceeding the previous quarter's funding by over 3 times, his largest fundraising growth during the campaign.
          </Text>
        </Cell>
        <Cell>
          <YangMountain/>
          <Caption mt={3} textTransform="uppercase">Q3 Progress Bar - Design and Development</Caption>
        </Cell>
      </Box>
      <Testimonial mt={5} testimonial={entry.testimonials[0]} />
      <Box bg="grey.100" px={4} py={5}>
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
      <Box mt={4} px={4}>
        <Cell maxWidth="800px" mt={5}>
          <Shadow>
            <Image width="100%" fluid={data.website.childImageSharp.fluid} />
          </Shadow>
          <Caption mt={3} textTransform="uppercase">Landing Page Mockup</Caption>
        </Cell>
      </Box>
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
    andrew: file(
      relativePath: { eq: "testimonials/andrew.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 80, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    annie: file(
      relativePath: { eq: "testimonials/annie.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 80, quality: 90) {
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
