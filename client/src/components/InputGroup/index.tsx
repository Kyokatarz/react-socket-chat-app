import React from 'react'

type Props = {
  label?: string
  value?: string
  uniqueId?: string
  placeholder?: string
  onChange?: (e: any) => void
}

const InputGroup = ({
  label,
  value,
  onChange,
  uniqueId,
  placeholder,
}: Props) => {
  return (
    <div className='m-1'>
      <label htmlFor={uniqueId}>{label}: </label>
      <input
        id={uniqueId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='rounded-sm'
      />
    </div>
  )
}

export default InputGroup
