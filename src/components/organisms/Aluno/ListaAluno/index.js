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
} from 'components'

const StyledCard = styled(Card)`
  margin: 15px;
`

const StyledButton = styled(Button)`
  margin-bottom: 15px;
`

const ListaAluno = (
  {
    pegarAlunos,
    alunos,
    history,
  },

) => {
  useEffect(() => {
    pegarAlunos()
  }, []);

  const abrirCadastroAluno = () => {
    history.push({
      pathname: '/cadastrar-aluno',
    })
  }

  const abrirEdicaoAluno = (record) => {
    history.push({
      pathname: '/editar-aluno',
      state: { idAluno: record._id, nome: record.nome, email: record.email, dataNascimento: record.data_nascimento },
    })
  }


  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Data Nascimento',
      dataIndex: 'data_nascimento',
      key: 'data_nascimento',
    },
    {
      title:'Ação',
      key: 'acao',
      render: (text, record) => (
        <span>
          <Button onClick={(e) => { abrirEdicaoAluno(record, e) }} title={'Editar'}>
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
        onClick={abrirCadastroAluno}
      >
        Novo Aluno
      </StyledButton>
      <Table dataSource={alunos} columns={columns} />
    </StyledCard>
  )
}

ListaAluno.propTypes = {
  pegarAlunos: PropTypes.func,
  alunos: PropTypes.array.isRequired,
  history: PropTypes.object,
}

export default ListaAluno
