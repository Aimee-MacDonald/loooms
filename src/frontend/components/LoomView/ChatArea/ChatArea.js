import React, { useState } from 'react'
import io from 'socket.io-client'
const socket = io.connect()

const ChatArea = () => {
  const [ messages, setMessages ] = useState([])
  const [ isConnected, setConnected ] = useState(false)

  socket.on('connect', () => setConnected(true))
  socket.on('disconnect', () => setConnected(false))
  socket.on('newMessage', newMessage => setMessages([...messages, newMessage]))

  const sendMessage = e => {
    e.preventDefault()

    socket.emit('newMessage', {
      timestamp: Date.now(),
      message: e.target.newMessage.value
    })

    e.target.newMessage.value = ''
  }

  return (
    <div>
      <div>
        {messages.map(({ sender, message }) => <p>{`${sender}: ${message}`}</p>)}
      </div>
      
      {isConnected && (
        <form onSubmit={sendMessage}>
          <input id='newMessage'/>
          <button type='submit'>Send</button>
        </form>
      )}
    </div>
  )
}

export default ChatArea