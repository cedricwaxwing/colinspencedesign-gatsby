import React from 'react'
import PropTypes from 'prop-types'

import Button from '@components/Button'
import { Box } from '@components/Grid'
import Input from '@components/Input'

const ContactForm = props => (
  <Box as="form" {...props}>
    <Input width="100%" name="name" placeholder="Your Name" type="text"></Input>
    <Input
      mt={3}
      width="100%"
      name="email"
      placeholder="Email"
      type="email"
    ></Input>
    <Input
      mt={3}
      as="textarea"
      display="block"
      width="100%"
      name="message"
      placeholder="Your Message"
      type="email"
    ></Input>
    <Button type="primary" size="l" mt={3}>
      Submit
    </Button>
  </Box>
)

export default ContactForm
