/* eslint-disable react/prop-types */
import React from 'react'
import {
  Form, Button, Input, Row, Col,
} from 'components'
import PropTypes from 'prop-types'

const FormNewPassword = ({
  form: { getFieldDecorator },
  handleSubmitPassword,
  loading,
  setOldPassword,
  setConfirmNewPassword,
  setNewPassword,
  client,
}) => {
  return (
    <Form
      onSubmit={(e) => handleSubmitPassword(e, client)}
    >
      <Row>
        <Col span={24}>
          <p style={{ marginBottom: '25px', paddingTop: '10px', fontWeight: 'bold' }}>
           newpassword
          </p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item label={'oldpassword'}>
            {getFieldDecorator('oldPassword', {
              rules: [
                {
                  required: true,
                  message:'requiredold',
                },
              ],
            })(
              <Input
                onChange={(e) => setOldPassword(e.target.value)}
                name="oldPassword"
                type="password"
                placeholder={'oldpasss'}
              />,
            )}
          </Form.Item>
          <Form.Item label={'newpassword'}>
            {getFieldDecorator('newPassword', {
              rules: [
                {
                  required: true,
                  message: 'requiredNewPassword',
                },
              ],
            })(
              <Input
                onChange={(e) => setNewPassword(e.target.value)}
                name="newPassword"
                type="password"
                placeholder={'newpassword'}
              />,
            )}
          </Form.Item>
          <Form.Item label={'confirmationPassword'}>
            {getFieldDecorator('newPasswordConfirm', {
              rules: [
                {
                  required: true,
                  message: 'requiredConfirmationPassword',
                },
              ],
            })(
              <Input
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                name="newPasswordConfirm"
                type="password"
                placeholder={'placeholderConfirmation'}
              />,
            )}
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit" loading={loading}>
Alterar senha
      </Button>
    </Form>
  )
}

FormNewPassword.propTypes = {
  handleSubmitPassword: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  setOldPassword: PropTypes.func.isRequired,
  setConfirmNewPassword: PropTypes.func.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
}

const WrappedFormUserNewPassword = Form.create({ name: 'register' })(FormNewPassword)

export default WrappedFormUserNewPassword
