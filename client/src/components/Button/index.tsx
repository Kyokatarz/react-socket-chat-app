import React from 'react'

type Props = {
  label: string
  onClick?: (p: unknown) => void
}

const Button = ({ label, onClick }: Props) => {
  return (
    <button className='border-2 px-6 py-1 bg-green-500' onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
