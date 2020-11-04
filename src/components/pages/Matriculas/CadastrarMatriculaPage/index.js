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
  CadastrarMatricula,
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
  const [idMatricula, setIdMatricula] = useState(location.state ? location.state.idMatricula : null)
  const [idAluno, setIdAluno] = useState(location.state ? location.state.idAluno : '')
  const [idCurso, setIdCurso] = useState(location.state ? location.state.idCurso : '')

  const [cursos, setCursos] = useState([])
  const [alunos, setAlunos] = useState([])

  const breadcrumbItens = [
    {
      name: 'Matrícula',
      link: 'dashboard',
    },
    {
      name: window.location.href.indexOf('edit') !== -1 ? 'Edição da Matrícula ' : 'Nova Matrícula',
    },
  ]

  const pegarCursos = () => {
    fetch('http://localhost:3000/api/cursos')
    .then(response => response.json())
    .then(data => {
      setCursos(data)
    });
  }

  const pegarAlunos = () => {
    fetch('http://localhost:3000/api/alunos')
      .then(response => response.json())
      .then(data => {
        setAlunos(data)
      });
  }

  const handleSubmit = () => {
    const requestOptions = {
      method: idMatricula ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({aluno_id: idAluno, curso_id: idCurso})
    };
    fetch('http://localhost:3000/api/matriculas/' + (idMatricula ? idMatricula : ''), requestOptions)
        .then(response => response.json())
        .then(data => {
          notification.success({
            message: 'Matrícula' + (idMatricula ? ' editada ' : ' cadastrada ') + 'com sucesso!',
            description: '',
          })  
          history.push('/matriculas')
        })
  }

  return (
    <AdminTemplate
      sidebar={<SidebarAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey={null} />}
      header={<HeaderAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey="CBO" />}
      breadcrumb={<Breadcrumbs breadcrumbItens={breadcrumbItens} />}
    >
      <StyleContent>
        <CadastrarMatricula
          idMatricula={idMatricula}
          setIdMatricula={setIdMatricula}
          idAluno={idAluno}
          setIdAluno={setIdAluno}
          idCurso={idCurso}
          setIdCurso={setIdCurso}
          alunos={alunos}
          cursos={cursos}
          pegarAlunos={pegarAlunos}
          pegarCursos={pegarCursos}
          history={history}
        />
        <Button key="back" onClick={() => history.push('/matriculas')}>
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
