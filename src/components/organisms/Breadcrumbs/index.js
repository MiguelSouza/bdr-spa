
import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Breadcrumb,
} from 'components'

const Breadcrumbs = ({ breadcrumbItens }) => {
  return (
    <Card>
      <Breadcrumb>
        {
          breadcrumbItens.map((bcItem) => {
            return (
              <Breadcrumb.Item key={bcItem.name}>{bcItem.name}</Breadcrumb.Item>
            )
          })
        }
      </Breadcrumb>
    </Card>
  )
}

Breadcrumbs.propTypes = {
  breadcrumbItens: PropTypes.array.isRequired,
}

export default Breadcrumbs
