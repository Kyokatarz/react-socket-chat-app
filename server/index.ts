import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'

const PORT = process.env.port || 5000

const app = express()
const server = createServer(app)
const io = new Server(server)

server.listen(PORT, () => {
  console.log('Server is running at port ', PORT)
})
