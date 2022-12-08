import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Cell from '@components/Cell'
import ContactForm from '@components/ContactForm'
import { Box, Flex } from '@components/Grid'
import Heading from '@components/Heading'
import { OutboundLink } from '@components/Link'
import { Text } from '@components/Text'

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    query ContactSectionQuery {
      site {
        siteMetadata {
          phone
          email
        }
      }
    }
  `)

  const { phone, email } = data.site.siteMetadata

  return (
    <Cell id="contact" px={3}>
      <Heading icon="contact" mt={[3, 4]}>
        Contact
      </Heading>
      <Text
        caps
        fontSize={1}
        letterSpacing="caps"
        mt={2}
        textAlign={["left","left","center"]}
        css={{ textTransform: 'uppercase' }}
      >
        Let's Chat!
      </Text>
      <Box my={[3, 4, 5]}>
        <Flex flexWrap="wrap" mt={-3}>
          <Box width={[1, 1 / 2, 1 / 3]} pr={3} mt={3}>
            <Box>
              <OutboundLink
                display={['none','none','inline-block']}
                from="contact"
                to={`mailto:${email}`}
              >
                {email}
              </OutboundLink>
            </Box>
            <Flex mt={3}>
              <OutboundLink
                mr={2}
                from="contact"
                target="_blank"
                to="https://www.facebook.com/colinspencedesign"
              >
                Facebook
              </OutboundLink>
              /
              <OutboundLink
                mx={2}
                from="contact"
                target="_blank"
                to="https://www.github.com/spencec6"
              >
                GitHub
              </OutboundLink>
              /
              <OutboundLink
                ml={2}
                from="contact"
                target="_blank"
                to="https://www.dribbble.com/colinspencedesign"
              >
                Dribbble
              </OutboundLink>
            </Flex>
          </Box>
          <ContactForm width={[1, 1 / 2, 2 / 3]} mt={3} />
        </Flex>
      </Box>
    </Cell>
  )
}

export default ContactSection
