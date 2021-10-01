import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './main.sass'

import ChatArea from './components/ChatArea/ChatArea'

const Main = () => (
  <div id='Main'>
    <ChatArea/>
  </div>
)

ReactDOM.render(<Main/>, document.getElementById('root'))