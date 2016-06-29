import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Spinner from '../src'

storiesOf('Spinner', module)
  .addWithInfo('Basic', 'When no prop is specified', () => (
    <Spinner />
  ), { inline: true })
  .addWithInfo('Sizes', '', () => (
    <div>
      <Spinner size="small" />
      <Spinner size="regular" />
      <Spinner size="large" />
    </div>
  ), { inline: true })
