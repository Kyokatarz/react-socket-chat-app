import clsx from 'clsx'
import React from 'react'

type Props = {
  label: string
  size?: 'sm' | 'md' | 'lg'
  onClick?: (p: any) => void
  color?: string
}

const Button = ({ label, onClick, size = 'md', color }: Props) => {
  let buttonSize

  switch (size) {
    case 'sm': {
      buttonSize = 'px-4 py-1'
      break
    }

    case 'md': {
      buttonSize = 'px-6 py-2'
      break
    }

    case 'lg': {
      buttonSize = 'px-8 py-3'
      break
    }

    default:
      buttonSize = 'px-6 py-2'
  }

  const buttonClass = clsx('border-2', buttonSize, `bg-${color}`)

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
