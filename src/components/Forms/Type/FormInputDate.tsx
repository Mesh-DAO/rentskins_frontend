import React, { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelSide?: 'up' | 'down'
  labelClassName?: string
  inputClassName?: string
  state: any
  setState: any
}

export function FormInputDate({
  label,
  labelSide = 'up',
  labelClassName,
  inputClassName,
  state,
  setState,
  ...rest
}: IProps) {
  const formatInput = (value: string): string => {
    let numbers = value.replace(/\D/g, '')

    numbers = numbers.replace(/^(\d{2})(\d{2})(\d{4}).*/, '$1/$2/$3')

    return numbers
  }

  return (
    <label className={`${labelClassName} flex flex-col text-lg`}>
      {label && labelSide === 'up' && label}
      <input
        type="text"
        onChange={({ target }) => setState(formatInput(target.value))}
        value={state}
        className={`${inputClassName} rounded-md border-[2px]
        border-mesh-color-primary-1100/50 bg-mesh-color-others-eerie-black px-3 py-3 placeholder:text-white/70`}
        {...rest}
      />
      {label && labelSide === 'down' && label}
    </label>
  )
}
