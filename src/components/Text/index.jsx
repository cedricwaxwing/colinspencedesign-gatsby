import styled, { space, color, layout, typography, propTypes } from '@style'

const Text = styled.p`
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : '0')};
  margin: 0;
  padding: 0;
  line-height: 1.75;
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'none'};
  ${space}
  ${color}
  ${layout}
  ${typography}
`

Text.displayName = `Text`

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
}

export { Text }
