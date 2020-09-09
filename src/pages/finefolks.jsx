import React from 'react'
import { Helmet } from 'react-helmet'
import { Box } from '@components/Grid'
import { Layout } from '@components/Layout'
import Cell from '@components/Cell'
import { ProjectHeading } from '@components/Portfolio'
import { Text } from '@components/Text'

const FineFolks = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fine Folks | Colin Spence Design</title>
        <link rel="canonical" href={`https://colinspencedesign.com/finefolks`} />
      </Helmet>
      <Box px={[3, 5, 3]}>
        <Cell maxWidth="650px" py={6} overflowX="hidden">
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
            Fine Folks
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
            I get by with a little help by my friends
          </Text>
          <Text as="p" fontSize={2} mt={4}>
            I wouldn't be where am I today without the guidance and support from
            these lovely humans (in no particular order) :
          </Text>

          <Box as="ul" mt={4}>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="love">❤️</span> Erin Spence - </strong>
                You're my everything
              </Text>
            </Box>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="love-face">😍</span> Charlotte Spence - </strong>
                You're my motivation and inspiration
              </Text>
            </Box>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="mom">👩🏼</span> Mom - </strong>
                Thanks for your unconditional love and support
              </Text>
            </Box>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="dad">👨🏻</span> Dad - </strong>
                Thanks for teaching me the importance of a good work ethic
              </Text>
            </Box>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="headphones">🎧</span> Andrew - </strong>
                Too much fun!
              </Text>
            </Box>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="swim">🏊‍♂️</span> Derrick - </strong>
                Thanks for making sure I don't get over my head.
              </Text>
            </Box>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="potatoe">🥔</span> Fouad - </strong>
                Beastie boooi.
              </Text>
            </Box>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="optimization">☑️</span> Mike - </strong>
                No more preemptive optimization
              </Text>
            </Box>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="wine">🍷</span> Miyuru - </strong>
                Thanks for showing me that wine and Djarums are the perfect
                recipe for creativity.
              </Text>
            </Box>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="watch">⌚️</span> Robbie - </strong>
                Thanks for always being there
              </Text>
            </Box>
            <Box as="li">
              <Text fontSize={2}>
                <strong><span role="img" aria-label="lightbulb">💡</span> Tim - </strong>
                Teaching me
              </Text>
            </Box>
          </Box>
        </Cell>
      </Box>
    </Layout>
  )
}

export default FineFolks
