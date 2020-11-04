/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Icon,
  Button,
  Collapse,
  Divider,
} from 'components'

const { Option } = Select

const StyledCollapse = styled(Collapse)`
  margin: 15px;
`
const StyledCol = styled(Col)`
  padding: 5px;
`
const StyledDivider = styled(Divider)`
  margin: 40px 0 0 15px;
`
const FilterCBO = (
  {
    setName,
    setCode,
  },
) => {
  const [currentName, setCurrentName] = useState('')
  const [currentCode, setCurrentCode] = useState('')

  const { t } = useTranslation()

  const cleanFilter = (e) => {
    setName('')
    setCode('')
    setCurrentName('')
    setCurrentCode('')
  }

  const handleSearch = () => {
    setName(currentName)
    setCode(currentCode)
  }

  return (
    <StyledCollapse defaultActiveKey={['1']}>
      <Collapse.Panel header={'organisms.CNAEs.FilterCNAE.return.filter'} key="1">
        <Form>
          <Row type="flex" align="middle">
            <StyledCol span={7}>
              <Form.Item
                label={'organisms.CBO.CBOList.columns.code'}
              >
                <Input
                  placeholder={'organisms.CBO.CBOList.columns.code'}
                  name="code"
                  onChange={(e) => { setCurrentCode(e.target.value) }}
                  value={currentCode}
                />
              </Form.Item>
            </StyledCol>
            <StyledCol span={7}>
              <Form.Item
                label={'organisms.CBO.CBOList.columns.title'}
              >
                <Input
                  placeholder={'organisms.CBO.CBOList.columns.title'}
                  name="name"
                  onChange={(e) => { setCurrentName(e.target.value) }}
                  value={currentName}
                />
              </Form.Item>
            </StyledCol>
            <StyledCol span={24}>
              <Button
                onClick={handleSearch}
                type="primary"
                className="login-form-button"
              >
                {'organisms.CNAEs.FilterCNAE.return.search'}
              </Button>
              <Button
                onClick={(e) => {
                  cleanFilter(e)
                }}
                style={{ marginLeft: '10px' }}
                key="back"
              >
                {'organisms.CNAEs.FilterCNAE.return.clear'}
              </Button>
            </StyledCol>
          </Row>
        </Form>
      </Collapse.Panel>
    </StyledCollapse>
  )
}

FilterCBO.propTypes = {
  setName: PropTypes.func.isRequired,
  setCode: PropTypes.func.isRequired,
}

export default FilterCBO
