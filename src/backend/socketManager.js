const path = require('path')

module.exports = server => {
  const io = require('socket.io')(server)
  
  let sockets = []
  io.on('connection', socket => {
    sockets.push(socket)
    
    sockets.forEach(sock => {
      sock.emit('newMessage', {
        sender: 'Admin',
        timestamp: Date.now(),
        message: `${socket.id} has entered the chat`
      })
    })

    socket.on('disconnect', () => {
      sockets = sockets.filter(sock => sock.id !== socket.id)

      sockets.forEach(sock => sock.emit('newMessage', {
        sender: 'Admin',
        timestamp: Date.now(),
        message: `${socket.id} has left the chat`
      }))
    })

    socket.on('newMessage', newChatMessage => {
      const message = {
        sender: socket.id,
        ...newChatMessage
      }

      sockets.forEach(sock => sock.emit('newMessage', message))
    })
  })
}