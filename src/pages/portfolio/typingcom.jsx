import React from 'react'
import { graphql } from 'gatsby'
import PortfolioProject from '../../templates/project'
import { Box, Flex } from '@components/Grid'
import { OutboundLink } from '@components/Link'
import Cell from '@components/Cell'
import Image from '@components/Image'
import { Text } from '@components/Text'
import SalesSiteVideo from '../../../static/images/typingcom-sales-site.mp4'
import TeachersPageVideo from '../../../static/images/typingcom-teachers-opener.mp4'
import ExtrasVideo from '../../../static/images/typingcom-fun-extras-2.mp4'
import TeacherPortalVideo from '../../../static/images/typingcom-tp.mp4'
import { ProjectHeading, Shadow } from '@components/Portfolio'

const Description = () => (
  <div>
    <Text as="p">
      Over 39 million people use
      {` `}
      <OutboundLink
        to="https://www.typing.com"
        from="typingcom-portfolio"
        target="_blank"
      >
        Typing.com
      </OutboundLink>{' '}
      to learn and teach typing around the world. Although Typing.com has been
      around for over a decade, my recent redesigns for the product create a
      more engaging, and intuitive experience for both students and teachers.
    </Text>
  </div>
)

export default ({ data }) => {
  const entry = {
    slug: 'typingcom',
    title: 'Typing.com',
    link: {
      url: 'https://www.typing.com',
      name: 'See Typing.com',
    },
    banners: [
      data.mobileBanner.childImageSharp.fluid,
      {
        ...data.desktopBanner.childImageSharp.fluid,
        media: `(min-width: 768px)`
      }
    ],
    thumbnail: data.thumbnail.childImageSharp.fluid,
    tags: ['Product Design', 'Web Development', 'Illustration'],
    description: <Description />,
  }

  return (
    <PortfolioProject entry={entry} prev="owlustrations" next="yang2020">
      <Box mt={6} mb={[3, 4]}>
        <Image fluid={entry.banners} width="100%" />
      </Box>
      <Box px={4} py={5} mt={[2,5]} bg="grey.100">
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
            Sales Site Redesign
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
            Ethos, Logos & Pathos
          </Text>
        </Cell>
        <Cell maxWidth="650px" mt={4}>
          <Text as="p" fontSize={3} lineHeight="1.75">
            At the beginning of 2018, the team at
            {` `}
            <OutboundLink
              to="https://www.teaching.com"
              from="typingcom-portfolio"
              target="_blank"
            >
              Teaching.com
            </OutboundLink>
            and I set out to completely redesign and redevelop the entire
            Typing.com platform in order to make the site more engaging, modern,
            fun, and easy to use. While I did work on certain integral segments
            of the
            {` `}
            <OutboundLink
              to="https://www.typing.com/student/signup"
              from="typingcom-portfolio"
              target="_blank"
            >
              student portal
            </OutboundLink>{' '}
            and
            {` `}
            <OutboundLink
              to="https://www.typing.com/teacher/signup"
              from="typingcom-portfolio"
              target="_blank"
            >
              teacher portal
            </OutboundLink>{' '}
            in the redesign, my main focus was creating a brand new sales site
            for the platform. I was solely responsible for the content strategy,
            visual design and front-end implementation of the sales site.
          </Text>
        </Cell>
        <Cell mt={4}>
          <Shadow border="1px solid" borderColor="grey.200" borderRadius={2}>
            <video
              autoPlay={true}
              loop={true}
              mute="true"
              preload="true"
              width="100%"
              track="false"
            >
              <source src={SalesSiteVideo} type="video/mp4" />
            </video>
          </Shadow>
          <Box mt={4}>
            <Shadow border="1px solid" borderColor="grey.200" borderRadius={2}>
              <video
                autoPlay={true}
                loop={true}
                mute="true"
                preload="true"
                width="100%"
              >
                <source src={TeachersPageVideo} type="video/mp4" />
              </video>
            </Shadow>
          </Box>
          <Flex mx={-3} flexWrap="wrap">
            <Box width={[1, 1 / 2]} px={3} mt={4}>
              <Shadow
                border="1px solid"
                borderColor="grey.200"
                borderRadius={2}
              >
                <Image
                  fluid={data.extras1.childImageSharp.fluid}
                  width="100%"
                  borderRadius={2}
                />
              </Shadow>
            </Box>
            <Box width={[1, 1 / 2]} px={3} mt={4}>
              <Shadow
                border="1px solid"
                borderColor="grey.200"
                borderRadius={2}
              >
                <video
                  autoPlay={true}
                  loop={true}
                  mute="true"
                  preload="true"
                  width="100%"
                >
                  <source src={ExtrasVideo} type="video/mp4" />
                </video>
              </Shadow>
            </Box>
          </Flex>
        </Cell>
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
            Teacher Portal Redesign
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
            joy & simplicity
          </Text>
        </Cell>
        <Cell maxWidth="650px" mt={4}>
          <Text lineHeight="1.75">
            The teacher portal has been a huge focus of mine over the last
            number of years, and in early 2020, I was given the amazing
            opportunity to undertake a complete redesign of the portal. My wife
            is a teacher, so I totally sympathize with the pain that teachers go
            through when they try to use confusing online products.
          </Text>
          <Text mt={4} lineHeight="1.75">
            The redesign mainly focuses on optimizing navigation and usability,
            but there were also a number of new features we added as well,
            including the global search.
          </Text>
        </Cell>
        <Box mt={4}>
          <Image
            fluid={data.teacherPortalSelects.childImageSharp.fluid}
            width="100%"
            borderRadius={2}
          />
        </Box>
        <Cell>
          <Shadow
            mt={4}
            border="1px solid"
            borderColor="grey.200"
            borderRadius={2}
          >
            <video
              autoPlay={true}
              loop={true}
              mute="true"
              preload="true"
              width="100%"
            >
              <source src={TeacherPortalVideo} type="video/mp4" />
            </video>
          </Shadow>
        </Cell>
      </Box>
    </PortfolioProject>
  )
}

export const query = graphql`
  query {
    mobileBanner: file(
      relativePath: { eq: "portfolio/1-typingcom/typingcom-banner-mobile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    desktopBanner: file(
      relativePath: { eq: "portfolio/1-typingcom/typingcom-banner.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    thumbnail: file(
      relativePath: { eq: "portfolio/1-typingcom/typingcom-thumbnail.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    extras1: file(
      relativePath: { eq: "portfolio/1-typingcom/typingcom-fun-extras-1.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    teacherPortalSelects: file(
      relativePath: {
        eq: "portfolio/1-typingcom/typingcom-teacherportal-selects.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
