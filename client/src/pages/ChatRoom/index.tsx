import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'

import { ENDPOINT } from '../../App'

let socket: any

const ChatRoom = () => {
  const location = useLocation()

  const [message, setMessage] = useState('')
  const [allMessages, setAllMessages] = useState<string[]>([])

  useEffect(() => {
    const { room, name } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    socket.emit('join', { room, name }, () => {})

    return () => {
      socket.off()
    }
  }, [location])

  /**Listen to message event from backend */
  useEffect(() => {
    socket.on('message', (message: string) => {
      setAllMessages([...allMessages, message])
    })
  }, [allMessages])

  /**Function for sending message */
  const sendMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, allMessages)

  return (
    <div>
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
    </div>
  )
}

export default ChatRoom
