import React from 'react'
import styled from 'styled-components'

export const height = ({ height }) => height
export const width = ({ width }) => width

const Wrapper = styled.span`
  height: ${height}px;
  width: ${width}px;
`

const LogoImage = (props) => {
  const logo = 'logo'
  const svg = require(`!raw-loader!./${logo}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg.default }} />
}

export default LogoImage
