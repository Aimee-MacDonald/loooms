import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './main.sass'

import LoomView from './components/LoomView/LoomView'

const Main = () => (
  <div id='Main'>
    <LoomView/>
  </div>
)

ReactDOM.render(<Main/>, document.getElementById('root'))