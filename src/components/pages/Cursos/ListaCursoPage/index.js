import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  AdminTemplate,
  Layout,
  SidebarAdmin,
  ListaCurso,
  CursoCadastrarPagina,
  Loading,
  Breadcrumbs,
  HeaderAdmin,
  Block,
} from 'components'
//import FilterCBO from '../../../organisms/CBO/FilterCBO'

const { Content } = Layout

const ListaCursoPage = (
  { history },
) => {
  const [collapsed, setCollapsed] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  const [cursos, setCursos] = useState([])

  const breadcrumbItens = [
    {
      name: "Curso",
      link: 'dashboard',
    },
    {
      name: "Listo de Cursos",
    },
  ]

  const pegarCursos = () => {
    fetch('http://localhost:3000/api/cursos')
      .then(response => response.json())
      .then(data => {
        setCursos(data)
      });
  }

  return (
    <AdminTemplate
      sidebar={<SidebarAdmin collapsed={collapsed} setCollapsed={setCollapsed} selectedKey="cursos" />}
      header={<HeaderAdmin collapsed={collapsed} setCollapsed={setCollapsed} />}
      breadcrumb={<Breadcrumbs breadcrumbItens={breadcrumbItens} />}
    >
      <Content>
        <ListaCurso
          pegarCursos={pegarCursos}
          cursos={cursos}
          history={history}
        />
      </Content>
    </AdminTemplate>
  )
}

ListaCursoPage.propTypes = {
  history: PropTypes.object,
}

export default withRouter(ListaCursoPage)
