import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  AdminTemplate,
  Layout,
  SidebarAdmin,
  ListaAluno,
  Breadcrumbs,
  HeaderAdmin,
} from 'components'

const { Content } = Layout

const ListaAlunoPage = (
  { history },
) => {
  const [collapsed, setCollapsed] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')

  const [alunos, setAlunos] = useState([])

  const breadcrumbItens = [
    {
      name: "Aluno",
      link: 'dashboard',
    },
    {
      name: "Lista de Alunos",
    },
  ]

  const pegarAlunos = () => {
    fetch('http://localhost:3000/api/alunos')
      .then(response => response.json())
      .then(data => {
        setAlunos(data)
      });
  }

  return (
    <AdminTemplate
      sidebar={<SidebarAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey="alunos" />}
      header={<HeaderAdmin collapsed={collapsed} setCollapsed={setCollapsed} />}
      breadcrumb={<Breadcrumbs breadcrumbItens={breadcrumbItens} />}
    >
      <Content>
        <ListaAluno
          pegarAlunos={pegarAlunos}
          alunos={alunos}
          history={history}
        />
      </Content>
    </AdminTemplate>
  )
}

ListaAlunoPage.propTypes = {
  history: PropTypes.object,
}

export default withRouter(ListaAlunoPage)
