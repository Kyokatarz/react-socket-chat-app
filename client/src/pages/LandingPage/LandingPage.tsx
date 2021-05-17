import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'
import styles from './LandingPage.module.css'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  return (
    <div className={clsx(styles.Join, 'grid place-items-center')}>
      <div className='border-2 p-20 rounded-lg'>
        <h1>Chat App</h1>
        <form className=''>
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
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
          >
            <Button
              label='Join'
              backgroundColor='yellow-400'
              color='white'
              textColor='white'
              customProps='m-2'
            />
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Join
