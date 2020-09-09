import React from 'react'
import { graphql } from 'gatsby'
import PortfolioProject from '../../templates/project'
import { Box, Flex } from '@components/Grid'
import Button from '@components/Button'
import { OutboundLink } from '@components/Link'
import Cell from '@components/Cell'
import Image from '@components/Image'
import { Text } from '@components/Text'
import { ProjectHeading, Shadow } from '@components/Portfolio'

const Description = () => (
  <div>
    <Text as="p">
      <i>Owlustrations</i> is an illustration series which I created for an art
      show in 2011. These owlustrations were some of my favourite pieces to work
      on, and showcased a hand-rendered detail that received a great response.
    </Text>
    <Text as="p" mt={3}>
      Printed on 45lb coated Matte paper 7” x 7”.
    </Text>
  </div>
)

export default ({ data }) => {
  const entry = {
    slug: 'owlustrations',
    title: 'Owlustrations',
    thumbnail: data.thumbnail.childImageSharp.fluid,
    tags: ['Illustration'],
    description: <Description />,
  }

  return (
    <PortfolioProject entry={entry} prev="granify" next="typingcom">
      <Box px={4} mt={5}>
        <Cell>
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
            Owl Eyes On Us
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
            And owl the puns
          </Text>
          <Flex flexWrap="wrap" mx={-4}>
            {data.owlustrations.edges.map((owl, index) => {
              return (
                <Box key={index} width={[1, 1 / 3]} px={3} mt={4}>
                  <Shadow>
                    <Image
                      width="100%"
                      fluid={owl.node.childImageSharp.fluid}
                    />
                  </Shadow>
                  <Flex mt={4} justifyContent="center">
                    <OutboundLink
                      from={`${entry.slug}-portfolio`}
                      to={`https://society6.com/product/owlustrations-${index +
                        1}_print#1=45`}
                      target="_blank"
                    >
                      <Button whiteSpace="nowrap" py={2}>
                        BUY NOW
                      </Button>
                    </OutboundLink>
                  </Flex>
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
    thumbnail: file(
      relativePath: {
        eq: "portfolio/6-owlustrations/owlustrations-thumbnail.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    owlustrations: allFile(
      filter: {
        relativeDirectory: { eq: "portfolio/6-owlustrations/features" }
      }
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
