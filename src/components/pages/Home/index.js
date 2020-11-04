import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
// import { Card, Icon, Avatar } from 'antd'
import {
  AdminTemplate,
  Layout,
  SidebarAdmin,
  Breadcrumbs,
  HeaderAdmin,
  Row,
  Card,
  Col,
  Menu,
} from 'components'
import clients from '../../../../public/images/client.png'
import settings from '../../../../public/images/settings.jpg'

const { Content } = Layout

const StyledContent = styled(Content)`
  margin: 10px 10px;
`
const StyledCard = styled(Card)`
  margin: 10px;
  cursor: pointer;
  text-align: center;
`

const Home = (
  { history },
) => {
  const [collapsed, setCollapsed] = useState(false)
  // const { Meta } = Card
  const breadcrumbItens = [
    {
      name: Home,
      link: 'home',
    },
  ]

  return (
    <AdminTemplate
      sidebar={<SidebarAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey="home" />}
      header={<HeaderAdmin collapsed={collapsed} setCollapsed={setCollapsed} />}
      breadcrumb={<Breadcrumbs breadcrumbItens={breadcrumbItens} />}
    >
      <StyledContent>
        <Menu>
          <Row>
            <Col span={12}>
              <StyledCard>
                <Menu.Item key="customers" onClick={() => history.push('/customers-list')}>
                  <img src={clients} alt="clients" height="150px" width="250px" />
                  <br />
                  <span><strong>Cursos</strong></span>
                </Menu.Item>
              </StyledCard>
            </Col>
            <Menu.Item key="setting" onClick={() => history.push('/setting')}>
              <Col span={12}>
                <StyledCard>
                  <img src={settings} alt="setting" height="150px" width="250px" />
                  <br />
                  <span><strong>Matrículas</strong></span>
                </StyledCard>
              </Col>
            </Menu.Item>
          </Row>
        </Menu>
      </StyledContent>
    </AdminTemplate>
  )
}

Home.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Home)
