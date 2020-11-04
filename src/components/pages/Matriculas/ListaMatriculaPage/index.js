import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  AdminTemplate,
  Layout,
  SidebarAdmin,
  ListaMatricula,
  CadastrarMatriculaPage,
  Loading,
  Breadcrumbs,
  HeaderAdmin,
  Block,
} from 'components'

const { Content } = Layout

const ListaMatriculaPage = (
  { history },
) => {
  const [collapsed, setCollapsed] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  const [matriculas, setMatriculas] = useState([])

  const breadcrumbItens = [
    {
      name: "Matrícula",
      link: 'dashboard',
    },
    {
      name: "Listo de Matrículas",
    },
  ]

  const pegarMatriculas = () => {
    fetch('http://localhost:3000/api/matriculas')
      .then(response => response.json())
      .then(data => {
        setMatriculas(data)
      });
  }

  return (
    <AdminTemplate
      sidebar={<SidebarAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey="matriculas" />}
      header={<HeaderAdmin collapsed={collapsed} setCollapsed={setCollapsed} />}
      breadcrumb={<Breadcrumbs breadcrumbItens={breadcrumbItens} />}
    >
      <Content>
        <ListaMatricula
          pegarMatriculas={pegarMatriculas}
          matriculas={matriculas}
          history={history}
        />
      </Content>
    </AdminTemplate>
  )
}

ListaMatriculaPage.propTypes = {
  history: PropTypes.object,
}

export default withRouter(ListaMatriculaPage)
