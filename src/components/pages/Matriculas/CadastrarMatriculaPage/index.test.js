// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import CNAEsListPage from '.'

it('renders', () => {
  shallow(<CNAEsListPage />)
})
