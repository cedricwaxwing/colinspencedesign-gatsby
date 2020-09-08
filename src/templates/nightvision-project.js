import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Button from '@components/Button'
import Cell from '@components/Cell'
import { Box, Flex } from '@components/Grid'
import Image from '@components/Image'
import { OutboundLink } from '@components/Link'
import { Text } from '@components/Text'

const WorkSection = () => (
  <Box bg="grey.100">
    <Cell py={4} px={2}>
      <StaticQuery
        query={graphql`
          {
            nightvision: contentfulPortfolioProject(
              slug: { eq: "nightvision" }
            ) {
              gallery {
                title
                description
                fluid(maxWidth: 600, resizingBehavior: SCALE) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
              posters {
                title
                fluid(maxWidth: 800, resizingBehavior: SCALE) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
              storeImages {
                title
                description
                fluid(maxWidth: 800, resizingBehavior: SCALE) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <Flex justifyContent="center" flexWrap="wrap" mx={-2} my={2}>
              {data.nightvision.posters.map((poster, index) => (
                <Box
                  key={`poster-${index}`}
                  width={[1, 1 / 2, 1 / 2]}
                  p={2}
                  pt={3}
                  pb={0}
                >
                  <Image
                    fluid={poster.fluid}
                    alt={poster.title}
                    title={poster.title}
                    width="100%"
                  />
                </Box>
              ))}
            </Flex>
            <Box mt={2}>
              {data.nightvision.storeImages.map((storeImage, index) => {
                const itemDetails = storeImage.description.split('***')
                return (
                  <Flex
                    key={`storeImage-${index}`}
                    alignItems="center"
                    flexWrap="wrap"
                    mx={-2}
                  >
                    <Box width={[1, 1 / 2, 2 / 3]} p={2} pb={0}>
                      <Image
                        fluid={storeImage.fluid}
                        alt={storeImage.title}
                        title={storeImage.title}
                        width="100%"
                      />
                    </Box>
                    <Box width={[1, 1 / 2, 1 / 3]} p={2}>
                      <Text
                        as="h2"
                        color="grey.700"
                        fontSize={7}
                        letterSpacing="3px"
                        textTransform="uppercase"
                      >
                        {storeImage.title}
                      </Text>
                      <Text color="grey.900" fontSize={6} fontWeight="bold">
                        {itemDetails[0]}
                      </Text>
                      <Box
                        borderBottom="1px solid"
                        borderColor="grey.300"
                        mt={2}
                      ></Box>
                      <Flex alignItems="center" mt={3}>
                        <OutboundLink
                          from="nightvision-project"
                          to={itemDetails[1]}
                          target="_blank"
                          mr={3}
                        >
                          <Button type="secondary" borderRadius={0}>
                            BUY&nbsp;NOW
                          </Button>
                        </OutboundLink>
                        <Text fontSize={2}>
                          Multiple variations available at Society6
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                )
              })}
            </Box>
            <Flex justifyContent="center" flexWrap="wrap" mx={-2} my={2}>
              {data.nightvision.gallery.map((gallery, index) => (
                <Box
                  key={`gallery-${index}`}
                  width={[1, 1 / 3, 1 / 3]}
                  p={2}
                  pb={0}
                >
                  <Image
                    fluid={gallery.fluid}
                    alt={gallery.title}
                    title={gallery.title}
                    width="100%"
                  />
                </Box>
              ))}
            </Flex>
          </React.Fragment>
        )}
      ></StaticQuery>
    </Cell>
  </Box>
)

export default WorkSection
