import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'

import { ENDPOINT } from '../../App'
import Message from '../../components/Message'
import ChatInputBox from '../../components/ChatInputBox'
import { MessageType, User } from '../../types'

let socket: any

const ChatRoom = () => {
  const location = useLocation()
  const history = useHistory()

  const [allMessages, setAllMessages] = useState<MessageType[]>([])
  const [username, setUsername] = useState<string>('')
  const [usersInRoom, setUsersInRoom] = useState<User[]>([])

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
  }, [history, location])

  useEffect(() => {
    /**Listen to newUserJoinRoom event*/
    socket.on('newUserJoinRoom', (payload: User[]) => {
      console.log('New user event was called!')
      setUsersInRoom(payload)
    })
    /**Listen to message event from backend */
    socket.on('message', (message: MessageType) => {
      console.log('Message event was called!')
      setAllMessages((prev) => [...prev, message])
    })
  }, [])

  /**Function for sending message */
  const sendMessage = (text: string) => {
    console.log('Send message method was called!')
    if (text) {
      socket.emit('sendMessage', text)
    }
  }

  useEffect(() => {
    console.log({ allMessages, usersInRoom })
  })

  return (
    <div className='h-screen flex justify-center'>
      <div className='h-screen w-6/12 border-2 border-white rounded-lg p-2'>
        <div className='MessageContainer h-5/6 overflow-y-auto'>
          {allMessages.map((message) => (
            <Message
              text={message.text}
              name={message.name}
              isOwnMessage={username === message.name}
            />
          ))}
        </div>
        <ChatInputBox send={sendMessage} />
      </div>
    </div>
  )
}

export default React.memo(ChatRoom)
