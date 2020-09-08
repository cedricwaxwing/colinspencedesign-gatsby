import React from 'react'
import { Box, Flex } from '@components/Grid'
import Cell from '@components/Cell'
import Image from '@components/Image'
import { Text } from '@components/Text'
import Button from '@components/Button'
import { OutboundLink } from '@components/Link'
import typography from '../../../config/typography'

const Intro = ({ entry }) => {
  return (
    <Cell px={[3, 5, 3]} pt={6} mb={5}>
      <Flex flexWrap="wrap" mt={-2}>
        <Flex
          alignItems="center"
          justifyContent="center"
          width={[1, 1, 1 / 2]}
          bg="transparent"
          p={2}
        >
          <Image
            fluid={entry.thumbnail}
            alt={entry.title}
            loading="eager"
            width={`${64}%`}
          />
        </Flex>
        <Box width={[1, 1, 1 / 2]} p={2}>
          <Text
            as="h1"
            color="grey.700"
            fontSize={8}
            letterSpacing="4px"
            textTransform="uppercase"
          >
            {entry.title}
          </Text>
          {entry.tags ? (
            <Box
              borderTop="1px solid"
              borderTopColor="grey.200"
              width="100%"
              mt={3}
            >
              <Flex flexWrap="wrap" mt={3}>
                {entry.tags.map((tag, index) => {
                  return index !== entry.tags.length - 1 ? (
                    <React.Fragment key={`fragment-${index}`}>
                      <Text
                        key={index}
                        color="primary.600"
                        fontSize={3}
                        fontFamily={typography.options.headerFontFamily.toString()}
                        fontWeight="500"
                        letterSpacing="2px"
                        mr={3}
                        textTransform="uppercase"
                      >
                        {tag}
                      </Text>
                      <Text
                        key={`${index}-line`}
                        color="grey.300"
                        fontSize={3}
                        fontFamily={typography.options.headerFontFamily.toString()}
                        fontWeight="500"
                        letterSpacing="2px"
                        mr={3}
                        textTransform="uppercase"
                      >
                        |
                      </Text>
                    </React.Fragment>
                  ) : (
                    <Text
                      key={index}
                      color="primary.600"
                      fontSize={3}
                      fontFamily={typography.options.headerFontFamily.toString()}
                      fontWeight="500"
                      letterSpacing="2px"
                      mr={0}
                      textTransform="uppercase"
                    >
                      {tag}
                    </Text>
                  )
                })}
              </Flex>
            </Box>
          ) : null}
          <Box mt={3}>
            <Text as="div" lineHeight={1.75}>
              {entry.description}
            </Text>
          </Box>
          {entry.link ? (
            <OutboundLink
              from={`${entry.slug}-portfolio`}
              to={entry.link.url}
              target="_blank"
            >
              <Button mt={3}>{entry.link.name}</Button>
            </OutboundLink>
          ) : null}
        </Box>
      </Flex>
    </Cell>
  )
}

export default Intro
