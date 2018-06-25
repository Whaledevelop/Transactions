import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import Root from './components/app/Root'
import {store} from './configureStore'


render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
)