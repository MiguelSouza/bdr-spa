import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import {
  LogoImage, Layout, Menu, Icon,
} from 'components'

const { Sider } = Layout
const { SubMenu } = Menu

const StyledLogoImage = styled(LogoImage)`
  .logo, #svg {
    margin: 20px 10px;
  }
`
const SidebarAdmin = ({
  history, collapsed, setCollapsed, selectedKey,
}) => {
  const defaultSelectedKeys = []
  !selectedKey ? defaultSelectedKeys.push(null) : defaultSelectedKeys.push(selectedKey)

  return (
    <Sider
      trigger={null}
      collapsible
      width={256}
      collapsed={collapsed}
      breakpoint="lg"
      onCollapse={(collapsed) => {
        setCollapsed(collapsed)
      }}
    >
      <StyledLogoImage className="logo" />
     
          <Menu theme="dark" mode="inline" defaultSelectedKeys={defaultSelectedKeys}>
            <Menu.Item key="home" onClick={() => history.push('/home')}>
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="alunos" onClick={() => history.push('/alunos')}>
              <Icon type="user" />
              <span>Alunos</span>
            </Menu.Item>
            <Menu.Item key="cursos" onClick={() => history.push('/cursos')}>
              <Icon type="user" />
              <span>Cursos</span>
            </Menu.Item>
             <Menu.Item key="matriculas" onClick={() => history.push('/matriculas')}>
              <Icon type="user" />
              <span>Matrículas</span>
            </Menu.Item>
          </Menu>
    </Sider>
  )
}

SidebarAdmin.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  history: PropTypes.object,
  setCollapsed: PropTypes.func.isRequired,
  selectedKey: PropTypes.string,
}

export default withRouter(SidebarAdmin)
