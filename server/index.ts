import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'

import router from './router'

const PORT = process.env.port || 5000

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('Here comes a new challenger!')

  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room)
  })

  socket.on('disconnect', () => {
    console.log('Someone left the chat!')
  })
})

//Routers
app.use(router)

server.listen(PORT, () => {
  console.log('Server is running at port ', PORT)
})
