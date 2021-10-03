import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './main.sass'

import LoomFactory from './components/LoomFactory/LoomFactory'

const Main = () => (
  <div id='Main'>
    <LoomFactory/>
  </div>
)

ReactDOM.render(<Main/>, document.getElementById('root'))