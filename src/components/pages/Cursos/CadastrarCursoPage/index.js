import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import {
  AdminTemplate,
  Layout,
  SidebarAdmin,
  HeaderAdmin,
  Breadcrumbs,
  CadastrarCurso,
  notification,
} from 'components'
import { Button } from 'antd'

const { Content } = Layout
const StyleContent = styled(Content)`
  margin: 15px;
  padding: 15px;
  background-color: #fff;
  min-height: auto;
`
const Dashboard  = (
  {
    history,
    location,
  },
) => {
  const [collapsed, setCollapsed] = useState(false)
  const [idCurso, setIdCurso] = useState(location.state ? location.state.idCurso : null)
  const [titulo, setTitulo] = useState(location.state ? location.state.titulo : '')
  const [descricao, setDescricao] = useState(location.state ? location.state.descricao : '')

  const breadcrumbItens = [
    {
      name: 'Curso',
      link: 'dashboard',
    },
    {
      name: window.location.href.indexOf('edit') !== -1 ? 'Edição do Curso' : 'Novo Curso',
    },
  ]

  const handleSubmit = () => {
    const requestOptions = {
      method: idCurso ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({titulo: titulo, descricao: descricao})
    };
    fetch('http://localhost:3000/api/cursos/' + (idCurso ? idCurso : ''), requestOptions)
        .then(response => response.json())
        .then(data => {
          notification.success({
            message: 'Curso' + (idCurso ? 'editado' : 'cadastrado') + 'com sucesso!',
            description: '',
          })  
          history.push('/cursos')
        })
  }

  return (
    <AdminTemplate
      sidebar={<SidebarAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey={null} />}
      header={<HeaderAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey="CBO" />}
      breadcrumb={<Breadcrumbs breadcrumbItens={breadcrumbItens} />}
    >
      <StyleContent>
        <CadastrarCurso
          idCurso={idCurso}
          setIdCurso={setIdCurso}
          titulo={titulo}
          setTitulo={setTitulo}
          descricao={descricao}
          setDescricao={setDescricao}
          history={history}
        />
        <Button key="back" onClick={() => history.push('/cursos')}>
          voltar
        </Button>
        <Button style={{ marginLeft: '10px' }} type="primary" onClick={() => handleSubmit()}>
          salvar
        </Button>
      </StyleContent>
    </AdminTemplate>
  )
}

Dashboard .propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
}

export default withRouter(Dashboard )
