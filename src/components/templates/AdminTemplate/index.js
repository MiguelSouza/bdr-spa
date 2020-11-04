import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from 'components'

const StyledLayout = styled(Layout)`
  height: 100vh;
`

const AdminTemplate = ({
  children, sidebar, header, breadcrumb,
}) => {
  return (
    <StyledLayout>
      {sidebar}
      <Layout>
        {header}
        {breadcrumb}
        {children}
      </Layout>
    </StyledLayout>
  )
}

AdminTemplate.propTypes = {
  sidebar: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  breadcrumb: PropTypes.node,
  children: PropTypes.any.isRequired,
}

export default AdminTemplate
