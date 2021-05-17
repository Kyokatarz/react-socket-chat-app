import clsx from 'clsx'
import React from 'react'

type Props = {
  text: string
  name: string
  isOwnMessage: boolean
}

const Message = ({ text, name, isOwnMessage }: Props) => {
  const messageAlign = isOwnMessage ? 'justify-end' : 'justify-start'

  if (name === 'admin') {
    return (
      <div>
        <p className='justify-self-center italic text-white text-opacity-80'>
          {text}
        </p>
      </div>
    )
  }
  return (
    <div className={clsx('w-full flex', messageAlign)}>
      <div className='flex flex-col text-left bg-blue-300 my-1 mx-1 rounded-sm p-2 w-max max-w-full'>
        <p className='text-md text-yellow-600 break-words font-bold'>{name}</p>
        <p className='break-words'> {text}</p>
      </div>
    </div>
  )
}

export default Message
