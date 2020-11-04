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
  CadastrarAluno,
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
  const [idAluno, setIdAluno] = useState(location.state ? location.state.idAluno : '')
  const [nome, setNome] = useState(location.state ? location.state.nome : '')
  const [email, setEmail] = useState(location.state ? location.state.email : '')
  const [dataNascimento, setDataNascimento] = useState(location.state ? location.state.dataNascimento : '')

  const breadcrumbItens = [
    {
      name: 'Aluno',
      link: 'dashboard',
    },
    {
      name: window.location.href.indexOf('edit') !== -1 ? 'Editar Aluno ' : 'Novo Aluno',
    },
  ]

  const handleSubmit = () => {
    const requestOptions = {
      method: idAluno ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({nome: nome, email: email, dataNascimento: dataNascimento})
    };
    fetch('http://localhost:3000/api/alunos/' + (idAluno ? idAluno : ''), requestOptions)
        .then(response => response.json())
        .then(data => {
          notification.success({
            message: 'Aluno ' + (idAluno ? 'editado ' : 'cadastrado ') + 'com sucesso!',
            description: '',
          })  
          history.push('/alunos')
        })
  }

  return (
    <AdminTemplate
      sidebar={<SidebarAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey={null} />}
      header={<HeaderAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey="aluno" />}
      breadcrumb={<Breadcrumbs breadcrumbItens={breadcrumbItens} />}
    >
      <StyleContent>
        <CadastrarAluno
          idAluno={idAluno}
          setIdAluno={setIdAluno}
          nome={nome}
          setNome={setNome}
          email={email}
          setEmail={setEmail}
          dataNascimento={dataNascimento}
          setDataNascimento={setDataNascimento}
          history={history}
        />
        <Button key="back" onClick={() => history.push('/alunos')}>
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
