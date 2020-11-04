import React from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Button,
  Input,
  Row,
  Col,
  AvatarEdit,
} from 'components'

const FormUserProfile = ({
  form: { getFieldDecorator },
  id,
  avatar,
  setAvatar,
  handleSubmit,
  loading,
  setEmail,
  setGivenName,
  setFamilyName,
  setPhone,
  setCPF,
  setCNPJ,
  setCompany,
  email,
  givenName,
  familyName,
  phone,
  cpf,
  cnpj,
  company,
  client,
}) => {
  const { t } = useTranslation()

  // Remove CNPJ mask
  const onChangeCNPJ = (e) => {
    const cnpj = e.target.value
      .toString()
      .split('_')
      .join('')
      .split('.')
      .join('')
      .replace('/', '')
      .replace('-', '')
    setCNPJ(cnpj)
  }

  return (
    <Form
      onSubmit={(e) => handleSubmit(e, client)}
    >
      <Row>
        <Col span={24}>
          <p style={{ marginBottom: '25px', paddingTop: '10px', fontWeight: 'bold' }}>
            Dados Pessoais
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item label={'firname'}>
            {getFieldDecorator('givenName', {
              initialValue: givenName,
              rules: [
                {
                  required: true,
                  message: 'requiredFirstName',
                },
              ],
            })(
              <Input
                onChange={(e) => setGivenName(e.target.value)}
                placeholder={'molecules.Forms.FormUserProfile.firstName'}
                name="givenName"
                type="text"
              />,
            )}
          </Form.Item>
          <Form.Item label={'molecules.Forms.FormUserProfile.surname'}>
            {getFieldDecorator('familyName', {
              initialValue: familyName,
              rules: [
                {
                  required: true,
                  message: 'molecules.Forms.FormUserProfile.requiredSurname',
                },
              ],
            })(
              <Input
                onChange={(e) => setFamilyName(e.target.value)}
                name="familyName"
                type="text"
                placeholder={'molecules.Forms.FormUserProfile.surname'}
              />,
            )}
          </Form.Item>
          <Form.Item label={'molecules.Forms.FormUserProfile.email'}>
            {getFieldDecorator('email', {
              initialValue: email,
              rules: [
                {
                  type: 'email',
                  message: 'molecules.Forms.FormUserProfile.invalidEmail',
                },
                {
                  required: true,
                  message: 'molecules.Forms.FormUserProfile.requiredEmail',
                },
              ],
            })(
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder={'molecules.Forms.FormUserProfile.email'}
                name="email"
                type="text"
              />,
            )}
          </Form.Item>
          <Form.Item label={'molecules.Forms.FormUserProfile.phone'}>
            {getFieldDecorator('phone', {
              initialValue: phone,
              rules: [
                {
                  required: true,
                  message: 'molecules.Forms.FormUserProfile.requiredPhone',
                },
              ],
            })(
              <Input
                onChange={(e) => setPhone(telMask(e.target.value))}
                placeholder={'molecules.Forms.FormUserProfile.phone'}
                name="phone"
                type="text"
              />,
            )}
          </Form.Item>
          <Form.Item label={'molecules.Forms.FormUserProfile.CPF'}>
            {getFieldDecorator('cpf', {
              initialValue: cpf,
              rules: [
                {
                  required: true,
                  message: 'molecules.Forms.FormUserProfile.requiredCPF',
                },
              ],
            })(
              <MaskedInput
                mask="111.111.111-11"
                onChange={(e) => { setCPF(e.target.value) }}
                placeholder={'molecules.Forms.FormUserProfile.CPF'}
                name="cpf"
                type="text"
              />,
            )}
          </Form.Item>
          <Form.Item label={'molecules.Forms.FormUserProfile.company'}>
            {getFieldDecorator('company', {
              initialValue: company,
              rules: [
                {
                  required: true,
                  message: 'molecules.Forms.FormUserProfile.requiredCompany',
                },
              ],
            })(
              <Input
                disabled
                onChange={(e) => setCompany(e.target.value)}
                placeholder={'molecules.Forms.FormUserProfile.company'}
                name="company"
                type="text"
              />,
            )}
          </Form.Item>
          <Form.Item label={'molecules.Forms.FormUserProfile.CNPJ'}>
            {getFieldDecorator('cnpj', {
              initialValue: cnpj,
              rules: [
                {
                  required: true,
                  message: 'molecules.Forms.FormUserProfile.requiredCNPJ',
                },
              ],
            })(
              <MaskedInput
                disabled
                mask="11.111.111/1111-11"
                onChange={(e) => onChangeCNPJ(e)}
                placeholder={'molecules.Forms.FormUserProfile.CNPJ'}
                name="cnpj"
                type="text"
              />,
            )}
          </Form.Item>
        </Col>
        <Col span={5} offset={3} align="center">
          <AvatarEdit userId={id} avatar={avatar} createAvatar={CreateAvatar} setAvatar={setAvatar} />
        </Col>
      </Row>
      <Button type="primary" loading={loading} htmlType="submit">{'molecules.Forms.FormUserProfile.save'}</Button>
    </Form>
  )
}

FormUserProfile.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  setAvatar: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
  setEmail: PropTypes.func,
  setGivenName: PropTypes.func,
  setFamilyName: PropTypes.func,
  setPhone: PropTypes.func,
  setCPF: PropTypes.func,
  setCNPJ: PropTypes.func,
  setCompany: PropTypes.func,
  email: PropTypes.string,
  givenName: PropTypes.string,
  familyName: PropTypes.string,
  phone: PropTypes.string,
  cpf: PropTypes.string,
  cnpj: PropTypes.string,
  company: PropTypes.string,
  client: PropTypes.object,
  form: PropTypes.any,
}

const WrappedFormUserProfile = Form.create({ name: 'register' })(FormUserProfile)

export default WrappedFormUserProfile
