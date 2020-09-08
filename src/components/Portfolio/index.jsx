import React from 'react'
import tw, { styled } from 'twin.macro'
import typography from '../../../config/typography'
import { Box } from '@components/Grid'
import { Text } from '@components/Text'

const ProjectHeading = styled.h2`
  ${tw`mb-0 text-5xl leading-none tracking-wide text-center text-gray-600 uppercase align-middle`}
`

const Shadow = styled(Box)`
  ${tw`shadow-xl`}
`

const CaptionText = styled(Text)`
  ${tw`tracking-wide uppercase`}
`

const Caption = ({ children, ...props }) => (
  <CaptionText
    {...props}
    fontFamily={typography.options.headerFontFamily.toString()}
  >
    {children}
  </CaptionText>
)

Caption.defaultProps = {
  textAlign: 'center',
  fontSize: 4,
}

export { ProjectHeading, Shadow, Caption }
