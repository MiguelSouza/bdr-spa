import React from 'react'
import PropTypes from 'prop-types'
import {
  Form, Row, Col, Input
} from 'components'
import { DatePicker } from 'antd'
import moment from 'moment';
import 'moment/locale/pt-br';

const CadastrarAluno = ({
  form: { getFieldDecorator },
  idAluno,
  nome,
  setNome,
  email,
  setEmail,
  dataNascimento,
  setDataNascimento,
}) => {
  return (
    <Form
      name="formAluno"
    >
      <Row>
        <Col span={24}>
          <p style={{ marginBottom: '25px', paddingTop: '10px', fontWeight: 'bold' }}>
            {window.location.href.indexOf('edit') !== -1 ? 'Editar Aluno' : 'Cadastrar Aluno'}
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            label={'Nome'}
          >
            {getFieldDecorator('nome', {
              initialValue: (nome),
              rules: [
                {
                  required: true,
                  message: 'Campo obrigatório',
                },
              ],
            })(
              <Input
                name="nome"
                placeholder={'Nome'}
                onChange={(e) => setNome(e.target.value)}
              />,
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            label={'Email'}
          >
            {getFieldDecorator('email', {
              initialValue: (email),
              rules: [
                {
                  required: true,
                  message: 'Campo obrigatório',
                },
              ],
            })(
              <Input
                name="email"
                placeholder={'Email'}
                onChange={(e) => setEmail(e.target.value)}
              />,
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            label={'Data Nascimento'}
          >
              <DatePicker
                format="YYYY-DD-MM"
                defaultValue={moment(dataNascimento, 'YYYY-DD-MM')}
                value={moment(dataNascimento, 'YYYY-DD-MM')}
                onChange={(date, dateString) => setDataNascimento(dateString)}
              />
           </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

CadastrarAluno.propTypes = {
  idAluno: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  setNome: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  dataNascimento: PropTypes.string.isRequired,
  setDataNascimento: PropTypes.func.isRequired,
}

const WrappedFormAluno = Form.create({ name: 'formAluno' })(CadastrarAluno)

export default WrappedFormAluno
