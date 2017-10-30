import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'
import {store} from './configureStore'

import './css/bootstrap.css'
import './css/App.css'
import './css/fa/css/font-awesome.min.css'

render(
  <Root store={store}/>,
  document.getElementById('root')
)
