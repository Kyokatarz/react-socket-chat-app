import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'

import { ENDPOINT } from '../../App'

let socket: any

const ChatRoom = () => {
  const location = useLocation()
  useEffect(() => {
    const { room, name } = queryString.parse(location.search)
    socket = io(ENDPOINT)
    socket.emit('join', { room, name }, ({ error }: any) => {
      console.log(error)
    })

    return () => {
      socket.off()
    }
  }, [location])

  return <div>Hello this is chat room</div>
}

export default ChatRoom
