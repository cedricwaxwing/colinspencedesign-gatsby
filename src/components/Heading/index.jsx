import React from 'react'
import { Box } from '@components/Grid'
import Hr from '@components/Hr'
import { Text } from '@components/Text'

const Heading = ({ icon, children, ...props }) => {
  return (
    <Box {...props}>
      <Text
        as="h1"
        color="grey.700"
        fontSize={[7, 8]}
        mb={[2, 3]}
        textAlign="center"
        css={{
          textTransform: 'uppercase',
          letterSpacing: '0.3rem',
        }}
      >
        {children}
      </Text>
      <Hr icon={icon} />
    </Box>
  )
}

Heading.defaultProps = {
  icon: null,
  maxWidth: '1024px',
}

export default Heading
