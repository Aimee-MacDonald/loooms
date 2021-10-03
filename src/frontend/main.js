import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './main.sass'

import LoomArea from './components/LoomArea/LoomArea'
import ChatArea from './components/ChatArea/ChatArea'

const Main = () => (
  <div id='Main'>
    <LoomArea/>
    <ChatArea/>
  </div>
)

ReactDOM.render(<Main/>, document.getElementById('root'))