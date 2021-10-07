import React from 'react'

import './LoomView.sass'

import LoomArea from './LoomArea/LoomArea'
import ChatArea from './ChatArea/ChatArea'

const LoomView = () => (
  <div id='LoomView'>
    <LoomArea/>
    <ChatArea/>
  </div>
)

export default LoomView