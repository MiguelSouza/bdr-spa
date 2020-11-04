import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  AdminTemplate,
  Layout,
  SidebarAdmin,
  Breadcrumbs,
  HeaderAdmin,
} from 'components'

const { Content } = Layout

const Dashboard = (
  { history },
) => {
  const [collapsed, setCollapsed] = useState(false)

  const breadcrumbItens = [
    {
      name: 'Dashboard',
      link: 'dashboard',
    },
    {
      name: "dash",
    },
  ]

  return (
    <AdminTemplate
      sidebar={<SidebarAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey="dashboard" />}
      header={<HeaderAdmin collapsed={collapsed} setCollapsed={setCollapsed} />}
      breadcrumb={<Breadcrumbs breadcrumbItens={breadcrumbItens} />}
    >
      <Content>
        {/* DashBoard! */}
      </Content>
    </AdminTemplate>
  )
}

Dashboard.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Dashboard)
