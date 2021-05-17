import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'

import router from './router'
import { addUser, getUser, removeUser } from './users'

const PORT = process.env.port || 5000

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

/**On connection */
io.on('connection', (socket) => {
  try {
    console.log('Here comes a new challenger!')

    /**Listening to joining event */
    socket.on('join', ({ name, room }, callback) => {
      const { error, user } = addUser({ name, room, id: socket.id })
      console.log({ user, id: socket.id })

      if (error) return callback(error)

      /**Sending a message to the user */
      socket.emit('message', {
        name: 'admin',
        text: `${user.name}, welcome to ${user.room}`,
      })

      /**Sending a message to the other users */
      socket.broadcast.to(user.room).emit('message', {
        name: 'admin',
        text: `${user.name} has join ${user.room}`,
      })

      socket.join(user.room)

      callback()
    })

    /**Listen to this event */
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id)

      io.to(user.room).emit('message', { name: user.name, text: message })
    })

    /**On disconnect */
    socket.on('disconnect', () => {
      removeUser(socket.id)
      console.log('Someone left the chat!')
    })
  } catch (err) {
    console.error(err)
  }
})

//Routers
app.use(router)

server.listen(PORT, () => {
  console.log('Server is running at port ', PORT)
})
