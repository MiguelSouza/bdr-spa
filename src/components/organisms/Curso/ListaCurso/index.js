import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Card,
  Divider,
  Icon,
  Table,
  Button,
  notification,
  Modal,
} from 'components'

const { confirm } = Modal

const StyledCard = styled(Card)`
  margin: 15px;
`

const StyledButton = styled(Button)`
  margin-bottom: 15px;
`

const ListaCurso = (
  {
    pegarCursos,
    cursos,
    history,
  },

) => {
  useEffect(() => {
    pegarCursos()
  }, []);

  const abrirCadastroCurso = () => {
    history.push({
      pathname: '/cadastrar-curso',
    })
  }

  const abrirEdicaoCurso = (record) => {
    history.push({
      pathname: '/editar-curso',
      state: { idCurso: record._id, titulo: record.titulo, descricao: record.descricao },
    })
  }


  const columns = [
    {
      title: 'Título',
      dataIndex: 'titulo',
      key: 'titulo',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
      key: 'descricao',
    },

    {
      title:'Ação',
      key: 'acao',
      render: (text, record) => (
        <span>
          <Button onClick={(e) => { abrirEdicaoCurso(record, e) }} title={'Editar'}>
            <Icon type="edit" />
          </Button>
        </span>
      ),
    },
  ]

  return (
    <StyledCard>
      <StyledButton
        type="primary"
        onClick={abrirCadastroCurso}
      >
        Novo Curso
      </StyledButton>
      <Table dataSource={cursos} columns={columns} />
    </StyledCard>
  )
}

ListaCurso.propTypes = {
  pegarCursos: PropTypes.func,
  cursos: PropTypes.array.isRequired,
  history: PropTypes.object,
}

export default ListaCurso
