import React from 'react'
import { Link } from '@components/Link'

import { Layout } from '@components/Layout'
import { Text } from '@components/Text'
import { Br, Box, Flex } from '@components/Grid'

const NotFoundPage = () => (
  <Layout>
    <Flex minHeight="100vh" alignItems="center" justifyContent="center">
      <Box>
        <Text as="h2" fontSize={[5,6,7]} mb={2} textTransform="uppercase">
          This page was not found.
        </Text>
        <Text>
          You just hit a route that doesn&#39;t exist... the sadness.
          <Br />
          <Link to="/" mt={2}>Take me home.</Link>
        </Text>
      </Box>
    </Flex>
  </Layout>
)

export default NotFoundPage
