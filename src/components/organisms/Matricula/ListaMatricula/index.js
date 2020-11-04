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

const ListaMatricula = (
  {
    pegarMatriculas,
    matriculas,
    history,
  },

) => {
  useEffect(() => {
    pegarMatriculas()
  }, []);

  const abrirCadastroMatricula = () => {
    history.push({
      pathname: '/cadastrar-matricula',
    })
  }

  const abrirEdicaoMatricula = (record) => {
    history.push({
      pathname: '/editar-matricula',
      state: { idMatricula: record._id, idAluno: record.aluno_id, idCurso: record.curso_id },
    })
  }


  const columns = [
    {
      title: 'Aluno',
      dataIndex: 'aluno[0].nome',
      key: 'aluno',
    },
    {
      title: 'Curso',
      dataIndex: 'curso[0].titulo',
      key: 'curso',
    },

    {
      title:'Ação',
      key: 'acao',
      render: (text, record) => (
        <span>
          <Button onClick={(e) => { abrirEdicaoMatricula(record, e) }} title={'Editar'}>
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
        onClick={abrirCadastroMatricula}
      >
        Nova Matrícula
      </StyledButton>
      <Table dataSource={matriculas} columns={columns} />
    </StyledCard>
  )
}

ListaMatricula.propTypes = {
  pegarMatriculas: PropTypes.func,
  matriculas: PropTypes.array.isRequired,
  history: PropTypes.object,
}

export default ListaMatricula
