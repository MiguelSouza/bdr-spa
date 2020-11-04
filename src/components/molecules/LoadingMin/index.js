import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import {
  Icon,
} from 'components'

export const fontSize = ({ size }) => size ? `${size}px` : '60'

const StyledIcon = styled(Icon)`
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: ${fontSize}px;
  color: ${palette({ grayscale: 0 }, 1)};
`

StyledIcon.defaultProps = {
  palette: 'primary',
}

const LoadingMin = ({ ...props }) => {
  return (
    <StyledIcon type="loading" {...props} />
  )
}

LoadingMin.propTypes = {
  size: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

export default LoadingMin
