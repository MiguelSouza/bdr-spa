import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Form, Row, Col, Select,
} from 'components'

const CadastrarMatricula = ({
  form: { getFieldDecorator },
  idMatricula,
  idCurso,
  setIdCurso,
  idAluno,
  setIdAluno,
  cursos,
  alunos,
  pegarCursos,
  pegarAlunos,
}) => {
  useEffect(() => {
    pegarCursos()
    pegarAlunos()
  }, []);
  return (
    <Form
      name="formMatricula"
    >
      <Row>
        <Col span={24}>
          <p style={{ marginBottom: '25px', paddingTop: '10px', fontWeight: 'bold' }}>
            {window.location.href.indexOf('edit') !== -1 ? 'Editar Curso' : 'Cadastrar Curso'}
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            label={'Aluno'}
          >
            {getFieldDecorator('aluno', {
              initialValue: (idAluno),
              rules: [
                {
                  required: true,
                  message: 'Campo obrigatório',
                },
              ],
            })(
              <Select
                style={{ width: '70%' }}
                placeholder="Aluno"
                name="aluno"
                onChange={(e) => setIdAluno(e)}
                value={idAluno || 'Aluno'}
              >
                {alunos.map((aluno) => <Option key={aluno._id} value={aluno._id}>{aluno.nome}</Option>)}
              </Select>,
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
              label={'Curso'}
            >
              {getFieldDecorator('curso', {
                initialValue: (idCurso),
                rules: [
                  {
                    required: true,
                    message: 'Campo obrigatório',
                  },
                ],
              })(
                <Select
                  style={{ width: '70%' }}
                  placeholder="Curso"
                  name="curso"
                  onChange={(e) => setIdCurso(e)}
                  value={idCurso || 'Curso'}
                >
                  {cursos.map((curso) => <Option key={curso._id} value={curso._id}>{curso.titulo}</Option>)}
                </Select>
              )}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

CadastrarMatricula.propTypes = {
  idAluno: PropTypes.string.isRequired,
  setIdAluno: PropTypes.func.isRequired,
  nome: PropTypes.string.isRequired,
  setNome: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  dataNascimento: PropTypes.string.isRequired,
  setDataNascimento: PropTypes.func.isRequired,
}

const WrappedFormMatricula = Form.create({ name: 'formMatricula' })(CadastrarMatricula)

export default WrappedFormMatricula
