import React, { useState } from 'react'

import Button from '../Button'

type Props = {
  send: (text: any) => void
}

const ChatInput = ({ send }: Props) => {
  const [text, setText] = useState('')

  const sendText = () => {
    send(text)
    setText('')
  }

  return (
    <div>
      <input
        className='p-3 w-full my-1 rounded-sm'
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder='Enter your message...'
        onKeyPress={(event) => (event.key === 'Enter' ? sendText() : null)}
      />
      <Button
        onClick={sendText}
        label='Send'
        size='sm'
        backgroundColor='green-400'
        color='white'
        customProps='w-full'
      />
    </div>
  )
}

export default ChatInput
