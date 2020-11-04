import React from 'react'
import {
  Form,
  Select,
  Input,
  Row,
  Col,
} from 'components'
import PropTypes from 'prop-types'

const { Option } = Select

const FormAddCNAE = ({
  category,
  setCategory,
  segment,
  setSegment,
  shortCode,
  setShortCode,
  CNAE,
  setCNAE,
  name,
  setName,
  categories,
  segments,
  shortCodes,
  getShortCodes,
  getSegments,
}) => {
  return (
    <Form>
      <Row type="flex" align="middle">
        <Col span={6}>
          <Form.Item
            label={'category'}
          >
          </Form.Item>
          <Form.Item
            label={'segment'}
          >
          </Form.Item>
          <Form.Item
            label={'codereduced'}
          >
          </Form.Item>
          <Form.Item
            label={'cnae'}
          >
          </Form.Item>
          <Form.Item
            label={'nome'}
          >
          </Form.Item>
        </Col>
        <Col span={18}>
          <Form.Item>
            <Select
              placeholder="Categoria"
              onChange={(e) => {
                setCategory(e)
                getSegments(e)
                setCNAE('')
              }}
              value={category || 'category'}
            >
              {categories && categories.map((category) => <Option value={category.id} key={category.name}>{category.name}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item>
            <Select
              placeholder="Segmento"
              onChange={(e) => {
                setSegment(e)
                getShortCodes(e)
                setCNAE('')
              }}
              value={segment || 'segment'}
            >
              {segments && segments.map((segment) => <Option value={segment.id} key={segment.name}>{segment.name}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item>
            <Select
              placeholder="Código reduzido"
              onChange={(e) => {
                setShortCode(e)
                loadCNAE(e)
              }}
              value={shortCode || 'code'}
            >
              {shortCodes && shortCodes.map((shortCode) => <Option value={shortCode.id} key={shortCode.name}>{shortCode.name}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item>
            <Input
              placeholder={'cnaeee'}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

FormAddCNAE.propTypes = {
  category: PropTypes.number,
  setCategory: PropTypes.func,
  segment: PropTypes.number,
  setSegment: PropTypes.func,
  shortCode: PropTypes.number,
  setShortCode: PropTypes.func,
  CNAE: PropTypes.string,
  setCNAE: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  categories: PropTypes.array,
  segments: PropTypes.array,
  shortCodes: PropTypes.array,
  getShortCodes: PropTypes.func,
  getSegments: PropTypes.func,
}

export default FormAddCNAE
