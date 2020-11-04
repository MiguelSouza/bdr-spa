// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { CNAEsListPage } from 'components'

storiesOf('CNAEsListPage', module)
  .add('default', () => (
    <CNAEsListPage />
  ))
