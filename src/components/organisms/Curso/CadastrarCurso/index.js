import React from 'react'
import PropTypes from 'prop-types'
import {
  Form, Row, Col, Input,
} from 'components'

const CadastrarCurso = ({
  form: { getFieldDecorator },
  idCurso,
  titulo,
  setTitulo,
  descricao,
  setDescricao,
}) => {
  return (
    <Form
      name="formCurso"
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
            label={'Título'}
          >
            {getFieldDecorator('titulo', {
              initialValue: (titulo),
              rules: [
                {
                  required: true,
                  message: 'Campo obrigatório',
                },
              ],
            })(
              <Input
                name="titulo"
                placeholder={'Título'}
                onChange={(e) => setTitulo(e.target.value)}
              />,
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            label={'Descrição'}
          >
            {getFieldDecorator('descricao', {
              initialValue: (descricao),
            })(
              <Input
                name="descricao"
                placeholder={'Descrição'}
                onChange={(e) => setDescricao(e.target.value)}
              />,
            )}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

CadastrarCurso.propTypes = {
  idCurso: PropTypes.string.isRequired,
  titulo: PropTypes.func.isRequired,
  setTitulo: PropTypes.func.isRequired,
  descricao: PropTypes.func.isRequired,
  setDescricao: PropTypes.func.isRequired,
}

const WrappedFormCurso = Form.create({ name: 'formCurso' })(CadastrarCurso)

export default WrappedFormCurso
