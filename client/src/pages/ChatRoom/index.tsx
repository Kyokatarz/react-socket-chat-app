import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'
import clsx from 'clsx'
import io from 'socket.io-client'

import { ENDPOINT } from '../../App'
import Message from '../../components/Message'
import ChatInputBox from '../../components/ChatInputBox'
import { MessageType } from '../../types'

let socket: any

const ChatRoom = () => {
  const location = useLocation()
  const history = useHistory()

  const [allMessages, setAllMessages] = useState<MessageType[]>([])
  const [username, setUsername] = useState<string>('')
  useEffect(() => {
    const { room, name } = queryString.parse(location.search) as {
      room: string
      name: string
    }

    setUsername(name)

    socket = io(ENDPOINT)

    socket.emit('join', { room, name }, (err: any) => {
      if (err) {
        history.push('/')
      }
    })

    return () => {
      socket.off()
    }
  }, [])

  /**Listen to message event from backend */
  useEffect(() => {
    socket.on('message', (message: MessageType) => {
      setAllMessages((prev) => [...prev, message])
    })
  }, [])

  /**Function for sending message */
  const sendMessage = (text: string) => {
    if (text) {
      socket.emit('sendMessage', text, () => {
        setAllMessages([...allMessages, { text, name: username }])
      })
    }
  }

  useEffect(() => {
    console.log(allMessages)
  })

  return (
    <div>
      <div className='MessageContainer'>
        {allMessages.map((message) => (
          <Message text={message.text} name={message.name} />
        ))}
      </div>
      <ChatInputBox send={sendMessage} />
    </div>
  )
}

export default React.memo(ChatRoom)
