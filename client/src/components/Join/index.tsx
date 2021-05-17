import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  return (
    <div>
      <div>
        <h1 className='heading'>Join</h1>
        <div>
          <input
            type='text'
            placeholder='Name'
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Room'
            onChange={(event) => setRoom(event.target.value)}
            value={room}
          />
        </div>
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
        >
          <button>Join Chat!</button>
        </Link>
      </div>
    </div>
  )
}

export default Join
