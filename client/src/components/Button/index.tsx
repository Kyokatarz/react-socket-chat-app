import clsx from 'clsx'
import React from 'react'

type Props = {
  label: string
  size?: 'sm' | 'md' | 'lg'
  onClick?: (p: any) => void
  backgroundColor?: string
  color?: 'black' | 'white'
  textColor?: 'black' | 'white'
  customProps?: string
}

const Button = ({
  label,
  onClick,
  size = 'md',
  backgroundColor,
  color = 'black',
  textColor = 'black',
  customProps,
}: Props) => {
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

  return (
    <button
      className={clsx(
        `border-2 border-${color}`,
        buttonSize,
        `bg-${backgroundColor}`,
        customProps
      )}
      onClick={onClick}
    >
      <span className={`text-${textColor}`}>{label}</span>
    </button>
  )
}

export default Button
