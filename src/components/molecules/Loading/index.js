import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import {
  Card, Icon,
} from 'components'

const StyledCard = styled(Card)`
  margin: 15px;
`

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

const Loading = ({ ...props }) => {
  return (
    <StyledCard>
      <StyledIcon type="loading" {...props} />
    </StyledCard>
  )
}

Loading.propTypes = {
  size: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

export default Loading
