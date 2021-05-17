import React from 'react'

type Props = {
  text: string
  name: string
}

const Message = ({ text, name }: Props) => {
  return (
    <div>
      {name}: {text}
    </div>
  )
}

export default Message
