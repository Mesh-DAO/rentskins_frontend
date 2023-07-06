import React, { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelSide?: 'up' | 'down'
  labelClassName?: string
  limit?: number
  inputClassName?: string
  state: any
  setState: any
}

export function FormInputNumber({
  label,
  labelSide = 'up',
  labelClassName,
  limit = 0,
  inputClassName,
  state,
  setState,
  ...rest
}: IProps) {
  const formatInput = (value: string): string => {
    const numbers = value.replace(/\D/g, '')

    if (limit > 0) {
      return numbers.slice(0, limit)
    }

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
