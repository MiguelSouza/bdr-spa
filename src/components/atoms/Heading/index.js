import React from 'react'
import PropTypes from 'prop-types'
import { font, palette } from 'styled-theme'
import styled from 'styled-components'

export const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`


//export const StyledHeading = styled(({//
//  level, children, reverse, palette, theme, ...props
//}) => React.createElement(`h${level}`, props, children))`${styles}`

const StyledHeading = {
    propTypes : {
    level: PropTypes.number,
    children: PropTypes.node,
    palette: PropTypes.string,
    reverse: PropTypes.bool,
  }
}

//StyledHeading.defaultProps = {
//  level: 1,
//  palette: 'grayscale',/
//}

const Heading = ({ ...props }) => {
  return (
    <StyledHeading {...props} />
  )
}

export default Heading
