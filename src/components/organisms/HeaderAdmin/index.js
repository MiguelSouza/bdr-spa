/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  Layout, Icon, Menu, AvatarImg, Progress, Row, Col, LoadingMin, Loading, notification,
}  from 'components'
import styled from 'styled-components'

const { Header } = Layout
const { SubMenu } = Menu

const StyledHeader = styled(Header)`
  background-color: #fff;
  padding: 5px 15px;
  line-height: 0;
  height: 62px;
`
const StyledIcon = styled(Icon)`
  font-size: 15px;/
`
const StyledSubMenu = styled(SubMenu)`
  float: right;
  width: 100%;
`
const StyledProgress = styled(Progress)`
  width: 100%;
  float: right;
`
const StyledMenu = styled(Menu)`
  padding-top: 5px;
  border: none;
`
const SubMenuGlobal = styled(SubMenu)`
  width: 100%;
`
const StyledGlobal = styled(Icon)`
  margin: 14px 0px 0px 50%;
  transform: translate(-50%, 10%);
`

const HeaderAdmin = ({
  history, collapsed, setCollapsed, selectedKey,
}) => {
  const defaultSelectedKeys = []
  !selectedKey ? defaultSelectedKeys.push(null) : defaultSelectedKeys.push(selectedKey)
  const [avatar, setAvatar] = useState(null)

  const toggle = () => {
    setCollapsed(!collapsed)
  }
 
  const logout = async (e, client) => {
    localStorage.clear()
    client.resetStore()
    history.push('/')
  }

  const changeLang = (language) => {
  }

  return (
    <StyledHeader>
      <Row type="flex" align="middle">
        <Col span={4}>
          <StyledIcon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Col>
      </Row>
    </StyledHeader>
  )
}

HeaderAdmin.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
  history: PropTypes.object,
  selectedKey: PropTypes.string,
}

export default withRouter(HeaderAdmin)
