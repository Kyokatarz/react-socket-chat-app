import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import styles from './LandingPage.module.css'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  return (
    <div className={clsx(styles.Join, 'grid place-items-center')}>
      <form className='border-2 p-20 rounded-lg'>
        <h1>Chat App</h1>
        <InputGroup
          label='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          uniqueId='nameInput'
          placeholder='Name'
        />
        <InputGroup
          label='Room'
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          uniqueId='roomInput'
          placeholder='Room'
        />
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
        >
          <Button label='Join' />
        </Link>
      </form>
    </div>
  )
}

export default Join
